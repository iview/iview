<template>
    <span><slot/></span>
</template>
<script>
  export default {
    name: 'FileExport',
    methods: {
      wordExport (fileName) {
        // console.log(this.$el.innerHTML)
        _wordExport(this.$el, fileName)
      }
    }
  };

  function _wordExport (dom, fileName) {
    fileName = typeof fileName !== 'undefined' ? fileName : 'WordExport'
    var mhtml = {
      top: 'Mime-Version: 1.0\nContent-Base: ' + location.href + '\nContent-Type: Multipart/related; boundary="NEXT.ITEM-BOUNDARY";type="text/html"\n\n--NEXT.ITEM-BOUNDARY\nContent-Type: text/html; charset="utf-8"\nContent-Location: ' + location.href + '\n\n<!DOCTYPE html>\n<html>\n_html_</html>',
      head: '<head>\n<meta http-equiv="Content-Type" content="text/html; charset=utf-8">\n<style>\n_styles_\n</style>\n</head>\n',
      body: '<body>_body_</body>'
    }

    // Clone selected element before manipulating it
    var markup = dom

    // Prepare bottom of mhtml file with image data
    var mhtmlBottom = '\n'
    mhtmlBottom += '--NEXT.ITEM-BOUNDARY--'
    // TODO: load css from included stylesheet
    var styles = ''
    // Aggregate parts of the file together
    var fileContent = mhtml.top.replace('_html_', mhtml.head.replace('_styles_', styles) + mhtml.body.replace('_body_', markup.innerHTML)) + mhtmlBottom

    // Create a Blob with the file contents
    var blob = new Blob([fileContent], {
      type: 'application/msword;charset=utf-8'
    })
    saveAs(blob, fileName + '.doc')
  }

  var saveAs = saveAs || (function (view) {
    'use strict'
    // IE <10 is explicitly unsupported
    if (typeof view === 'undefined' || typeof navigator !== 'undefined' && /MSIE [1-9]\./.test(navigator.userAgent)) {
      return
    }
    var doc = view.document
    // only get URL when necessary in case Blob.js hasn't overridden it yet
    var getURL = function () {
      return view.URL || view.webkitURL || view
    }
    var saveLink = doc.createElementNS('http://www.w3.org/1999/xhtml', 'a')
    var canUseSaveLink = 'download' in saveLink
    var click = function (node) {
      var event = new MouseEvent('click')
      node.dispatchEvent(event)
    }
    var isSafari = /constructor/i.test(view.HTMLElement)
    var isChromeIos = /CriOS\/[\d]+/.test(navigator.userAgent)
    var throwOutside = function (ex) {
      (view.setImmediate || view.setTimeout)(function () {
        throw ex
      }, 0)
    }
    var forceSaveableType = 'application/octet-stream'
    // the Blob API is fundamentally broken as there is no "downloadfinished" event to subscribe to
    var arbitraryRevokeTimeout = 1000 * 40 // in ms
    var revoke = function (file) {
      var revoker = function () {
        if (typeof file === 'string') { // file is an object URL
          getURL().revokeObjectURL(file)
        } else { // file is a File
          file.remove()
        }
      }
      setTimeout(revoker, arbitraryRevokeTimeout)
    }
    var dispatch = function (filesaver, eventTypes, event) {
      eventTypes = [].concat(eventTypes)
      var i = eventTypes.length
      while (i--) {
        var listener = filesaver['on' + eventTypes[i]]
        if (typeof listener === 'function') {
          try {
            listener.call(filesaver, event || filesaver)
          } catch (ex) {
            throwOutside(ex)
          }
        }
      }
    }
    var autoBom = function (blob) {
      // prepend BOM for UTF-8 XML and text/* types (including HTML)
      // note: your browser will automatically convert UTF-16 U+FEFF to EF BB BF
      if (/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(blob.type)) {
        return new Blob([String.fromCharCode(0xFEFF), blob], {type: blob.type})
      }
      return blob
    }
    var FileSaver = function (blob, name, noAutoBom) {
      if (!noAutoBom) {
        blob = autoBom(blob)
      }
      // First try a.download, then web filesystem, then object URLs
      var filesaver = this
      var type = blob.type
      var force = type === forceSaveableType
      var objectUrl
      var dispatchAll = function () {
        dispatch(filesaver, 'writestart progress write writeend'.split(' '))
      }
      // on any filesys errors revert to saving with object URLs
      var fsError = function () {
        if ((isChromeIos || (force && isSafari)) && view.FileReader) {
          // Safari doesn't allow downloading of blob urls
          var reader = new FileReader()
          reader.onloadend = function () {
            var url = isChromeIos ? reader.result : reader.result.replace(/^data:[^;]*;/, 'data:attachment/file;')
            var popup = view.open(url, '_blank')
            if (!popup) view.location.href = url
            url = undefined // release reference before dispatching
            filesaver.readyState = filesaver.DONE
            dispatchAll()
          }
          reader.readAsDataURL(blob)
          filesaver.readyState = filesaver.INIT
          return
        }
        // don't create more object URLs than needed
        if (!objectUrl) {
          objectUrl = getURL().createObjectURL(blob)
        }
        if (force) {
          view.location.href = objectUrl
        } else {
          var opened = view.open(objectUrl, '_blank')
          if (!opened) {
            // Apple does not allow window.open, see https://developer.apple.com/library/safari/documentation/Tools/Conceptual/SafariExtensionGuide/WorkingwithWindowsandTabs/WorkingwithWindowsandTabs.html
            view.location.href = objectUrl
          }
        }
        filesaver.readyState = filesaver.DONE
        dispatchAll()
        revoke(objectUrl)
      }

      filesaver.readyState = filesaver.INIT

      if (canUseSaveLink) {
        objectUrl = getURL().createObjectURL(blob)
        setTimeout(function () {
          saveLink.href = objectUrl
          saveLink.download = name
          click(saveLink)
          dispatchAll()
          revoke(objectUrl)
          filesaver.readyState = filesaver.DONE
        })
        return
      }

      fsError()
    }
    var FSProto = FileSaver.prototype
    var saveAs = function (blob, name, noAutoBom) {
      return new FileSaver(blob, name || blob.name || 'download', noAutoBom)
    }

    // IE 10+ (native saveAs)
    if (typeof navigator !== 'undefined' && navigator.msSaveOrOpenBlob) {
      return function (blob, name, noAutoBom) {
        name = name || blob.name || 'download'

        if (!noAutoBom) {
          blob = autoBom(blob)
        }
        return navigator.msSaveOrOpenBlob(blob, name)
      }
    }

    FSProto.abort = function () {
    }
    FSProto.readyState = FSProto.INIT = 0
    FSProto.WRITING = 1
    FSProto.DONE = 2

    FSProto.error =
      FSProto.onwritestart =
        FSProto.onprogress =
          FSProto.onwrite =
            FSProto.onabort =
              FSProto.onerror =
                FSProto.onwriteend =
                  null

    return saveAs
  }(
    typeof self !== 'undefined' && self || typeof window !== 'undefined' && window || this.content
  ))
</script>
