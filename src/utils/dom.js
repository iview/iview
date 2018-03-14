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

/* istanbul ignore next */
export const removeElem = function (elem) {
    if (!elem) return false;
    let parent = elem.parentNode;
    if (!parent) return false;
    return parent.removeChild(elem);
};

/* istanbul ignore next */
export const addAfterElem = function (eNewElem, elem) {
    if (!eNewElem || !elem || !elem.parentNode) return;
    if (!elem.nextSibling) {
        elem.parentNode.appendChild(eNewElem);
    } else {
        elem.parentNode.insertBefore(eNewElem, elem.nextSibling);
    }
};

/* istanbul ignore next */
export const addBeforeElem = function (eNewElem, elem) {
    if (!eNewElem || !elem || !elem.parentNode) return;
    elem.parentNode.insertBefore(eNewElem, elem);
};
