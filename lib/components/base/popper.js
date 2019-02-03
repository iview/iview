'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _newArrowCheck2 = require('babel-runtime/helpers/newArrowCheck');

var _newArrowCheck3 = _interopRequireDefault(_newArrowCheck2);

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isServer = _vue2.default.prototype.$isServer;
var Popper = isServer ? function () {} : require('popper.js/dist/umd/popper.js');exports.default = {
    props: {
        placement: {
            type: String,
            default: 'bottom'
        },
        boundariesPadding: {
            type: Number,
            default: 5
        },
        reference: Object,
        popper: Object,
        offset: {
            default: 0
        },
        value: {
            type: Boolean,
            default: false
        },
        transition: String,
        options: {
            type: Object,
            default: function _default() {
                return {
                    modifiers: {
                        computeStyle: {
                            gpuAcceleration: false
                        },
                        preventOverflow: {
                            boundariesElement: 'window'
                        }
                    }
                };
            }
        }
    },
    data: function data() {
        return {
            visible: this.value
        };
    },

    watch: {
        value: {
            immediate: true,
            handler: function handler(val) {
                this.visible = val;
                this.$emit('input', val);
            }
        },
        visible: function visible(val) {
            if (val) {
                if (this.handleIndexIncrease) this.handleIndexIncrease();
                this.updatePopper();
                this.$emit('on-popper-show');
            } else {
                this.$emit('on-popper-hide');
            }
            this.$emit('input', val);
        }
    },
    methods: {
        createPopper: function createPopper() {
            var _this = this;

            if (isServer) return;
            if (!/^(top|bottom|left|right)(-start|-end)?$/g.test(this.placement)) {
                return;
            }

            var options = this.options;
            var popper = this.popper || this.$refs.popper;
            var reference = this.reference || this.$refs.reference;

            if (!popper || !reference) return;

            if (this.popperJS && this.popperJS.hasOwnProperty('destroy')) {
                this.popperJS.destroy();
            }

            options.placement = this.placement;

            if (!options.modifiers.offset) {
                options.modifiers.offset = {};
            }
            options.modifiers.offset.offset = this.offset;
            options.onCreate = function () {
                (0, _newArrowCheck3.default)(this, _this);

                this.$nextTick(this.updatePopper);
                this.$emit('created', this);
            }.bind(this);

            this.popperJS = new Popper(reference, popper, options);
        },
        updatePopper: function updatePopper() {
            if (isServer) return;
            this.popperJS ? this.popperJS.update() : this.createPopper();
        },
        doDestroy: function doDestroy() {
            if (isServer) return;
            if (this.visible) return;
            this.popperJS.destroy();
            this.popperJS = null;
        }
    },
    updated: function updated() {
        var _this2 = this;

        this.$nextTick(function () {
            (0, _newArrowCheck3.default)(this, _this2);
            return this.updatePopper();
        }.bind(this));
    },
    beforeDestroy: function beforeDestroy() {
        if (isServer) return;
        if (this.popperJS) {
            this.popperJS.destroy();
        }
    }
};