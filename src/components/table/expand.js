
export default {
    name: 'TableExpand',
    functional: true,
    props: {
        row: Object,
        render: Function,
        index: Number,
    },
    render: (h, ctx) => {
        return ctx.props.render(h, {row: ctx.props.row, index: ctx.props.index});
    }
};