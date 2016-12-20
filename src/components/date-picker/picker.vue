<template>
    <div
        :class="[prefixCls]"
        v-clickoutside="handleClose">
        <i-input
            v-el:reference
            :class="[prefixCls + '-editor']"
            :readonly="!editable || readonly"
            :disabled="disabled"
            :size="size"
            :placeholder="placeholder"
            :value="visualValue"
            @on-change="handleInputChange"
            @on-focus="handleFocus"
            @on-blur="handleBlur"
            @on-click="handleIconClick"
            @mouseenter="handleInputMouseenter"
            @mouseleave="handleInputMouseleave"
            :icon="iconType"></i-input>
        <Drop v-show="visible" :placement="placement" transition="slide-up" v-ref:drop>
            <div v-el:picker></div>
        </Drop>
    </div>
</template>
<script>
    import Vue from 'vue';
    import iInput from '../../components/input/input.vue';
    import Drop from '../../components/select/dropdown.vue';
    import clickoutside from '../../directives/clickoutside';
    import { oneOf } from '../../utils/assist';
    import { formatDate, parseDate } from './util';

    const prefixCls = 'ivu-date-picker';

    const DEFAULT_FORMATS = {
        date: 'yyyy-MM-dd',
        month: 'yyyy-MM',
        year: 'yyyy',
        datetime: 'yyyy-MM-dd HH:mm:ss',
        time: 'HH:mm:ss',
        timerange: 'HH:mm:ss',
        daterange: 'yyyy-MM-dd',
        datetimerange: 'yyyy-MM-dd HH:mm:ss'
    };

    const RANGE_SEPARATOR = ' - ';

    const DATE_FORMATTER = function(value, format) {
        return formatDate(value, format);
    };
    const DATE_PARSER = function(text, format) {
        return parseDate(text, format);
    };
    const RANGE_FORMATTER = function(value, format) {
        if (Array.isArray(value) && value.length === 2) {
            const start = value[0];
            const end = value[1];

            if (start && end) {
                return formatDate(start, format) + RANGE_SEPARATOR + formatDate(end, format);
            }
        }
        return '';
    };
    const RANGE_PARSER = function(text, format) {
        const array = text.split(RANGE_SEPARATOR);
        if (array.length === 2) {
            const range1 = array[0];
            const range2 = array[1];

            return [parseDate(range1, format), parseDate(range2, format)];
        }
        return [];
    };

    const TYPE_VALUE_RESOLVER_MAP = {
        default: {
            formatter(value) {
                if (!value) return '';
                return '' + value;
            },
            parser(text) {
                if (text === undefined || text === '') return null;
                return text;
            }
        },
        date: {
            formatter: DATE_FORMATTER,
            parser: DATE_PARSER
        },
        datetime: {
            formatter: DATE_FORMATTER,
            parser: DATE_PARSER
        },
        daterange: {
            formatter: RANGE_FORMATTER,
            parser: RANGE_PARSER
        },
        datetimerange: {
            formatter: RANGE_FORMATTER,
            parser: RANGE_PARSER
        },
        timerange: {
            formatter: RANGE_FORMATTER,
            parser: RANGE_PARSER
        },
        time: {
            formatter: DATE_FORMATTER,
            parser: DATE_PARSER
        },
        month: {
            formatter: DATE_FORMATTER,
            parser: DATE_PARSER
        },
        year: {
            formatter: DATE_FORMATTER,
            parser: DATE_PARSER
        },
        number: {
            formatter(value) {
                if (!value) return '';
                return '' + value;
            },
            parser(text) {
                let result = Number(text);

                if (!isNaN(text)) {
                    return result;
                } else {
                    return null;
                }
            }
        }
    };

    const PLACEMENT_MAP = {
        left: 'bottom-start',
        center: 'bottom-center',
        right: 'bottom-end'
    };

    export default {
        components: { iInput, Drop },
        directives: { clickoutside },
        props: {
            format: {
                type: String
            },
            readonly: {
                type: Boolean,
                default: false
            },
            disabled: {
                type: Boolean,
                default: false
            },
            editable: {
                type: Boolean,
                default: true
            },
            clearable: {
                type: Boolean,
                default: true
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
            align: {
                validator (value) {
                    return oneOf(value, ['left', 'center', 'right']);
                },
                default: 'left'
            },
            options: {
                type: Object
            }
        },
        data () {
            return {
                prefixCls: prefixCls,
                showClose: false,
                visible: false,
                picker: null,
                internalValue: ''
            }
        },
        computed: {
            iconType () {
                return this.showClose ? 'ios-close' : 'ios-calendar-outline';
            },
            placement () {
                return PLACEMENT_MAP[this.align];
            },
            selectionMode() {
                if (this.type === 'month') {
                    return 'month';
                } else if (this.type === 'year') {
                    return 'year';
                }

                return 'day';
            },
            visualValue: {
                get () {
                    const value = this.internalValue;
                    if (!value) return;
                    const formatter = (
                        TYPE_VALUE_RESOLVER_MAP[this.type] ||
                        TYPE_VALUE_RESOLVER_MAP['default']
                    ).formatter;
                    const format = DEFAULT_FORMATS[this.type];

                    return formatter(value, this.format || format);
                },

                set (value) {
                    if (value) {
                        const type = this.type;
                        const parser = (
                            TYPE_VALUE_RESOLVER_MAP[type] ||
                            TYPE_VALUE_RESOLVER_MAP['default']
                        ).parser;
                        const parsedValue = parser(value, this.format || DEFAULT_FORMATS[type]);
                        if (parsedValue) {
                            if (this.picker) this.picker.value = parsedValue;
                        }
                        return;
                    }
                    if (this.picker) this.picker.value = value;
                }
            }
        },
        methods: {
            handleClose () {
                this.visible = false;
            },
            handleFocus () {
                if (this.readonly) return;
                this.visible = true;
            },
            handleBlur () {

            },
            handleInputChange (event) {
                const oldValue = this.visualValue;
                const value = event.target.value;

                let correctValue = '';
                let correctDate = '';
                const type = this.type;
                const format = this.format || DEFAULT_FORMATS[type];

                if (type === 'daterange' || type === 'timerange' || type === 'datetimerange') {
                    const parser = (
                        TYPE_VALUE_RESOLVER_MAP[type] ||
                        TYPE_VALUE_RESOLVER_MAP['default']
                    ).parser;

                    const formatter = (
                        TYPE_VALUE_RESOLVER_MAP[type] ||
                        TYPE_VALUE_RESOLVER_MAP['default']
                    ).formatter;

                    const parsedValue = parser(value, format);

                    if (parsedValue[0] instanceof Date && parsedValue[1] instanceof Date) {
                        if (parsedValue[0].getTime() > parsedValue[1].getTime()) {
                            correctValue = oldValue;
                        } else {
                            correctValue = formatter(parsedValue, format);
                        }
                        // todo 判断disabledDate
                    } else {
                        correctValue = oldValue;
                    }

                    correctDate = parser(correctValue, format);
                } else {
                    const parsedDate = parseDate(value, format);

                    if (parsedDate instanceof Date) {
                        const options = this.options;
                        if (options.disabledDate && typeof options.disabledDate === 'function' && options.disabledDate(new Date(parsedDate))) {
                            correctValue = oldValue;
                        } else {
                            correctValue = formatDate(parsedDate, format);
                        }
                    } else {
                        correctValue = oldValue;
                    }

                    correctDate = parseDate(correctValue, format);
                }

                this.visualValue = correctValue;
                event.target.value = correctValue;
                this.internalValue = correctDate;

                if (correctValue !== oldValue) this.emitChange(correctDate);
            },
            handleInputMouseenter () {
                if (this.readonly || this.disabled) return;
                if (this.visualValue && this.clearable) {
                    this.showClose = true;
                }
            },
            handleInputMouseleave () {
                this.showClose = false;
            },
            handleIconClick () {
                if (!this.showClose) return;
                this.visible = false;
                this.internalValue = '';
                this.value = '';
            },
            showPicker () {
                if (!this.picker) {
                    this.picker = new Vue(this.panel).$mount(this.$els.picker);
                    this.picker.value = this.internalValue;
                    this.picker.selectionMode = this.selectionMode;
                    if (this.format) this.picker.format = this.format;

                    const options = this.options;
                    for (const option in options) {
                        this.picker[option] = options[option];
                    }

                    this.picker.$on('on-pick', (date, visible = false) => {
                        this.emitChange(date);
                        this.value = date;
                        this.visible = visible;
                        this.picker.value = date;
                        this.picker.resetView && this.picker.resetView();
                    });

                    // todo $on('on-time-range')
                }
                if (this.internalValue instanceof Date) {
                    this.picker.date = new Date(this.internalValue.getTime());
                } else {
                    this.picker.value = this.internalValue;
                }
                this.picker.resetView && this.picker.resetView();
            },
            emitChange (date) {
                const format = this.format || DEFAULT_FORMATS[type];
                const formatter = (
                    TYPE_VALUE_RESOLVER_MAP[this.type] ||
                    TYPE_VALUE_RESOLVER_MAP['default']
                ).formatter;

                this.$emit('on-change', formatter(date, format));
            }
        },
        watch: {
            visible (val) {
                if (val) {
                    this.showPicker();
                    this.$refs.drop.update();
                    this.$emit('on-open-change', true);
                } else {
                    if (this.picker) {
                        this.picker.resetView && this.picker.resetView();
                    }
                    this.$refs.drop.destroy();
                    this.$emit('on-open-change', false);
                }
            },
            internalValue(val) {
                if (!val && this.picker && typeof this.picker.handleClear === 'function') {
                    this.picker.handleClear();
                }
            },
            value: {
                immediate: true,
                handler (val) {
                    this.internalValue = val;
                }
            }
        },
        beforeDestroy () {
            if (this.picker) {
                this.picker.$destroy();
            }
        }
    }
</script>