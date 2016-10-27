<template>
    <label :class="wrapClasses">
        <span :class="checkboxClasses">
            <span :class="innerClasses"></span>
            <input
                v-if="group"
                type="checkbox"
                :class="inputClasses"
                :disabled="disabled"
                :value="value"
                v-model="model"
                @change="change">
            <input
                v-if="!group"
                type="checkbox"
                :class="inputClasses"
                :disabled="disabled"
                v-model="checked"
                @change="change">
        </span>
        <slot><span>{{ value }}</span></slot>
    </label>
</template>
<script>
    const prefixCls = 'ivu-checkbox';

    export default {
        props: {
            disabled: {
                type: Boolean,
                default: false
            },
            value: {
                type: [String, Number, Boolean]
            },
            checked: {
                type: Boolean,
                default: false
            }
        },
        data () {
            return {
                model: [],
                selected: false,
                group: false
            }
        },
        computed: {
            wrapClasses () {
                return [
                    `${prefixCls}-wrapper`,
                    {
                        [`${prefixCls}-group-item`]: this.group,
                        [`${prefixCls}-wrapper-checked`]: this.selected,
                        [`${prefixCls}-wrapper-disabled`]: this.disabled
                    }
                ]
            },
            checkboxClasses () {
                return [
                    `${prefixCls}`,
                    {
                        [`${prefixCls}-checked`]: this.selected,
                        [`${prefixCls}-disabled`]: this.disabled
                    }
                ]
            },
            innerClasses () {
                return `${prefixCls}-inner`;
            },
            inputClasses () {
                return `${prefixCls}-input`;
            }
        },
        ready () {
            if (!this.group) {
                this.updateModel();
            }
        },
        methods: {
            change (event) {
                if (this.disabled) {
                    return false;
                }

                this.selected = event.target.checked;

                if (this.group) {
                    this.$parent.change(this.model);
                } else {
                    this.$emit('on-change', this.checked);
                }
            },
            updateModel () {
                this.selected = this.checked;
            }
        },
        watch: {
            checked () {
                this.updateModel();
            }
        }
    }
</script>