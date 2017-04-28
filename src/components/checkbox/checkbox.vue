<template>
    <label :class="wrapClasses">
        <span :class="checkboxClasses">
            <span :class="innerClasses"></span>
            <input
                v-if="group"
                type="checkbox"
                :class="inputClasses"
                :disabled="disabled"
                :value="label"
                v-model="model"
                @change="change">
            <input
                v-if="!group"
                type="checkbox"
                :class="inputClasses"
                :disabled="disabled"
                :checked="currentValue"
                @change="change">
        </span>
        <slot><span v-if="showSlot">{{ label }}</span></slot>
    </label>
</template>
<script>
    import { findComponentUpward } from '../../utils/assist';
    import Emitter from '../../mixins/emitter';

    const prefixCls = 'ivu-checkbox';

    export default {
        name: 'Checkbox',
        mixins: [ Emitter ],
        props: {
            disabled: {
                type: Boolean,
                default: false
            },
            value: {
                type: Boolean,
                default: false
            },
            label: {
                type: [String, Number, Boolean]
            },
            indeterminate: {
                type: Boolean,
                default: false
            }
        },
        data () {
            return {
                model: [],
                currentValue: this.value,
                group: false,
                showSlot: true,
                parent: findComponentUpward(this, 'CheckboxGroup')
            };
        },
        computed: {
            wrapClasses () {
                return [
                    `${prefixCls}-wrapper`,
                    {
                        [`${prefixCls}-group-item`]: this.group,
                        [`${prefixCls}-wrapper-checked`]: this.currentValue,
                        [`${prefixCls}-wrapper-disabled`]: this.disabled
                    }
                ];
            },
            checkboxClasses () {
                return [
                    `${prefixCls}`,
                    {
                        [`${prefixCls}-checked`]: this.currentValue,
                        [`${prefixCls}-disabled`]: this.disabled,
                        [`${prefixCls}-indeterminate`]: this.indeterminate
                    }
                ];
            },
            innerClasses () {
                return `${prefixCls}-inner`;
            },
            inputClasses () {
                return `${prefixCls}-input`;
            }
        },
        mounted () {
            this.parent = findComponentUpward(this, 'CheckboxGroup');
            if (this.parent) this.group = true;
            if (!this.group) {
                this.updateModel();
                this.showSlot = this.$slots.default !== undefined;
            } else {
                this.parent.updateModel(true);
            }
        },
        methods: {
            change (event) {
                if (this.disabled) {
                    return false;
                }

                const checked = event.target.checked;
                this.currentValue = checked;
                this.$emit('input', checked);

                if (this.group) {
                    this.$parent.change(this.model);
                } else {
                    this.$emit('on-change', checked);
                    this.dispatch('FormItem', 'on-form-change', checked);
                }
            },
            updateModel () {
                this.currentValue = this.value;
            }
        },
        watch: {
            value () {
                this.updateModel();
            }
        }
    };
</script>
