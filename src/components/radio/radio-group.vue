<template>
    <div
        :class="classes" tabindex="0"
        @keydown.left="onLeft"
        @keydown.right="onRight"
        @keydown.up="onUp"
        @keydown.down="onDown"
        @keydown.tab="onTab">
        <slot></slot>
    </div>
</template>
<script>
    import { oneOf, findComponentsDownward } from '../../utils/assist';
    import Emitter from '../../mixins/emitter';

    const prefixCls = 'ivu-radio-group';

    export default {
        name: 'RadioGroup',
        mixins: [ Emitter ],
        props: {
            value: {
                type: [String, Number],
                default: ''
            },
            size: {
                validator (value) {
                    return oneOf(value, ['small', 'large', 'default']);
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
        data () {
            return {
                currentValue: this.value,
                childrens: [],
                preventDefaultTab: true
            };
        },
        computed: {
            classes () {
                return [
                    `${prefixCls}`,
                    {
                        [`${prefixCls}-${this.size}`]: !!this.size,
                        [`ivu-radio-${this.size}`]: !!this.size,
                        [`${prefixCls}-${this.type}`]: !!this.type,
                        [`${prefixCls}-vertical`]: this.vertical
                    }
                ];
            }
        },
        mounted () {
            this.updateValue();
        },
        methods: {
            updateValue () {
                const value = this.value;
                this.childrens = findComponentsDownward(this, 'Radio');

                if (this.childrens) {
                    this.childrens.forEach(child => {
                        child.currentValue = value === child.label;
                        child.group = true;
                    });
                }
            },
            change (data) {
                this.currentValue = data.value;
                this.updateValue();
                this.$emit('input', data.value);
                this.$emit('on-change', data.value);
                this.dispatch('FormItem', 'on-form-change', data.value);
            },
            findRadio(value) {
                return this.childrens && this.childrens.length ? this.childrens.find((child) => child.value === value) : undefined;
            },
            findIndexRadio(value) {
                return this.childrens && this.childrens.length ? this.childrens.findIndex((child) => child.value === value) : -1;
            },
            includesRadio(value) {
                return this.childrens && this.childrens.length ? this.childrens.includes((child) => child.value === value) : false;
            },
            nextRadio() {
              if (this.includesRadio(this.currentValue)) {
                console.log('get next');
              } else {
                return this.childrens && this.childrens.length ? this.childrens[0] : undefined;
              }
            },
            onLeft() {
                console.log('left', this.currentValue);
            },
            onRight() {
                console.log('right', this.currentValue);
            },
            onUp() {
                console.log('up', this.currentValue);
            },
            onDown() {
                console.log('down', this.currentValue);
            },
            onTab(event) {
                if (!this.preventDefaultTab) {
                    return;
                }

                event.preventDefault();
                this.preventDefaultTab = false;
                this.currentValue = this.nextRadio();
                if (this.currentValue) {
                    this.change({
                        value: this.currentValue.label
                    });
                }

                console.log('tab', this);

            },
        },
        watch: {
            value () {
                this.updateValue();
            }
        }
    };
</script>
