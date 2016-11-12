<template>
    <div :class="wrapClasses">
        <template v-if="type !== 'textarea'">
            <div :class="[prefixCls + '-group-prepend']" v-if="prepend" v-el:prepend><slot name="prepend"></slot></div>
            <i class="ivu-icon" :class="['ivu-icon-' + icon, prefixCls + '-icon']" v-if="icon" @click="handleIconClick"></i>
            <input
                :type="type"
                :class="inputClasses"
                :placeholder="placeholder"
                :disabled="disabled"
                :maxlength="maxlength"
                v-model="value"
                @keyup.enter="handleEnter">
            <div :class="[prefixCls + '-group-append']" v-if="append" v-el:append><slot name="append"></slot></div>
        </template>
        <textarea
            v-else
            v-el:textarea
            :class="textareaClasses"
            :style="textareaStyles"
            :placeholder="placeholder"
            :disabled="disabled"
            :rows="rows"
            :maxlength="maxlength"
            v-model="value"
            @keyup.enter="handleEnter">
        </textarea>
    </div>
</template>
<script>
    import { oneOf } from '../../utils/assist';
    import calcTextareaHeight from '../../utils/calcTextareaHeight';

    const prefixCls = 'ivu-input';

    export default {
        props: {
            type: {
                validator (value) {
                    return oneOf(value, ['text', 'textarea', 'password']);
                },
                default: 'text'
            },
            value: {
                type: [String, Number],
                default: '',
                twoWay: true
            },
            size: {
                validator (value) {
                    return oneOf(value, ['small', 'large']);
                }
            },
            placeholder: {
                type: String,
                default: ''
            },
            maxlength: {
                type: Number
            },
            disabled: {
                type: Boolean,
                default: false
            },
            icon: String,
            autosize: {
                type: [Boolean, Object],
                default: false
            },
            rows: {
                type: Number,
                default: 2
            }
        },
        data () {
            return {
                prefixCls: prefixCls,
                prepend: true,
                append: true,
                textareaStyles: {}
            }        
        },
        computed: {
            wrapClasses () {
                return [
                    `${prefixCls}-wrapper`,
                    {
                        [`${prefixCls}-wrapper-${this.size}`]: !!this.size,
                        [`${prefixCls}-type`]: this.type,
                        [`${prefixCls}-group`]: this.prepend || this.append,
                        [`${prefixCls}-group-${this.size}`]: (this.prepend || this.append) && !!this.size
                    }
                ]
            },
            inputClasses () {
                return [
                    `${prefixCls}`,
                    {
                        [`${prefixCls}-${this.size}`]: !!this.size,
                        [`${prefixCls}-disabled`]: this.disabled
                    }
                ]
            },
            textareaClasses () {
                return [
                    `${prefixCls}`,
                    {
                        [`${prefixCls}-disabled`]: this.disabled
                    }
                ]
            }
        },
        methods: {
            handleEnter () {
                this.$emit('on-enter');
            },
            handleIconClick () {
                this.$emit('on-click');
            },
            resizeTextarea () {
                const autosize = this.autosize;
                if (!autosize || this.type !== 'textarea') {
                    return false;
                }

                const minRows = autosize.minRows;
                const maxRows = autosize.maxRows;

                this.textareaStyles = calcTextareaHeight(this.$els.textarea, minRows, maxRows);
            }
        },
        watch: {
            value (val) {
                this.$nextTick(() => {
                    this.resizeTextarea();
                });
                this.$emit('on-change', val);
            }
        },
        ready () {
            if (this.type === 'text') {
                this.prepend = this.$els.prepend.innerHTML !== '';
                this.append = this.$els.append.innerHTML !== '';
            } else {
                this.prepend = false;
                this.append = false;
            }
            this.resizeTextarea();
        }
    }
</script>