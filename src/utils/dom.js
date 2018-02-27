import Vue from 'vue';
const isServer = Vue.prototype.$isServer;

/* istanbul ignore next */
export const on = (function() {
    if (!isServer && document.addEventListener) {
        return function(element, event, handler) {
            if (element && event && handler) {
                element.addEventListener(event, handler, false);
            }
        };
    } else {
        return function(element, event, handler) {
            if (element && event && handler) {
                element.attachEvent('on' + event, handler);
            }
        };
    }
})();

/* istanbul ignore next */
export const off = (function() {
    if (!isServer && document.removeEventListener) {
        return function(element, event, handler) {
            if (element && event) {
                element.removeEventListener(event, handler, false);
            }
        };
    } else {
        return function(element, event, handler) {
            if (element && event) {
                element.detachEvent('on' + event, handler);
            }
        };
    }
})();

/* determing translate3d support */
export const supports3D = (function() {
    if (document.body && document.body.style.perspective !== undefined) {
        return true;
    }
    var _tempDiv = document.createElement("div"),
        style = _tempDiv.style,
        a = ["Webkit","Moz","O","Ms","ms"],
        i = a.length;
    if (_tempDiv.style.perspective !== undefined) {
        return true;
    }
    while (--i > -1) {
        if (style[a[i] + "Perspective"] !== undefined) {
            return true;
        }
    }
    return false;
}());