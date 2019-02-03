'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _newArrowCheck2 = require('babel-runtime/helpers/newArrowCheck');

var _newArrowCheck3 = _interopRequireDefault(_newArrowCheck2);

var _assist = require('../../../../utils/assist');

var _util = require('../../util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    props: {
        showTime: {
            type: Boolean,
            default: false
        },
        format: {
            type: String,
            default: 'yyyy-MM-dd'
        },
        selectionMode: {
            type: String,
            validator: function validator(value) {
                return (0, _assist.oneOf)(value, ['year', 'month', 'date', 'time']);
            },

            default: 'date'
        },
        shortcuts: {
            type: Array,
            default: function _default() {
                (0, _newArrowCheck3.default)(undefined, undefined);
                return [];
            }.bind(undefined)
        },
        disabledDate: {
            type: Function,
            default: function _default() {
                (0, _newArrowCheck3.default)(undefined, undefined);
                return false;
            }.bind(undefined)
        },
        value: {
            type: Array,
            default: function _default() {
                (0, _newArrowCheck3.default)(undefined, undefined);
                return [(0, _util.initTimeDate)(), (0, _util.initTimeDate)()];
            }.bind(undefined)
        },
        timePickerOptions: {
            default: function _default() {
                (0, _newArrowCheck3.default)(undefined, undefined);
                return {};
            }.bind(undefined),
            type: Object
        },
        showWeekNumbers: {
            type: Boolean,
            default: false
        },
        startDate: {
            type: Date
        },
        pickerType: {
            type: String,
            require: true
        },
        focusedDate: {
            type: Date,
            required: true
        }
    },
    computed: {
        isTime: function isTime() {
            return this.currentView === 'time';
        }
    },
    methods: {
        handleToggleTime: function handleToggleTime() {
            this.currentView = this.currentView === 'time' ? 'date' : 'time';
        }
    }
};