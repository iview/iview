export function debounce(fn) {
    return function() {
        if (this._waiting) return;
        this._waiting = true;
        const context = this,
            args = arguments;
        const later = function() {
            this._waiting = false;
            fn.apply(context, args);
        };
        this.$nextTick(later);
    };
}
