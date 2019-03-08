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
        }
    },
    render: (h, ctx) => {
        return h('div', ctx.injections.tableRoot.$scopedSlots[ctx.props.column.slot]({
            row: ctx.props.row,
            column: ctx.props.column,
            index: ctx.props.index
        }));
    }
};