<template>
    <div ref="cell"></div>
</template>
<script>
    import Vue from 'vue';
    export default {
        name: 'TableExpand',
        props: {
            row: Object,
            render: Function,
            index: Number,
        },
        methods: {
            compile () {
                if (this.render) {
                    this.$el.innerHTML = '';
                    const component = new Vue({
                        functional: true,
                        render: (h) => {
                            return this.render(h, {
                                row: this.row,
                                index: this.index
                            });
                        }
                    });
                    const Cell = component.$mount();
                    this.$refs.cell.appendChild(Cell.$el);
                }
            }
        },
        mounted () {
            this.$nextTick(() => {
                this.compile();
            });
        }
    };
</script>