'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _newArrowCheck2 = require('babel-runtime/helpers/newArrowCheck');

var _newArrowCheck3 = _interopRequireDefault(_newArrowCheck2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    name: 'RenderCell',
    functional: true,
    props: {
        render: Function,
        data: Object,
        node: Array
    },
    render: function render(h, ctx) {
        (0, _newArrowCheck3.default)(undefined, undefined);

        var params = {
            root: ctx.props.node[0],
            node: ctx.props.node[1],
            data: ctx.props.data
        };
        return ctx.props.render(h, params);
    }.bind(undefined)
};