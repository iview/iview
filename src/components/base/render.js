export default {
    name: 'RenderCell',
    functional: true,
    props: {
        render: Function
    },
    render: (h, ctx) => {
        return ctx.props.render(h);
    }
};