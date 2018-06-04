export default {
    name: 'FilterExpand',
    functional: true,
    props: {
        render: Function,
        item: {
            type: Object,
            default: null
        }
    },
    render: (h, ctx) => {
        const params = {
            item: ctx.props.item,
            index: ctx.props.index
        };
        return ctx.props.render(h, params);
    }
};
