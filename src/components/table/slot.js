export default {
    name: 'TableSlot',
    functional: true,
    inject: ['tableRoot'],
    props: {
        row: Object,
        index: Number,
        column: {
            type: Object,
            default: null
        },
        display: {
            type: String,
            default: 'block'
        }
    },
    render: (h, ctx) => {
        return h('div', {
            'class': {
                'ivu-table-cell-slot': true,
                'ivu-table-cell-slot-inline': ctx.props.display === 'inline',
                'ivu-table-cell-slot-inline-block': ctx.props.display === 'inline-block'
            }
        }, ctx.injections.tableRoot.$scopedSlots[ctx.props.column.slot]({
            row: ctx.props.row,
            column: ctx.props.column,
            index: ctx.props.index
        }));
    }
};
