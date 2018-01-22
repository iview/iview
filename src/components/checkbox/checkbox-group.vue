<template>
    <div :class="classes">
        <slot></slot>
    </div>
</template>
<script>
    import { findComponentsDownward, oneOf } from '../../utils/assist';
    import Emitter from '../../mixins/emitter';

    const prefixCls = 'ivu-checkbox-group';

    export default {
        name: 'CheckboxGroup',
        mixins: [ Emitter ],
        props: {
            value: {
                type: Array,
                default () {
                    return [];
                }
            },
            size: {
                validator (value) {
                    return oneOf(value, ['small', 'large', 'default']);
                }
            }
        },
        data () {
            return {
                currentValue: this.value,
                childrens: []
            };
        },
        computed: {
            classes () {
                return [
                    `${prefixCls}`,
                    {
                        [`ivu-checkbox-${this.size}`]: !!this.size
                    }
                ];
            }
        },
        mounted () {
            this.updateModel(true);
        },
        methods: {
            updateModel (update) {
                this.childrens = findComponentsDownward(this, 'Checkbox');
                if (this.childrens) {
                    const { value } = this;
                    this.childrens.forEach(child => {
                        child.model = value;

                        if (update) {
                            child.currentValue = value.indexOf(child.label) >= 0;
                            child.group = true;
                        }
                    });
                }
            },
            change (data) {
                this.currentValue = data;
                this.$emit('input', data);
                this.$emit('on-change', data);
                this.dispatch('FormItem', 'on-form-change', data);
            }
        },
        watch: {
            value () {
                this.updateModel(true);
            }
        }
    };
</script>
