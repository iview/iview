<template>
    <div :class="classes">
        <slot></slot>
    </div>
</template>
<script>
    import { oneOf } from '../../utils/assist';

    const prefixCls = 'ivu-radio-group';

    export default {
        name: 'radioGroup',
        props: {
            model: {
                type: [String, Number],
                default: ''
            },
            size: {
                validator (value) {
                    return oneOf(value, ['small', 'large']);
                }
            },
            type: {
                validator (value) {
                    return oneOf(value, ['button']);
                }
            },
            vertical: {
                type: Boolean,
                default: false
            }
        },
        computed: {
            classes () {
                return [
                    `${prefixCls}`,
                    {
                        [`${prefixCls}-${this.size}`]: !!this.size,
                        [`${prefixCls}-${this.type}`]: !!this.type,
                        [`${prefixCls}-vertical`]: this.vertical
                    }
                ];
            }
        },
        compiled () {
            this.updateModel();
        },
        methods: {
            updateModel () {
                const model = this.model;
                this.$children.forEach((child) => {
                    child.selected = model == child.value;
                    child.group = true;
                });
            },
            change (data) {
                this.model = data.value;
                this.updateModel();
                this.$emit('on-change', data.value);
                this.$dispatch('on-form-change', data.value);
            }
        },
        watch: {
            model () {
                this.updateModel();
            }
        }
    };
</script>
