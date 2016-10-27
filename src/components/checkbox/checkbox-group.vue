<template>
    <div :class="classes">
        <slot></slot>
    </div>
</template>
<script>
    const prefixCls = 'ivu-checkbox-group';

    export default {
        props: {
            model: {
                type: Array,
                default: []
            }
        },
        computed: {
            classes () {
                return `${prefixCls}`;
            }
        },
        compiled () {
            this.updateModel(true);
        },
        methods: {
            updateModel (update) {
                const model = this.model;

                this.$children.forEach((child) => {
                    child.model = model;

                    if (update) {
                        child.selected = model.indexOf(child.value) >= 0;
                        child.group = true;
                    }
                });
            },
            change (data) {
                this.model = data;
                this.$emit('on-change', data);
            }
        },
        watch: {
            model (val, oldVal) {
                if (val == oldVal) {
                    this.updateModel();
                } else {
                    this.updateModel(true);
                }
            }
        }
    }
</script>