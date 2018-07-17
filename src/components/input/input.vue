<template>
    <div :class="wrapClasses">
        <template v-if="type !== 'textarea'">
            <div :class="[prefixCls + '-group-prepend']" v-if="prepend" v-show="slotReady" v-el:prepend><slot name="prepend"></slot></div>
            <i class="ivu-icon" :class="['ivu-icon-' + icon, prefixCls + '-icon']" v-if="icon" @click="handleIconClick"></i>
            <i class="ivu-icon ivu-icon-load-c ivu-load-loop" :class="[prefixCls + '-icon', prefixCls + '-icon-validate']" v-else transition="fade"></i>
            <input
                :type="type"
                :class="inputClasses"
                :placeholder="placeholder"
                :disabled="disabled"
                :maxlength="maxlength"
                :readonly="readonly"
                :name="name"
                v-model="value"
                :number="number"
                @keyup.enter="handleEnter"
                @focus="handleFocus"
                @blur="handleBlur"
                @change="handleChange">
            <div :class="[prefixCls + '-group-append']" v-if="append" v-show="slotReady" v-el:append><slot name="append"></slot></div>
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
            :readonly="readonly"
            :name="name"
            v-model="value"
            @keyup.enter="handleEnter"
            @focus="handleFocus"
            @blur="handleBlur"
            @change="handleChange">
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
//                twoWay: true
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
            },
            readonly: {
                type: Boolean,
                default: false
            },
            name: {
                type: String
            },
            number: {
                type: Boolean,
                default: false
            }
        },
        data () {
            return {
                prefixCls: prefixCls,
                prepend: true,
                append: true,
                slotReady: false,
                textareaStyles: {}
            };
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
                ];
            },
            inputClasses () {
                return [
                    `${prefixCls}`,
                    {
                        [`${prefixCls}-${this.size}`]: !!this.size,
                        [`${prefixCls}-disabled`]: this.disabled
                    }
                ];
            },
            textareaClasses () {
                return [
                    `${prefixCls}`,
                    {
                        [`${prefixCls}-disabled`]: this.disabled
                    }
                ];
            }
        },
        methods: {
            handleEnter () {
                this.$emit('on-enter');
            },
            handleIconClick () {
                this.$emit('on-click');
            },
            handleFocus () {
                this.$emit('on-focus');
            },
            handleBlur () {
                this.$emit('on-blur');
                this.$dispatch('on-form-blur', this.value);
            },
            handleChange (event) {
                this.$emit('on-change', event);
            },
            resizeTextarea () {
                const autosize = this.autosize;
                if (!autosize || this.type !== 'textarea') {
                    return false;
                }

                const minRows = autosize.minRows;
                const maxRows = autosize.maxRows;

                this.textareaStyles = calcTextareaHeight(this.$els.textarea, minRows, maxRows);
            },
            init () {
                if (this.type !== 'textarea') {
                    this.prepend = this.$els.prepend.innerHTML !== '';
                    this.append = this.$els.append.innerHTML !== '';
                } else {
                    this.prepend = false;
                    this.append = false;
                }
                this.slotReady = true;
                this.resizeTextarea();
            }
        },
        watch: {
            value () {
                this.$nextTick(() => {
                    this.resizeTextarea();
                });
                this.$dispatch('on-form-change', this.value);
            }
        },
        compiled () {
            this.$nextTick(() => this.init());
        }
    };
</script>
