export default {
    name: 'RenderCell',
    functional: true,
    props: {
        render: Function,
        node: Object
    },
    render: (h, ctx) => {
        const params = {
            node: ctx.props.node
        };
        return ctx.props.render(h, params);
    }
};