'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _newArrowCheck2 = require('babel-runtime/helpers/newArrowCheck');

var _newArrowCheck3 = _interopRequireDefault(_newArrowCheck2);

var _picker = require('../picker.vue');

var _picker2 = _interopRequireDefault(_picker);

var _time = require('../panel/Time/time.vue');

var _time2 = _interopRequireDefault(_time);

var _timeRange = require('../panel/Time/time-range.vue');

var _timeRange2 = _interopRequireDefault(_timeRange);

var _timeMixins = require('../time-mixins');

var _timeMixins2 = _interopRequireDefault(_timeMixins);

var _assist = require('../../../utils/assist');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    mixins: [_picker2.default, _timeMixins2.default],
    components: { TimePickerPanel: _time2.default, RangeTimePickerPanel: _timeRange2.default },
    props: {
        type: {
            validator: function validator(value) {
                return (0, _assist.oneOf)(value, ['time', 'timerange']);
            },

            default: 'time'
        }
    },
    computed: {
        panel: function panel() {
            var isRange = this.type === 'timerange';
            return isRange ? 'RangeTimePickerPanel' : 'TimePickerPanel';
        },
        ownPickerProps: function ownPickerProps() {
            return {
                disabledHours: this.disabledHours,
                disabledMinutes: this.disabledMinutes,
                disabledSeconds: this.disabledSeconds,
                hideDisabledOptions: this.hideDisabledOptions
            };
        }
    },
    watch: {
        visible: function visible(_visible) {
            var _this = this;

            if (_visible) {
                this.$nextTick(function () {
                    (0, _newArrowCheck3.default)(this, _this);

                    var spinners = (0, _assist.findComponentsDownward)(this, 'TimeSpinner');
                    spinners.forEach(function (instance) {
                        (0, _newArrowCheck3.default)(this, _this);
                        return instance.updateScroll();
                    }.bind(this));
                }.bind(this));
            }
        }
    }
};