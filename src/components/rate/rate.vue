<template>
    <div :class="classes" @mouseleave="handleMouseleave">
        <input type="hidden" :name="name" :value="currentValue">
        <div
            v-for="item in count"
            :class="starCls(item)"
            @mousemove="handleMousemove(item, $event)"
            :key="item"
            @click="handleClick(item)">
            <template v-if="!showCharacter">
                <span :class="[prefixCls + '-star-content']" type="half"></span>
            </template>
            <template v-else>
                <span :class="[prefixCls + '-star-first']" type="half">
                    <template v-if="character !== ''">{{ character }}</template>
                    <i v-else :class="iconClasses" type="half"></i>
                </span>
                <span :class="[prefixCls + '-star-second']">
                    <template v-if="character !== ''">{{ character }}</template>
                    <i v-else :class="iconClasses"></i>
                </span>
            </template>
        </div>
        <div :class="[prefixCls + '-text']" v-if="showText" v-show="currentValue > 0">
            <slot><span>{{ currentValue }}</span> <span v-if="currentValue <= 1">{{ t('i.rate.star') }}</span><span v-else>{{ t('i.rate.stars') }}</span></slot>
        </div>
    </div>
</template>
<script>
    import Locale from '../../mixins/locale';
    import Emitter from '../../mixins/emitter';
    import mixinsForm from '../../mixins/form';

    import Icon from '../icon/icon.vue';

    const prefixCls = 'ivu-rate';

    export default {
        name: 'Rate',
        mixins: [ Locale, Emitter, mixinsForm ],
        components: { Icon },
        props: {
            count: {
                type: Number,
                default: 5
            },
            value: {
                type: Number,
                default: 0
            },
            allowHalf: {
                type: Boolean,
                default: false
            },
            disabled: {
                type: Boolean,
                default: false
            },
            showText: {
                type: Boolean,
                default: false
            },
            name: {
                type: String
            },
            clearable: {
                type: Boolean,
                default: false
            },
            character: {
                type: String,
                default: ''
            },
            icon: {
                type: String,
                default: ''
            },
            customIcon: {
                type: String,
                default: ''
            }
        },
        data () {
            return {
                prefixCls: prefixCls,
                hoverIndex: -1,
                isHover: false,
                isHalf: this.allowHalf && this.value.toString().indexOf('.') >= 0,
                currentValue: this.value
            };
        },
        computed: {
            classes () {
                return [
                    `${prefixCls}`,
                    {
                        [`${prefixCls}-disabled`]: this.itemDisabled
                    }
                ];
            },
            iconClasses () {
                return [
                    'ivu-icon',
                    {
                        [`ivu-icon-${this.icon}`]: this.icon !== '',
                        [`${this.customIcon}`]: this.customIcon !== '',
                    }
                ];
            },
            showCharacter () {
                return this.character !== '' || this.icon !== '' || this.customIcon !== '';
            }
        },
        watch: {
            value (val) {
                this.currentValue = val;
            },
            currentValue (val) {
                this.setHalf(val);
            }
        },
        methods: {
            starCls (value) {
                const hoverIndex = this.hoverIndex;
                const currentIndex = this.isHover ? hoverIndex : this.currentValue;

                let full = false;
                let isLast = false;

                if (currentIndex >= value) full = true;

                if (this.isHover) {
                    isLast = currentIndex === value;
                } else {
                    isLast = Math.ceil(this.currentValue) === value;
                }

                return [
                    {   
                        [`${prefixCls}-star`]: !this.showCharacter,
                        [`${prefixCls}-star-chart`]: this.showCharacter,
                        [`${prefixCls}-star-full`]: (!isLast && full) || (isLast && !this.isHalf),
                        [`${prefixCls}-star-half`]: isLast && this.isHalf,
                        [`${prefixCls}-star-zero`]: !full
                    }
                ];
            },
            handleMousemove(value, event) {
                if (this.itemDisabled) return;

                this.isHover = true;
                if (this.allowHalf) {
                    const type = event.target.getAttribute('type') || false;
                    this.isHalf = type === 'half';
                } else {
                    this.isHalf = false;
                }
                this.hoverIndex = value;
            },
            handleMouseleave () {
                if (this.itemDisabled) return;

                this.isHover = false;
                this.setHalf(this.currentValue);
                this.hoverIndex = -1;
            },
            setHalf (val) {
                this.isHalf = this.allowHalf && val.toString().indexOf('.') >= 0;
            },
            handleClick (value) {
                if (this.itemDisabled) return;
                //value++;
                if (this.isHalf) value -= 0.5;

                if(this.clearable && Math.abs(value - this.currentValue) < 0.01) {
                    value = 0;
                }

                this.currentValue = value;
                this.$emit('input', value);
                this.$emit('on-change', value);
                this.dispatch('FormItem', 'on-form-change', value);
            }
        }
    };
</script>
