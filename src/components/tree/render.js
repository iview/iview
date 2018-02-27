export default {
    name: 'RenderCell',
    functional: true,
    props: {
        render: Function,
        data: Object,
        node: Array
    },
    render: (h, ctx) => {
        const params = {
            root: ctx.props.node[0],
            node: ctx.props.node[1],
            data: ctx.props.data
        };
        return ctx.props.render(h, params);
    }
};