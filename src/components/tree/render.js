export default {
    name: 'RenderCell',
    functional: true,
    props: {
        render: Function,
        data: Object,
        node: Object
    },
    render: (h, ctx) => {
        const params = {
            node: ctx.props.node,
            data: ctx.props.data
        };
        return ctx.props.render(h, params);
    }
};