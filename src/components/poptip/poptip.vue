<template>
    <div
        :class="classes"
        @mouseenter="handleMouseenter"
        @mouseleave="handleMouseleave"
        v-click-outside="handleClose">
        <div
            :class="[prefixCls + '-rel']"
            ref="reference"
            @click="handleClick"
            @mousedown="handleFocus(false)"
            @mouseup="handleBlur(false)">
            <slot></slot>
        </div>
        <transition name="fade">
            <div
                :class="popperClasses"
                :style="styles"
                ref="popper"
                v-show="visible"
                @click="handleTransferClick"
                @mouseenter="handleMouseenter"
                @mouseleave="handleMouseleave"
                :data-transfer="transfer"
                v-transfer-dom>
                <div :class="[prefixCls + '-content']">
                    <div :class="[prefixCls + '-arrow']"></div>
                    <div :class="[prefixCls + '-inner']" v-if="confirm">
                        <div :class="[prefixCls + '-body']">
                            <i class="ivu-icon ivu-icon-ios-help-circle"></i>
                            <div :class="[prefixCls + '-body-message']"><slot name="title">{{ title }}</slot></div>
                        </div>
                        <div :class="[prefixCls + '-footer']">
                            <i-button type="text" size="small" @click.native="cancel">{{ localeCancelText }}</i-button>
                            <i-button type="primary" size="small" @click.native="ok">{{ localeOkText }}</i-button>
                        </div>
                    </div>
                    <div :class="[prefixCls + '-inner']" v-if="!confirm">
                        <div :class="[prefixCls + '-title']" :style="contentPaddingStyle" v-if="showTitle" ref="title"><slot name="title"><div :class="[prefixCls + '-title-inner']">{{ title }}</div></slot></div>
                        <div :class="[prefixCls + '-body']" :style="contentPaddingStyle">
                            <div :class="contentClasses"><slot name="content"><div :class="[prefixCls + '-body-content-inner']">{{ content }}</div></slot></div>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>
