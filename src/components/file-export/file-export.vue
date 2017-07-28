<template>
    <span><slot/></span>
</template>
<script>
  export default {
    name: 'FileExport',
    methods: {
      wordExport (fileName, options) {
        // console.log(this.$el.innerHTML)
        _wordExport(this.$el, fileName, options)
      }
    }
  };

  function _wordExport (dom, fileName, options) {
    fileName = typeof fileName !== 'undefined' ? fileName : 'WordExport'
    const defaultOptions = {
      size: '595.3pt 841.9pt', // A4 大小
      margin: '72.0pt 90.0pt 72.0pt 90.0pt'
    }
    options = options || {}
    options = {...defaultOptions, ...options}

    const fileContent = `Mime-Version: 1.0
Content-Base: ${location.href}
Content-Type: Multipart/related; boundary="NEXT.ITEM-BOUNDARY";type="text/html"

--NEXT.ITEM-BOUNDARY
Content-Type: text/html; charset="utf-8"
Content-Location: $\{location.href}

<!DOCTYPE html>
<html xmlns:v="urn:schemas-microsoft-com:vml"
    xmlns:o="urn:schemas-microsoft-com:office:office"
    xmlns:w="urn:schemas-microsoft-com:office:word"
    xmlns:m="http://schemas.microsoft.com/office/2004/12/omml"
    xmlns="http://www.w3.org/TR/REC-html40">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <!--[if gte mso 9]>
    <xml>
        <w:WordDocument>
            <w:View>Print</w:View>
            <w:GrammarState>Clean</w:GrammarState>
            <w:TrackMoves>false</w:TrackMoves>
            <w:TrackFormatting/>
            <w:ValidateAgainstSchemas/>
            <w:SaveIfXMLInvalid>false</w:SaveIfXMLInvalid>
            <w:IgnoreMixedContent>false</w:IgnoreMixedContent>
            <w:AlwaysShowPlaceholderText>false</w:AlwaysShowPlaceholderText>
            <w:DoNotPromoteQF/>
            <w:LidThemeOther>EN-US</w:LidThemeOther>
            <w:LidThemeAsian>ZH-CN</w:LidThemeAsian>
            <w:LidThemeComplexScript>X-NONE</w:LidThemeComplexScript>
            <w:Compatibility>
                <w:BreakWrappedTables/>
                <w:SnapToGridInCell/>
                <w:WrapTextWithPunct/>
                <w:UseAsianBreakRules/>
                <w:DontGrowAutofit/>
                <w:SplitPgBreakAndParaMark/>
                <w:DontVertAlignCellWithSp/>
                <w:DontBreakConstrainedForcedTables/>
                <w:DontVertAlignInTxbx/>
                <w:Word11KerningPairs/>
                <w:CachedColBalance/>
                <w:UseFELayout/>
            </w:Compatibility>
            <w:BrowserLevel>MicrosoftInternetExplorer4</w:BrowserLevel>
            <m:mathPr>
                <m:mathFont m:val="Cambria Math"/>
                <m:brkBin m:val="before"/>
                <m:brkBinSub m:val="--"/>
                <m:smallFrac m:val="off"/>
                <m:dispDef/>
                <m:lMargin m:val="0"/>
                <m:rMargin m:val="0"/>
                <m:defJc m:val="centerGroup"/>
                <m:wrapIndent m:val="1440"/>
                <m:intLim m:val="subSup"/>
                <m:naryLim m:val="undOvr"/>
            </m:mathPr>
        </w:WordDocument>
    </xml>
    <![endif]-->
    <style>
        @page WordSection1{
            size:${options.size};
            margin:${options.margin};
            mso-header-margin:42.55pt;
            mso-footer-margin:49.6pt;
            mso-paper-source:0;
        }
        div.WordSection1{
            page:WordSection1;
        }
    </style>
</head>
<body>
    <div class="WordSection1">${dom.innerHTML}</div>
</body>
</html>
--NEXT.ITEM-BOUNDARY--`
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
