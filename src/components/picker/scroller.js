/*
* Anima Scroller
* Based Zynga Scroller (http://github.com/zynga/scroller)
* Copyright 2011, Zynga Inc.
* Licensed under the MIT License.
* https://raw.github.com/zynga/scroller/master/MIT-LICENSE.txt
*/

const isBrowser = typeof window === 'object'

const TEMPLATE = `
<div class="scroller-component" data-role="component">
  <div class="scroller-mask" data-role="mask"></div>
  <div class="scroller-indicator" data-role="indicator"></div>
  <div class="scroller-content" data-role="content"></div>
</div>
`

const Animate = require('./animate')
const { getElement, getComputedStyle, easeOutCubic, easeInOutCubic } = require('./util')
const passiveSupported = require('../../libs/passive_supported')

const getDpr = function () {
  let dpr = 1
  if (isBrowser) {
    if (window.VUX_CONFIG && window.VUX_CONFIG.$picker && window.VUX_CONFIG.$picker.respectHtmlDataDpr) {
      dpr = document.documentElement.getAttribute('data-dpr') || 1
    }
  }
  return dpr
}

const Scroller = function (container, options) {
  const self = this

  self.dpr = getDpr()

  options = options || {}

  self.options = {
    itemClass: 'scroller-item',
    onSelect () {},
    defaultValue: 0,
    data: []
  }

  for (var key in options) {
    if (options[key] !== undefined) {
      self.options[key] = options[key]
    }
  }

  self.__container = getElement(container)

  var tempContainer = document.createElement('div')
  tempContainer.innerHTML = options.template || TEMPLATE

  var component = self.__component = tempContainer.querySelector('[data-role=component]')
  var content = self.__content = component.querySelector('[data-role=content]')
  var indicator = component.querySelector('[data-role=indicator]')

  var data = self.options.data
  var html = ''
  if (data.length && data[0].constructor === Object) {
    data.forEach(function (row) {
      html += '<div class="' + self.options.itemClass + '" data-value=' + JSON.stringify({value: encodeURI(row.value)}) + '>' + row.name + '</div>'
    })
  } else {
    data.forEach(function (val) {
      html += '<div class="' + self.options.itemClass + '" data-value=' + JSON.stringify({value: encodeURI(val)}) + '>' + val + '</div>'
    })
  }
  content.innerHTML = html

  self.__container.appendChild(component)

  self.__itemHeight = parseFloat(getComputedStyle(indicator, 'height'), 10)

  self.__callback = options.callback || function (top) {
    const distance = -top * self.dpr
    content.style.webkitTransform = 'translate3d(0, ' + distance + 'px, 0)'
    content.style.transform = 'translate3d(0, ' + distance + 'px, 0)'
  }

  var rect = component.getBoundingClientRect()

  self.__clientTop = (rect.top + component.clientTop) || 0

  self.__setDimensions(component.clientHeight, content.offsetHeight)

  if (component.clientHeight === 0) {
    self.__setDimensions(parseFloat(getComputedStyle(component, 'height'), 10), 204)
  }
  self.select(self.options.defaultValue, false)

  const touchStartHandler = function (e) {
    if (e.target.tagName.match(/input|textarea|select/i)) {
      return
    }
    e.preventDefault()
    self.__doTouchStart(e, e.timeStamp)
  }

  const touchMoveHandler = function (e) {
    self.__doTouchMove(e, e.timeStamp)
  }

  const touchEndHandler = function (e) {
    self.__doTouchEnd(e.timeStamp)
  }

  const willPreventDefault = passiveSupported ? {passive: false} : false
  const willNotPreventDefault = passiveSupported ? {passive: true} : false

  component.addEventListener('touchstart', touchStartHandler, willPreventDefault)
  component.addEventListener('mousedown', touchStartHandler, willPreventDefault)

  component.addEventListener('touchmove', touchMoveHandler, willNotPreventDefault)
  component.addEventListener('mousemove', touchMoveHandler, willNotPreventDefault)

  component.addEventListener('touchend', touchEndHandler, willNotPreventDefault)
  component.addEventListener('mouseup', touchEndHandler, willNotPreventDefault)
}

