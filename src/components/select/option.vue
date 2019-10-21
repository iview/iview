<template>
    <li
        :class="classes"
        @click.stop="select"
        @mousedown.prevent
    ><slot>{{ showLabel }}</slot></li>
</template>
<script>
    import Emitter from '../../mixins/emitter';
    import mixinsForm from '../../mixins/form';
    import { findComponentUpward } from '../../utils/assist';

    const prefixCls = 'ivu-select-item';

    export default {
        name: 'iOption',
        componentName: 'select-item',
        mixins: [ Emitter, mixinsForm ],
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
            },
            selected: {
                type: Boolean,
                default: false
            },
            isFocused: {
                type: Boolean,
                default: false
            },
            // 4.0.0
            tag: {
                type: [String, Number]
            }
        },
        data () {
            return {
                searchLabel: '',  // the slot value (textContent)
                autoComplete: false
            };
        },
        computed: {
            classes () {
                return [
                    `${prefixCls}`,
                    {
                        [`${prefixCls}-disabled`]: this.itemDisabled,
                        [`${prefixCls}-selected`]: this.selected && !this.autoComplete,
                        [`${prefixCls}-focus`]: this.isFocused
                    }
                ];
            },
            showLabel () {
                return (this.label) ? this.label : this.value;
            },
            optionLabel(){
                return this.label || (this.$el && this.$el.textContent);
            }
        },
        methods: {
            select () {
                if (this.itemDisabled) return false;

                this.dispatch('iSelect', 'on-select-selected', {
                    value: this.value,
                    label: this.optionLabel,
                    tag: this.tag
                });
                this.$emit('on-select-selected', {
                    value: this.value,
                    label: this.optionLabel,
                    tag: this.tag
                });
            },
        },
        mounted () {
            const Select = findComponentUpward(this, 'iSelect');
            if (Select) this.autoComplete = Select.autoComplete;
        },
    };
</script>
