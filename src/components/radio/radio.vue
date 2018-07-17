<template>
    <label :class="wrapClasses">
        <span :class="radioClasses">
            <span :class="innerClasses"></span>
            <input
                type="radio"
                :class="inputClasses"
                :disabled="disabled"
                :checked="selected"
                @change="change">
        </span><slot>{{ value }}</slot>
    </label>
</template>
<script>
    const prefixCls = 'ivu-radio';

    export default {
        props: {
            checked: {
                type: Boolean,
                default: false
            },
            disabled: {
                type: Boolean,
                default: false
            },
            value: {
                type: [String, Number]
            }
        },
        data () {
            return {
                selected: false,
                group: false
            };
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
                ];
            },
            radioClasses () {
                return [
                    `${prefixCls}`,
                    {
                        [`${prefixCls}-checked`]: this.selected,
                        [`${prefixCls}-disabled`]: this.disabled
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
        ready () {
            if (this.$parent && this.$parent.$options.name === 'radioGroup') this.group = true;
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
                this.checked = this.selected;

                if (this.group && this.checked) {
                    this.$parent.change({
                        value: this.value,
                        checked: this.checked
                    });
                }

                if (!this.group) this.$dispatch('on-form-change', this.selected);
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
    };
</script>
