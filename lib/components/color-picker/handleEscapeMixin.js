'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    methods: {
        handleEscape: function handleEscape(e) {
            this.dispatch('ColorPicker', 'on-escape-keydown', e);
        }
    }
};