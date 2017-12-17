<template>
    <div @click="focusNewTag" :class="wrapClasses">
        <Tag v-for="(tag, index) in value" :key="index" :name="tag" :closable="closable" @on-close="remove(index)">{{ tag }}</Tag>
        <input :readonly="readOnly" :disabled="disabled" :id="elementId" :placeholder="placeholder" type="text" v-model="newTag" @keydown="handleKeydown" @focus="handleFocus" @blur="handleBlur" :class="inputClasses" :style="inputStyle" /></div>
</template>

<script>
    import { oneOf, findComponentUpward } from '../../utils/assist';
    import Emitter from '../../mixins/emitter';
    const prefixCls = 'ivu-input-tag';
    /*eslint-disable*/
    const validators = {
        email: new RegExp(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),
        url: new RegExp(/^(https?|ftp|rmtp|mms):\/\/(([A-Z0-9][A-Z0-9_-]*)(\.[A-Z0-9][A-Z0-9_-]*)+)(:(\d+))?\/?/i),
        text: new RegExp(/^[a-zA-Z]+$/),
        digits: new RegExp(/^[\d() \.\:\-\+#]+$/),
        isodate: new RegExp(/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/)
    }
    /*eslint-enable*/
    const lcase = (c) => {
        return c.toLowerCase();
    }
    const types = ['string', 'number'];
    export default {
        name: 'InputTag',
        mixins: [Emitter],
        props: {
            value: {
                type: Array,
                default: () => []
            },
            placeholder: {
                type: String,
                default: ''
            },
            size: {
                validator(value) {
                    return oneOf(value, ['large', 'default']);
                }
            },
            inputStyle: {
                type: String,
                default: ''
            },
            readOnly: {
                type: Boolean,
                default: false
            },
            disabled: {
                type: Boolean,
                default: false
            },
            validate: {
                type: String,
                default: ''
            },
            addKeyboard: {
                type: [String, Number, Array],
                default: () => ['enter', 'tab', 188] // ,
            },
            removeKeyboard: {
                type: [String, Number, Array],
                default: () => [8, 46] // delete backspace
            },
            elementId: {
                type: String
            }
    
        },
        data() {
            return {
                focused: false,
                newTag: ''
            }
        },
        computed: {
            tags() {
                return this.value;
            },
            wrapClasses() {
                return [
                    `${prefixCls}-wrapper`,
                    {
                        [`${prefixCls}-wrapper-${this.size}`]: !!this.size,
                        [`${prefixCls}-type`]: 1,
                        [`${prefixCls}-disabled`]: this.disabled,
                        [`${prefixCls}-focused`]: this.focused,
                        [`${prefixCls}-read-only`]: this.readOnly
                    }
                ];
            },
            inputClasses() {
                return [
                    `${prefixCls}-new-tag`,
                    `${prefixCls}-new-tag-${this.childSize}`
                ]
            },
            childSize() {
                return this.size || 'default';
            },
            closable() {
                return !this.readOnly && !this.disabled
            },
            addTrigger() {
                let addKeyboard = this.addKeyboard;
                if (~types.indexOf(typeof addKeyboard)) {
                    addKeyboard = [addKeyboard];
                }
                return addKeyboard;
            },
            removeTrigger() {
                let removeKeyboard = this.removeKeyboard;
                if (~types.indexOf(typeof removeKeyboard)) {
                    removeKeyboard = [removeKeyboard];
                }
                return removeKeyboard;
            }
        },
        methods: {
            focusNewTag() {
                if (this.readOnly) {
                    return
                }
                this.$el.querySelector('input').focus()
            },
            eventHasKeys(list, event) {
                return ~list.indexOf(event.keyCode) ||
                    ~list.indexOf(lcase(event.key)) ||
                    ~list.indexOf(lcase(event.code));
            },
            handleKeydown(event) {
                if (this.eventHasKeys(this.addTrigger, event)) {
                    event.preventDefault();
                    event.stopPropagation();
                    this.addNew(this.newTag);
                }
                if (this.eventHasKeys(this.removeTrigger, event)) {
                    event.stopPropagation();
                    this.removeLastTag();
                }
            },
            handleFocus(event) {
                this.focused = true;
                this.$emit('on-focus', event);
            },
            handleBlur(event) {
                this.focused = false;
                this.$emit('on-blur', event);
                const tags = JSON.parse(JSON.stringify(this.tags));
                this.dispatch('FormItem', 'on-form-blur', tags);
            },
            addNew(tag) {
                if (tag && !~this.tags.indexOf(tag) && this.validateIfNeeded(tag)) {
                    this.tags.push(tag)
                    this.tagChange()
                }
                this.newTag = ''
            },
            validateIfNeeded(tagValue) {
                if (this.validate === '' || this.validate === undefined) {
                    return true
                } else if (Object.keys(validators).indexOf(this.validate) > -1) {
                    return validators[this.validate].test(tagValue)
                }
                return true
            },
            remove(index) {
                this.tags.splice(index, 1)
                this.tagChange()
            },
            removeLastTag() {
                if (this.newTag) {
                    return
                }
                this.tags.pop()
                this.tagChange()
            },
            tagChange() {
                const tags = JSON.parse(JSON.stringify(this.tags));
                this.$emit('input', tags);
                this.$emit('on-change', tags);
                this.dispatch('FormItem', 'on-form-change', tags);
            }
        }
    }
</script>
