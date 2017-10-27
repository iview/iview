<template>
    <div :class="classes">
        <label :class="[prefixCls + '-label']" :for="labelFor" :style="labelStyles" v-if="label || $slots.label"><slot name="label">{{ label }}</slot></label>
        <div :class="[prefixCls + '-content']" :style="contentStyles">
            <slot></slot>
            <transition name="fade">
                <div :class="[prefixCls + '-error-tip']" v-if="validateState === 'error' && showMessage && form.showMessage">{{ validateMessage }}</div>
            </transition>
        </div>
    </div>
</template>
<script>
    import AsyncValidator from 'async-validator';
    import Emitter from '../../mixins/emitter';

    const prefixCls = 'ivu-form-item';

    function getPropByPath(obj, path) {
        let tempObj = obj;
        path = path.replace(/\[(\w+)\]/g, '.$1');
        path = path.replace(/^\./, '');

        let keyArr = path.split('.');
        let i = 0;

        for (let len = keyArr.length; i < len - 1; ++i) {
            let key = keyArr[i];
            if (key in tempObj) {
                tempObj = tempObj[key];
            } else {
                throw new Error('[iView warn]: please transfer a valid prop path to form item!');
            }
        }
        return {
            o: tempObj,
            k: keyArr[i],
            v: tempObj[keyArr[i]]
        };
    }

    export default {
        name: 'FormItem',
        mixins: [ Emitter ],
        props: {
            label: {
                type: String,
                default: ''
            },
            labelWidth: {
                type: Number
            },
            prop: {
                type: String
            },
            required: {
                type: Boolean,
                default: false
            },
            rules: {
                type: [Object, Array]
            },
            error: {
                type: String
            },
            validateStatus: {
                type: Boolean
            },
            showMessage: {
                type: Boolean,
                default: true
            },
            labelFor: {
                type: String
            }
        },
        data () {
            return {
                prefixCls: prefixCls,
                isRequired: false,
                validateState: '',
                validateMessage: '',
                validateDisabled: false,
                validator: {}
            };
        },
        watch: {
            error (val) {
                this.validateMessage = val;
                this.validateState = val === '' ? '' : 'error';
            },
            validateStatus (val) {
                this.validateState = val;
            }
        },
        computed: {
            classes () {
                return [
                    `${prefixCls}`,
                    {
                        [`${prefixCls}-required`]: this.required || this.isRequired,
                        [`${prefixCls}-error`]: this.validateState === 'error',
                        [`${prefixCls}-validating`]: this.validateState === 'validating'
                    }
                ];
            },
            form() {
                let parent = this.$parent;
                while (parent.$options.name !== 'iForm') {
                    parent = parent.$parent;
                }
                return parent;
            },
            fieldValue: {
                cache: false,
                get() {
                    const model = this.form.model;
                    if (!model || !this.prop) { return; }

                    let path = this.prop;
                    if (path.indexOf(':') !== -1) {
                        path = path.replace(/:/, '.');
                    }

                    return getPropByPath(model, path).v;
                }
            },
            labelStyles () {
                let style = {};
                const labelWidth = this.labelWidth || this.form.labelWidth;
                if (labelWidth) {
                    style.width = `${labelWidth}px`;
                }
                return style;
            },
            contentStyles () {
                let style = {};
                const labelWidth = this.labelWidth || this.form.labelWidth;
                if (labelWidth) {
                    style.marginLeft = `${labelWidth}px`;
                }
                return style;
            }
        },
        methods: {
            getRules () {
                let formRules = this.form.rules;
                const selfRules = this.rules;

                formRules = formRules ? formRules[this.prop] : [];

                return [].concat(selfRules || formRules || []);
            },
            getFilteredRule (trigger) {
                const rules = this.getRules();

                return rules.filter(rule => !rule.trigger || rule.trigger.indexOf(trigger) !== -1);
            },
            validate(trigger, callback = function () {}) {
                const rules = this.getFilteredRule(trigger);
                if (!rules || rules.length === 0) {
                    callback();
                    return true;
                }

                this.validateState = 'validating';

                let descriptor = {};
                descriptor[this.prop] = rules;

                const validator = new AsyncValidator(descriptor);
                let model = {};

                model[this.prop] = this.fieldValue;

                validator.validate(model, { firstFields: true }, errors => {
                    this.validateState = !errors ? 'success' : 'error';
                    this.validateMessage = errors ? errors[0].message : '';

                    callback(this.validateMessage);
                });
                this.validateDisabled = false;
            },
            resetField () {
                this.validateState = '';
                this.validateMessage = '';

                let model = this.form.model;
                let value = this.fieldValue;
                let path = this.prop;
                if (path.indexOf(':') !== -1) {
                    path = path.replace(/:/, '.');
                }

                let prop = getPropByPath(model, path);

//                if (Array.isArray(value) && value.length > 0) {
//                    this.validateDisabled = true;
//                    prop.o[prop.k] = [];
//                } else if (value !== this.initialValue) {
//                    this.validateDisabled = true;
//                    prop.o[prop.k] = this.initialValue;
//                }
                if (Array.isArray(value)) {
                    this.validateDisabled = true;
                    prop.o[prop.k] = [].concat(this.initialValue);
                } else {
                    this.validateDisabled = true;
                    prop.o[prop.k] = this.initialValue;
                }
            },
            onFieldBlur() {
                this.validate('blur');
            },
            onFieldChange() {
                if (this.validateDisabled) {
                    this.validateDisabled = false;
                    return;
                }

                this.validate('change');
            }
        },
        mounted () {
            if (this.prop) {
                this.dispatch('iForm', 'on-form-item-add', this);

                Object.defineProperty(this, 'initialValue', {
                    value: this.fieldValue
                });

                let rules = this.getRules();

                if (rules.length) {
                    rules.every(rule => {
                        if (rule.required) {
                            this.isRequired = true;
                            return false;
                        }
                    });
                    this.$on('on-form-blur', this.onFieldBlur);
                    this.$on('on-form-change', this.onFieldChange);
                }
            }
        },
        beforeDestroy () {
            this.dispatch('iForm', 'on-form-item-remove', this);
        }
    };
</script>
