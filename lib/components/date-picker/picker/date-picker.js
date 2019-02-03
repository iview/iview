'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _picker = require('../picker.vue');

var _picker2 = _interopRequireDefault(_picker);

var _date = require('../panel/Date/date.vue');

var _date2 = _interopRequireDefault(_date);

var _dateRange = require('../panel/Date/date-range.vue');

var _dateRange2 = _interopRequireDefault(_dateRange);

var _assist = require('../../../utils/assist');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    name: 'CalendarPicker',
    mixins: [_picker2.default],
    props: {
        type: {
            validator: function validator(value) {
                return (0, _assist.oneOf)(value, ['year', 'month', 'date', 'daterange', 'datetime', 'datetimerange']);
            },

            default: 'date'
        }
    },
    components: { DatePickerPanel: _date2.default, RangeDatePickerPanel: _dateRange2.default },
    computed: {
        panel: function panel() {
            var isRange = this.type === 'daterange' || this.type === 'datetimerange';
            return isRange ? 'RangeDatePickerPanel' : 'DatePickerPanel';
        },
        ownPickerProps: function ownPickerProps() {
            return this.options;
        }
    }
};