'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _newArrowCheck2 = require('babel-runtime/helpers/newArrowCheck');

var _newArrowCheck3 = _interopRequireDefault(_newArrowCheck2);

var _emitter = require('../../mixins/emitter');

var _emitter2 = _interopRequireDefault(_emitter);

var _handleEscapeMixin = require('./handleEscapeMixin');

var _handleEscapeMixin2 = _interopRequireDefault(_handleEscapeMixin);

var _utils = require('./utils');

var _dom = require('../../utils/dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    mixins: [_emitter2.default, _handleEscapeMixin2.default],

    props: {
        focused: {
            type: Boolean,
            default: false
        },
        value: {
            type: Object,
            default: undefined
        }
    },

    beforeDestroy: function beforeDestroy() {
        this.unbindEventListeners();
    },
    created: function created() {
        var _this = this;

        if (this.focused) {
            setTimeout(function () {
                (0, _newArrowCheck3.default)(this, _this);
                return this.$el.focus();
            }.bind(this), 1);
        }
    },


    methods: {
        handleLeft: function handleLeft(e) {
            this.handleSlide(e, this.left, 'left');
        },
        handleRight: function handleRight(e) {
            this.handleSlide(e, this.right, 'right');
        },
        handleUp: function handleUp(e) {
            this.handleSlide(e, this.up, 'up');
        },
        handleDown: function handleDown(e) {
            this.handleSlide(e, this.down, 'down');
        },
        handleMouseDown: function handleMouseDown(e) {
            this.dispatch('ColorPicker', 'on-dragging', true);
            this.handleChange(e, true);

            (0, _dom.on)(window, 'mousemove', this.handleChange);
            (0, _dom.on)(window, 'mouseup', this.handleMouseUp);
        },
        handleMouseUp: function handleMouseUp() {
            this.unbindEventListeners();
        },
        unbindEventListeners: function unbindEventListeners() {
            var _this2 = this;

            (0, _dom.off)(window, 'mousemove', this.handleChange);
            (0, _dom.off)(window, 'mouseup', this.handleMouseUp);

            setTimeout(function () {
                (0, _newArrowCheck3.default)(this, _this2);
                return this.dispatch('ColorPicker', 'on-dragging', false);
            }.bind(this), 1);
        },
        getLeft: function getLeft(e) {
            var container = this.$refs.container;

            var xOffset = container.getBoundingClientRect().left + window.pageXOffset;
            var pageX = e.pageX || (0, _utils.getTouches)(e, 'PageX');

            return pageX - xOffset;
        },
        getTop: function getTop(e) {
            var container = this.$refs.container;

            var yOffset = container.getBoundingClientRect().top + window.pageYOffset;
            var pageY = e.pageY || (0, _utils.getTouches)(e, 'PageY');

            return pageY - yOffset;
        }
    }
};