<script>
    import Popper from '../base/popper';
    import iButton from '../button/button.vue';
    import {directive as clickOutside} from 'v-click-outside-x';
    import TransferDom from '../../directives/transfer-dom';
    import { oneOf } from '../../utils/assist';
    import { transferIndex, transferIncrease } from '../../utils/transfer-queue';
    import Locale from '../../mixins/locale';

    const prefixCls = 'ivu-poptip';

    export default {
        name: 'Poptip',
        mixins: [ Popper, Locale ],
        directives: { clickOutside, TransferDom },
        components: { iButton },
        props: {
            trigger: {
                validator (value) {
                    return oneOf(value, ['click', 'focus', 'hover']);
                },
                default: 'click'
            },
            placement: {
                validator (value) {
                    return oneOf(value, ['top', 'top-start', 'top-end', 'bottom', 'bottom-start', 'bottom-end', 'left', 'left-start', 'left-end', 'right', 'right-start', 'right-end']);
                },
                default: 'top'
            },
            title: {
                type: [String, Number]
            },
            content: {
                type: [String, Number],
                default: ''
            },
            width: {
                type: [String, Number]
            },
            confirm: {
                type: Boolean,
                default: false
            },
            okText: {
                type: String
            },
            cancelText: {
                type: String
            },
            transfer: {
                type: Boolean,
                default () {
                    return !this.$IVIEW || this.$IVIEW.transfer === '' ? false : this.$IVIEW.transfer;
                }
            },
            popperClass: {
                type: String
            },
            wordWrap: {
                type: Boolean,
                default: false
            },
            // default by css: 8px 16px
            padding: {
                type: String
            }
        },
        data () {
            return {
                prefixCls: prefixCls,
                showTitle: true,
                isInput: false,
                disableCloseUnderTransfer: false,  // transfer 模式下，点击 slot 也会触发关闭
                tIndex: this.handleGetIndex()
            };
        },
        computed: {
            classes () {
                return [
                    `${prefixCls}`,
                    {
                        [`${prefixCls}-confirm`]: this.confirm
                    }
                ];
            },
            popperClasses () {
                return [
                    `${prefixCls}-popper`,
                    {
                        [`${prefixCls}-confirm`]: this.transfer && this.confirm,
                        [`${this.popperClass}`]: !!this.popperClass
                    }
                ];
            },
            styles () {
                let style = {};

                if (this.width) {
                    style.width = `${this.width}px`;
                }

                if (this.transfer) style['z-index'] = 1060 + this.tIndex;

                return style;
            },
            localeOkText () {
                if (this.okText === undefined) {
                    return this.t('i.poptip.okText');
                } else {
                    return this.okText;
                }
            },
            localeCancelText () {
                if (this.cancelText === undefined) {
                    return this.t('i.poptip.cancelText');
                } else {
                    return this.cancelText;
                }
            },
            contentClasses () {
                return [
                    `${prefixCls}-body-content`,
                    {
                        [`${prefixCls}-body-content-word-wrap`]: this.wordWrap
                    }
                ];
            },
            contentPaddingStyle () {
                const styles = {};
                if (this.padding !== '') styles['padding'] = this.padding;
                return styles;
            },
        },
        methods: {
            handleClick () {
                if (this.confirm) {
                    this.visible = !this.visible;
                    return true;
                }
                if (this.trigger !== 'click') {
                    return false;
                }
                this.visible = !this.visible;
            },
            handleTransferClick () {
                if (this.transfer) this.disableCloseUnderTransfer = true;
            },
            handleClose () {
                if (this.disableCloseUnderTransfer) {
                    this.disableCloseUnderTransfer = false;
                    return false;
                }
                if (this.confirm) {
                    this.visible = false;
                    return true;
                }
                if (this.trigger !== 'click') {
                    return false;
                }
                this.visible = false;
            },
            handleFocus (fromInput = true) {
                if (this.trigger !== 'focus' || this.confirm || (this.isInput && !fromInput)) {
                    return false;
                }
                this.visible = true;
            },
            handleBlur (fromInput = true) {
                if (this.trigger !== 'focus' || this.confirm || (this.isInput && !fromInput)) {
                    return false;
                }
                this.visible = false;
            },
            handleMouseenter () {
                if (this.trigger !== 'hover' || this.confirm) {
                    return false;
                }
                if (this.enterTimer) clearTimeout(this.enterTimer);
                this.enterTimer = setTimeout(() => {
                    this.visible = true;
                }, 100);
            },
            handleMouseleave () {
                if (this.trigger !== 'hover' || this.confirm) {
                    return false;
                }
                if (this.enterTimer) {
                    clearTimeout(this.enterTimer);
                    this.enterTimer = setTimeout(() => {
                        this.visible = false;
                    }, 100);
                }
            },
            cancel () {
                this.visible = false;
                this.$emit('on-cancel');
            },
            ok () {
                this.visible = false;
                this.$emit('on-ok');
            },
            getInputChildren () {
                const $input = this.$refs.reference.querySelectorAll('input');
                const $textarea = this.$refs.reference.querySelectorAll('textarea');
                let $children = null;

                if ($input.length) {
                    $children = $input[0];
                } else if ($textarea.length) {
                    $children = $textarea[0];
                }

                return $children;
            },
            handleGetIndex () {
                transferIncrease();
                return transferIndex;
            },
            handleIndexIncrease () {
                this.tIndex = this.handleGetIndex();
            }
        },
        mounted () {
            if (!this.confirm) {
//                this.showTitle = this.$refs.title.innerHTML != `<div class="${prefixCls}-title-inner"></div>`;
                this.showTitle = (this.$slots.title !== undefined) || this.title;
            }
            // if trigger and children is input or textarea,listen focus & blur event
            if (this.trigger === 'focus') {
                this.$nextTick(() => {
                    const $children = this.getInputChildren();
                    if ($children) {
                        this.isInput = true;
                        $children.addEventListener('focus', this.handleFocus, false);
                        $children.addEventListener('blur', this.handleBlur, false);
                    }
                });
            }
        },
        beforeDestroy () {
            const $children = this.getInputChildren();
            if ($children) {
                $children.removeEventListener('focus', this.handleFocus, false);
                $children.removeEventListener('blur', this.handleBlur, false);
            }
        }
    };
</script>
