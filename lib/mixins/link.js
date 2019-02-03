'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _assist = require('../utils/assist');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    props: {
        to: {
            type: [Object, String]
        },
        replace: {
            type: Boolean,
            default: false
        },
        target: {
            type: String,
            validator: function validator(value) {
                return (0, _assist.oneOf)(value, ['_blank', '_self', '_parent', '_top']);
            },

            default: '_self'
        }
    },
    computed: {
        linkUrl: function linkUrl() {
            var type = (0, _typeof3.default)(this.to);
            return type === 'string' ? this.to : null;
        }
    },
    methods: {
        handleClick: function handleClick() {
            var new_window = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

            if (new_window) {
                window.open(this.to);
            } else {
                var isRoute = this.$router;
                if (isRoute) {
                    this.replace ? this.$router.replace(this.to) : this.$router.push(this.to);
                } else {
                    window.location.href = this.to;
                }
            }
        },
        handleCheckClick: function handleCheckClick(event) {
            var new_window = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

            if (this.to) {
                if (this.target === '_blank') {
                    return false;
                } else {
                    event.preventDefault();
                    this.handleClick(new_window);
                }
            }
        }
    }
};