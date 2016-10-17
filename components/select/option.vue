<template>
    <li :class="classes" @click.stop="select" @mouseout.stop="blur"><slot>{{ showLabel }}</slot></li>
</template>
<script>
    const prefixCls = 'ivu-select-item';

    export default {
        props: {
            value: {
                type: [String, Number],
                required: true
            },
            label: {
                type: [String, Number]
            },
            disabled: {
                type: Boolean,
                default: false
            }
        },
        componentName: 'select-item',
        data () {
            return {
                selected: false,
                index: 0,    // for up and down to focus
                isFocus: false
            }
        },
        computed: {
            classes () {
                return [
                    `${prefixCls}`,
                    {
                        [`${prefixCls}-disabled`]: this.disabled,
                        [`${prefixCls}-selected`]: this.selected,
                        [`${prefixCls}-focus`]: this.isFocus
                    }
                ]
            },
            showLabel () {
                return (!!this.label) ? this.label : this.value;
            }
        },
        methods: {
            select () {
                if (this.disabled) {
                    return false;
                }

                this.$dispatch('on-select-selected', this.value);
            },
            blur () {
                this.isFocus = false;
            }
        },
        ready () {

        },
        events: {
            'on-select-close' () {
                this.isFocus = false;
            }
        }
    }
</script>