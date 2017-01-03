<template>
    <div :class="classes" v-clickoutside="handleClose">
        <div
            :class="[prefixCls + '-selection']"
            @click="toggleMenu"
            v-el:reference>
            <input
                type="text"
                v-model="query"
                :class="[prefixCls + '-input']"
                :placeholder="showPlaceholder ? placeholder : ''"
                :style="inputStyle"
                :disabled="disabled"
                @blur="this.focus = false"
                @focus="this.focus = true"
                v-el:input>
        </div>
        <Dropdown v-show="visible" transition="slide-up" v-ref:dropdown>
            <ul v-show="notFound" :class="[prefixCls + '-not-found']"><li>{{ notFoundText }}</li></ul>
            <ul v-else :class="[prefixCls + '-dropdown-list']" v-el:options><slot></slot></ul>
        </Dropdown>
    </div>
</template>
<script>
    import Dropdown from '../select/dropdown.vue';
    import clickoutside from '../../directives/clickoutside';
    import { oneOf, MutationObserver } from '../../utils/assist';

    const prefixCls = 'ivu-select';

    export default {
        components: { Dropdown },
        directives: { clickoutside },
        props: {
            model: {
                type: [String, Number],
                default: ''
            },
            disabled: {
                type: Boolean,
                default: false
            },
            clearable: {
                type: Boolean,
                default: false
            },
            placeholder: {
                type: String,
                default: ''
            },
            size: {
                validator (value) {
                    return oneOf(value, ['small', 'large', 'default']);
                }
            },
            labelInValue: {
                type: Boolean,
                default: false
            },
            notFoundText: {
                type: String,
                default: '无匹配数据'
            }
        },
        data () {
            return {
                prefixCls: prefixCls,
                visible: false,
                options: [],
                optionInstances: [],
                selectedSingle: '',
                focusIndex: 0,
                query: '',
                lastQuery: '',
                inputLength: 20,
                notFound: false,
                slotChangeDuration: false,
                focus: false
            };
        },
        computed: {
            classes () {
                return [
                    `${prefixCls}`, `${prefixCls}-single`, `${prefixCls}-auto-complete`,
                    {
                        [`${prefixCls}-active`]: this.focus,
                        [`${prefixCls}-visible`]: this.visible,
                        [`${prefixCls}-disabled`]: this.disabled,
                        [`${prefixCls}-show-clear`]: this.showCloseIcon,
                        [`${prefixCls}-${this.size}`]: !!this.size
                    }
                ];
            },
            showPlaceholder () {
                let status = false;

                if (this.model === '') {
                    status = true;
                }

                return status;
            },
            showCloseIcon () {
                return this.clearable && !this.showPlaceholder;
            },
            inputStyle () {
                let style = {};

                return style;
            }
        },
        methods: {
            toggleMenu () {
                if (this.disabled) {
                    return false;
                }

                this.visible = this.query !== ''

                this.$nextTick(() => {
                    this.$els.input.focus()
                });

                return true;
            },
            hideMenu () {
                this.visible = false;
                this.focusIndex = 0;
                this.$broadcast('on-select-close');
            },
            // find option component
            findChild (cb) {
                const find = function (child) {
                    const name = child.$options.componentName;

                    if (name) {
                        cb(child);
                    } else if (child.$children.length) {
                        child.$children.forEach((innerChild) => {
                            find(innerChild, cb);
                        });
                    }
                };

                if (this.optionInstances.length) {
                    this.optionInstances.forEach((child) => {
                        find(child);
                    });
                } else {
                    this.$children.forEach((child) => {
                        find(child);
                    });
                }
            },
            updateOptions (init, slot = false) {
                let options = [];
                let index = 1;

                this.findChild((child) => {
                    options.push({
                        value: child.value,
                        label: (child.label === undefined) ? child.$el.innerHTML : child.label
                    });
                    child.index = index++;

                    if (init) {
                        this.optionInstances.push(child);
                    }
                });

                this.options = options;

                if (init) {
                    this.updateSingleSelected(true, slot);
                }
            },
            updateSingleSelected (init = false, slot = false) {
                const type = typeof this.model;

                if (type === 'string' || type === 'number') {
                    let findModel = false;

                    for (let i = 0; i < this.options.length; i++) {
                        if (this.model === this.options[i].value) {
                            this.selectedSingle = this.options[i].label;
                            findModel = true;
                            break;
                        }
                    }

                    if (slot && !findModel) {
                        this.model = '';
                        this.query = '';
                    }
                }

                this.toggleSingleSelected(this.model, init);
            },
            clearSingleSelect () {
                if (this.showCloseIcon) {
                    this.findChild((child) => {
                        child.selected = false;
                    });
                    this.model = '';

                    this.query = '';
                }
            },
            // to select option for single
            toggleSingleSelected (value, init = false) {
                let label = '';

                this.findChild((child) => {
                    if (child.value === value) {
                        child.selected = true;
                        label = (child.label === undefined) ? child.$el.innerHTML : child.label;
                    } else {
                        child.selected = false;
                    }
                });

                this.hideMenu();

                if (!init) {
                    if (this.labelInValue) {
                        this.$emit('on-change', {
                            value: value,
                            label: label
                        });
                    } else {
                        this.$emit('on-change', value);
                    }
                }
            },
            handleClose () {
                this.hideMenu();
            },
            handleKeydown (e) {
                if (this.visible) {
                    const keyCode = e.keyCode;
                    // Esc slide-up
                    if (keyCode === 27) {
                        e.preventDefault();
                        this.hideMenu();
                    }
                    // next
                    if (keyCode === 40) {
                        e.preventDefault();
                        this.navigateOptions('next');
                    }
                    // prev
                    if (keyCode === 38) {
                        e.preventDefault();
                        this.navigateOptions('prev');
                    }
                    // enter
                    if (keyCode === 13) {
                        e.preventDefault();

                        this.findChild((child) => {
                            if (child.isFocus) {
                                child.select();
                            }
                        });
                    }
                }
            },
            navigateOptions (direction) {
                if (direction === 'next') {
                    const next = this.focusIndex + 1;
                    this.focusIndex = (this.focusIndex === this.options.length) ? 1 : next;
                } else if (direction === 'prev') {
                    const prev = this.focusIndex - 1;
                    this.focusIndex = (this.focusIndex <= 1) ? this.options.length : prev;
                }

                let child_status = {
                    disabled: false,
                    hidden: false
                };

                let find_deep = false;    // can next find allowed

                this.findChild((child) => {
                    if (child.index === this.focusIndex) {
                        child_status.disabled = child.disabled;
                        child_status.hidden = child.hidden;

                        if (!child.disabled && !child.hidden) {
                            child.isFocus = true;
                        }
                    } else {
                        child.isFocus = false;
                    }

                    if (!child.hidden && !child.disabled) {
                        find_deep = true;
                    }
                });

                this.resetScrollTop();

                if ((child_status.disabled || child_status.hidden) && find_deep) {
                    this.navigateOptions(direction);
                }
            },
            resetScrollTop () {
                const index = this.focusIndex - 1;
                let bottomOverflowDistance = this.optionInstances[index].$el.getBoundingClientRect().bottom - this.$refs.dropdown.$el.getBoundingClientRect().bottom;
                let topOverflowDistance = this.optionInstances[index].$el.getBoundingClientRect().top - this.$refs.dropdown.$el.getBoundingClientRect().top;

                if (bottomOverflowDistance > 0) {
                    this.$refs.dropdown.$el.scrollTop += bottomOverflowDistance;
                }
                if (topOverflowDistance < 0) {
                    this.$refs.dropdown.$el.scrollTop += topOverflowDistance;
                }
            },
            handleBlur () {
                this.focus = true
            },
            handleFocus () {
                this.focus = false
            },
            resetInputState () {
                this.inputLength = this.$els.input.value.length * 12 + 20;
            },
            // use when slot changed
            slotChange () {
                this.options = [];
                this.optionInstances = [];
            }
        },
        ready () {
            if (this.model) {
                this.findChild((child) => {
                    if (this.model === child.value) {
                        if (child.label) {
                            this.query = child.label;
                        } else if (child.searchLabel) {
                            this.query = child.searchLabel;
                        } else {
                            this.query = child.value;
                        }
                    }
                });
            }

            this.updateOptions(true);
            document.addEventListener('keydown', this.handleKeydown);

            // watch slot changed
            if (MutationObserver) {
                this.observer = new MutationObserver(() => {
                    this.slotChange();
                    this.updateOptions(true, true);
                });

                this.observer.observe(this.$els.options, {
//                attributes: true,
                    childList: true,
                    characterData: true,
                    subtree: true
                });
            }

            this.lastQuery = this.query
        },
        beforeDestroy () {
            document.removeEventListener('keydown', this.handleKeydown);
            if (this.observer) {
                this.observer.disconnect();
            }
        },
        watch: {
            model () {
                // this.updateSingleSelected();
            },
            visible (val) {
                if (val) {
                    this.$broadcast('on-update-popper');
                } else {
                    this.$broadcast('on-destroy-popper');
                }
            },
            query (val) {
                this.$broadcast('on-query-change', val);
                let is_hidden = true;

                this.model = val;

                this.$nextTick(() => {
                    this.findChild((child) => {
                        if (!child.hidden) {
                            is_hidden = false;
                        }
                    });
                    this.notFound = is_hidden;

                    if (this.query !== this.lastQuery) {
                        this.visible = true;
                        this.$els.input.focus()
                    } else {
                        this.visible = false;
                    }

                    if (this.query !== this.lastQuery) this.lastQuery = ''
                });
            }
        },
        events: {
            'on-select-selected' (value) {
                if (this.model === value) {
                    this.hideMenu();
                } else {
                    this.model = value;

                    this.findChild((child) => {
                        if (child.value === value) {
                            this.query = child.searchLabel;
                            this.lastQuery = this.query;
                        }
                    });
                }
            }
        }
    };
</script>
