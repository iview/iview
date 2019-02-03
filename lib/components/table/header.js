'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _newArrowCheck2 = require('babel-runtime/helpers/newArrowCheck');

var _newArrowCheck3 = _interopRequireDefault(_newArrowCheck2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    name: 'TableRenderHeader',
    functional: true,
    props: {
        render: Function,
        column: Object,
        index: Number
    },
    render: function render(h, ctx) {
        (0, _newArrowCheck3.default)(undefined, undefined);

        var params = {
            column: ctx.props.column,
            index: ctx.props.index
        };
        return ctx.props.render(h, params);
    }.bind(undefined)
};