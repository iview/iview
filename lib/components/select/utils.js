"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.debounce = debounce;
function debounce(fn) {
    var waiting = void 0;
    return function () {
        if (waiting) return;
        waiting = true;
        var context = this,
            args = arguments;
        var later = function later() {
            waiting = false;
            fn.apply(context, args);
        };
        this.$nextTick(later);
    };
}