<template>
    <div :class="classes" :name="name">
        <slot></slot>
    </div>
</template>
<script>
    import { oneOf, findComponentsDownward } from '../../utils/assist';
    import Emitter from '../../mixins/emitter';

    const prefixCls = 'ivu-radio-group';

    let seed = 0;
    const now = Date.now();
    const getUuid = () => `ivuRadioGroup_${now}_${seed++}`;

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
                },
                default () {
                    return !this.$IVIEW || this.$IVIEW.size === '' ? 'default' : this.$IVIEW.size;
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
            },
            name: {
                type: String,
                default: getUuid
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
                this.childrens = findComponentsDownward(this, 'Radio');
                if (this.childrens) {
                    this.childrens.forEach(child => {
                        child.currentValue = this.currentValue === child.label;
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
            }
        },
        watch: {
            value () {
                if(this.currentValue !== this.value){
                    this.currentValue = this.value;
                    this.$nextTick(()=>{
                        this.updateValue();
                    });
                }
            }
        }
    };
</script>