var members = {
  value: null,
  __prevValue: null,
  __isSingleTouch: false,
  __isTracking: false,
  __didDecelerationComplete: false,
  __isGesturing: false,
  __isDragging: false,
  __isDecelerating: false,
  __isAnimating: false,
  __clientTop: 0,
  __clientHeight: 0,
  __contentHeight: 0,
  __itemHeight: 0,
  __scrollTop: 0,
  __minScrollTop: 0,
  __maxScrollTop: 0,
  __scheduledTop: 0,
  __lastTouchTop: null,
  __lastTouchMove: null,
  __positions: null,
  __minDecelerationScrollTop: null,
  __maxDecelerationScrollTop: null,
  __decelerationVelocityY: null,

  __setDimensions (clientHeight, contentHeight) {
    var self = this

    self.__clientHeight = clientHeight
    self.__contentHeight = contentHeight

    var totalItemCount = self.options.data.length
    var clientItemCount = Math.round(self.__clientHeight / self.__itemHeight)

    self.__minScrollTop = -self.__itemHeight * (clientItemCount / 2)
    self.__maxScrollTop = self.__minScrollTop + totalItemCount * self.__itemHeight - 0.1
  },

  selectByIndex (index, animate) {
    var self = this
    if (index < 0 || index > self.__content.childElementCount - 1) {
      return
    }
    self.__scrollTop = self.__minScrollTop + index * self.__itemHeight

    self.scrollTo(self.__scrollTop, animate)

    self.__selectItem(self.__content.children[index])
  },

  select (value, animate) {
    var self = this

    var children = self.__content.children
    for (var i = 0, len = children.length; i < len; i++) {
      if (decodeURI(JSON.parse(children[i].dataset.value).value) === value) {
        self.selectByIndex(i, animate)
        return
      }
    }

    self.selectByIndex(0, animate)
  },

  getValue () {
    return this.value
  },

  scrollTo (top, animate) {
    var self = this

    animate = (animate === undefined) ? true : animate

    if (self.__isDecelerating) {
      Animate.stop(self.__isDecelerating)
      self.__isDecelerating = false
    }

    top = Math.round((top / self.__itemHeight).toFixed(5)) * self.__itemHeight
    top = Math.max(Math.min(self.__maxScrollTop, top), self.__minScrollTop)

    if (top === self.__scrollTop || !animate) {
      self.__publish(top)
      self.__scrollingComplete()
      return
    }
    self.__publish(top, 250)
  },

  destroy () {
    this.__component.parentNode && this.__component.parentNode.removeChild(this.__component)
  },

  __selectItem (selectedItem) {
    var self = this

    var selectedItemClass = self.options.itemClass + '-selected'
    var lastSelectedElem = self.__content.querySelector('.' + selectedItemClass)
    if (lastSelectedElem) {
      lastSelectedElem.classList.remove(selectedItemClass)
    }
    selectedItem.classList.add(selectedItemClass)

    if (self.value !== null) {
      self.__prevValue = self.value
    }

    self.value = decodeURI(JSON.parse(selectedItem.dataset.value).value)
  },

  __scrollingComplete () {
    var self = this

    var index = Math.round((self.__scrollTop - self.__minScrollTop - self.__itemHeight / 2) / self.__itemHeight)

    self.__selectItem(self.__content.children[index])

    if (self.__prevValue !== null && self.__prevValue !== self.value) {
      self.options.onSelect(self.value)
    }
  },

  __doTouchStart (ev, timeStamp) {
    const touches = ev.touches
    const self = this
    const target = ev.touches ? ev.touches[0] : ev
    const isMobile = !!ev.touches

    if (ev.touches && touches.length == null) {
      throw new Error('Invalid touch list: ' + touches)
    }
    if (timeStamp instanceof Date) {
      timeStamp = timeStamp.valueOf()
    }
    if (typeof timeStamp !== 'number') {
      throw new Error('Invalid timestamp value: ' + timeStamp)
    }

    self.__interruptedAnimation = true

    if (self.__isDecelerating) {
      Animate.stop(self.__isDecelerating)
      self.__isDecelerating = false
      self.__interruptedAnimation = true
    }

    if (self.__isAnimating) {
      Animate.stop(self.__isAnimating)
      self.__isAnimating = false
      self.__interruptedAnimation = true
    }

    // Use center point when dealing with two fingers
    var currentTouchTop
    var isSingleTouch = (isMobile && touches.length === 1) || !isMobile
    if (isSingleTouch) {
      currentTouchTop = target.pageY
    } else {
      currentTouchTop = Math.abs(target.pageY + touches[1].pageY) / 2
    }

    self.__initialTouchTop = currentTouchTop
    self.__lastTouchTop = currentTouchTop
    self.__lastTouchMove = timeStamp
    self.__lastScale = 1
    self.__enableScrollY = !isSingleTouch
    self.__isTracking = true
    self.__didDecelerationComplete = false
    self.__isDragging = !isSingleTouch
    self.__isSingleTouch = isSingleTouch
    self.__positions = []
  },

  __doTouchMove (ev, timeStamp, scale) {
    const self = this
    const touches = ev.touches
    const target = ev.touches ? ev.touches[0] : ev
    const isMobile = !!ev.touches

    if (touches && touches.length == null) {
      throw new Error('Invalid touch list: ' + touches)
    }
    if (timeStamp instanceof Date) {
      timeStamp = timeStamp.valueOf()
    }
    if (typeof timeStamp !== 'number') {
      throw new Error('Invalid timestamp value: ' + timeStamp)
    }

    // Ignore event when tracking is not enabled (event might be outside of element)
    if (!self.__isTracking) {
      return
    }

    var currentTouchTop

    // Compute move based around of center of fingers
    if (isMobile && touches.length === 2) {
      currentTouchTop = Math.abs(target.pageY + touches[1].pageY) / 2
    } else {
      currentTouchTop = target.pageY
    }

    var positions = self.__positions

    // Are we already is dragging mode?
    if (self.__isDragging) {
      var moveY = currentTouchTop - self.__lastTouchTop
      var scrollTop = self.__scrollTop

      if (self.__enableScrollY) {
        scrollTop -= moveY

        var minScrollTop = self.__minScrollTop
        var maxScrollTop = self.__maxScrollTop

        if (scrollTop > maxScrollTop || scrollTop < minScrollTop) {
          // Slow down on the edges
          if (scrollTop > maxScrollTop) {
            scrollTop = maxScrollTop
          } else {
            scrollTop = minScrollTop
          }
        }
      }

      // Keep list from growing infinitely (holding min 10, max 20 measure points)
      if (positions.length > 40) {
        positions.splice(0, 20)
      }

      // Track scroll movement for decleration
      positions.push(scrollTop, timeStamp)

      // Sync scroll position
      self.__publish(scrollTop)

      // Otherwise figure out whether we are switching into dragging mode now.
    } else {
      var minimumTrackingForScroll = 0
      var minimumTrackingForDrag = 5

      var distanceY = Math.abs(currentTouchTop - self.__initialTouchTop)

      self.__enableScrollY = distanceY >= minimumTrackingForScroll

      positions.push(self.__scrollTop, timeStamp)

      self.__isDragging = self.__enableScrollY && (distanceY >= minimumTrackingForDrag)

      if (self.__isDragging) {
        self.__interruptedAnimation = false
      }
    }

    // Update last touch positions and time stamp for next event
    self.__lastTouchTop = currentTouchTop
    self.__lastTouchMove = timeStamp
    self.__lastScale = scale
  },

  __doTouchEnd (timeStamp) {
    var self = this

    if (timeStamp instanceof Date) {
      timeStamp = timeStamp.valueOf()
    }
    if (typeof timeStamp !== 'number') {
      throw new Error('Invalid timestamp value: ' + timeStamp)
    }

    // Ignore event when tracking is not enabled (no touchstart event on element)
    // This is required as this listener ('touchmove') sits on the document and not on the element itself.
    if (!self.__isTracking) {
      return
    }

    // Not touching anymore (when two finger hit the screen there are two touch end events)
    self.__isTracking = false

    // Be sure to reset the dragging flag now. Here we also detect whether
    // the finger has moved fast enough to switch into a deceleration animation.
    if (self.__isDragging) {
      // Reset dragging flag
      self.__isDragging = false

      // Start deceleration
      // Verify that the last move detected was in some relevant time frame
      if (self.__isSingleTouch && (timeStamp - self.__lastTouchMove) <= 100) {
        // Then figure out what the scroll position was about 100ms ago
        var positions = self.__positions
        var endPos = positions.length - 1
        var startPos = endPos

        // Move pointer to position measured 100ms ago
        for (var i = endPos; i > 0 && positions[i] > (self.__lastTouchMove - 100); i -= 2) {
          startPos = i
        }

        // If start and stop position is identical in a 100ms timeframe,
        // we cannot compute any useful deceleration.
        if (startPos !== endPos) {
          // Compute relative movement between these two points
          var timeOffset = positions[endPos] - positions[startPos]
          var movedTop = self.__scrollTop - positions[startPos - 1]

          // Based on 50ms compute the movement to apply for each render step
          self.__decelerationVelocityY = movedTop / timeOffset * (1000 / 60)

          // How much velocity is required to start the deceleration
          var minVelocityToStartDeceleration = 4

          // Verify that we have enough velocity to start deceleration
          if (Math.abs(self.__decelerationVelocityY) > minVelocityToStartDeceleration) {
            self.__startDeceleration(timeStamp)
          }
        }
      }
    }

    if (!self.__isDecelerating) {
      self.scrollTo(self.__scrollTop)
    }

    // Fully cleanup list
    self.__positions.length = 0
  },

  // Applies the scroll position to the content element
  __publish (top, animationDuration) {
    var self = this

    // Remember whether we had an animation, then we try to continue based on the current "drive" of the animation
    var wasAnimating = self.__isAnimating
    if (wasAnimating) {
      Animate.stop(wasAnimating)
      self.__isAnimating = false
    }

    if (animationDuration) {
      // Keep scheduled positions for scrollBy functionality
      self.__scheduledTop = top

      var oldTop = self.__scrollTop
      var diffTop = top - oldTop

      var step = function (percent, now, render) {
        self.__scrollTop = oldTop + (diffTop * percent)
        // Push values out
        if (self.__callback) {
          self.__callback(self.__scrollTop)
        }
      }

      var verify = function (id) {
        return self.__isAnimating === id
      }

      var completed = function (renderedFramesPerSecond, animationId, wasFinished) {
        if (animationId === self.__isAnimating) {
          self.__isAnimating = false
        }
        if (self.__didDecelerationComplete || wasFinished) {
          self.__scrollingComplete()
        }
      }

      // When continuing based on previous animation we choose an ease-out animation instead of ease-in-out
      self.__isAnimating = Animate.start(step, verify, completed, animationDuration, wasAnimating ? easeOutCubic : easeInOutCubic)
    } else {
      self.__scheduledTop = self.__scrollTop = top
      // Push values out
      if (self.__callback) {
        self.__callback(top)
      }
    }
  },

  // Called when a touch sequence end and the speed of the finger was high enough to switch into deceleration mode.
  __startDeceleration (timeStamp) {
    var self = this

    self.__minDecelerationScrollTop = self.__minScrollTop
    self.__maxDecelerationScrollTop = self.__maxScrollTop

    // Wrap class method
    var step = function (percent, now, render) {
      self.__stepThroughDeceleration(render)
    }

    // How much velocity is required to keep the deceleration running
    var minVelocityToKeepDecelerating = 0.5

    // Detect whether it's still worth to continue animating steps
    // If we are already slow enough to not being user perceivable anymore, we stop the whole process here.
    var verify = function () {
      var shouldContinue = Math.abs(self.__decelerationVelocityY) >= minVelocityToKeepDecelerating
      if (!shouldContinue) {
        self.__didDecelerationComplete = true
      }
      return shouldContinue
    }

    var completed = function (renderedFramesPerSecond, animationId, wasFinished) {
      self.__isDecelerating = false
      if (self.__scrollTop <= self.__minScrollTop || self.__scrollTop >= self.__maxScrollTop) {
        self.scrollTo(self.__scrollTop)
        return
      }
      if (self.__didDecelerationComplete) {
        self.__scrollingComplete()
      }
    }

    // Start animation and switch on flag
    self.__isDecelerating = Animate.start(step, verify, completed)
  },

  // Called on every step of the animation
  __stepThroughDeceleration (render) {
    var self = this

    var scrollTop = self.__scrollTop + self.__decelerationVelocityY

    var scrollTopFixed = Math.max(Math.min(self.__maxDecelerationScrollTop, scrollTop), self.__minDecelerationScrollTop)
    if (scrollTopFixed !== scrollTop) {
      scrollTop = scrollTopFixed
      self.__decelerationVelocityY = 0
    }

    if (Math.abs(self.__decelerationVelocityY) <= 1) {
      if (Math.abs(scrollTop % self.__itemHeight) < 1) {
        self.__decelerationVelocityY = 0
      }
    } else {
      self.__decelerationVelocityY *= 0.95
    }

    self.__publish(scrollTop)
  }
}

// Copy over members to prototype
for (var key in members) {
  Scroller.prototype[key] = members[key]
}

export default Scroller
