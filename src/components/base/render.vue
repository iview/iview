<template>
    <div ref="cell"></div>
</template>
<script>
    import Vue from 'vue';
    export default {
        name: 'RenderCell',
        props: {
            render: Function
        },
        methods: {
            compile () {
                if (this.render) {
                    this.$el.innerHTML = '';
                    const component = new Vue({
                        functional: true,
                        render: (h) => {
                            return this.render(h);
                        }
                    });
                    const Cell = component.$mount();
                    this.$refs.cell.appendChild(Cell.$el);
                }
            }
        },
        mounted () {
            this.compile();
        }
    };
</script>