<template>
    <li
        v-show="!hidden"
        :class="optionClasses"
        @click.stop="select"
        @mouseout.stop="blur"
    >
        <slot>{{showLabel}}</slot>
    </li>
</template>

<script>
    import SELECT_NAME from './selectName';
    import OPTION_NAME from './optionName';
    import PREFIXCLS from './prefixCls';
    import Emitter from '@/mixins/emitter';
    import {
        APPEND,
        DISABLED,
        EMPTY_STRING,
        FOCUS,
        ITEM,
        REMOVE,
        SELECTED,
    } from '@/utils/constants';
    import {STRING_NUMBER_LIST} from '@/utils/enums';
    import {findComponentUpward} from '@/utils/assist';
    import defineValidatorProperties from 'caboodle-x/defineValidatorProperties';
    import isBooleanType from 'caboodle-x/isBooleanType';
    import isStringType from 'caboodle-x/isStringType';
    import isStringTypeOrNumberType from 'caboodle-x/isStringTypeOrNumberType';
    import isWholeNumber from 'caboodle-x/isWholeNumber';
    import kebabJoin from 'caboodle-x/kebabJoin';
    import regexpEscape from 'caboodle-x/regexpEscape';
    import {
        EVENT_ON_QUERY_CHANGE,
        EVENT_ON_SELECT_CLOSE,
        EVENT_ON_SELECT_SELECTED,
    } from '@/utils/eventNames';

    const prefixCls = kebabJoin(PREFIXCLS, ITEM);

    export default {
        name: OPTION_NAME,

        mixins: [Emitter],

        props: {
            disabled: {
                default: false,
                type: Boolean,
                validator: isBooleanType,
            },
            label: {
                default: undefined,
                type: STRING_NUMBER_LIST,
                validator: isStringTypeOrNumberType,
            },
            value: {
                required: true,
                type: STRING_NUMBER_LIST,
                validator: isStringTypeOrNumberType,
            },
        },

        data(){
            return defineValidatorProperties({}, {
                autoComplete: {
                    validator: isBooleanType,
                    value: false,
                },
                hidden: {
                    validator: isBooleanType,
                    value: false,
                },
                isFocus: {
                    validator: isBooleanType,
                    value: false,
                },
                index: {
                    validator: isWholeNumber,
                    value: 0,
                },
                searchLabel: {
                    validator: isStringType,
                    value: EMPTY_STRING,
                },
                selected: {
                    validator: isBooleanType,
                    value: false,
                },
            });
        },

        computed: {
            optionClasses(){
                return [
                    prefixCls,
                    {
                        [kebabJoin(prefixCls, DISABLED)]: this.disabled,
                        [kebabJoin(prefixCls, FOCUS)]: this.isFocus,
                        [kebabJoin(prefixCls, SELECTED)]: this.selected && !this.autoComplete,
                    },
                ];
            },

            showLabel(){
                return this.label || this.value;
            },
        },

        mounted(){
            this.updateSearchLabel();
            this.dispatch(SELECT_NAME, APPEND);
            this.$on(EVENT_ON_SELECT_CLOSE, this.onSelectClose);
            this.$on(EVENT_ON_QUERY_CHANGE, this.onQueryChange);

            const Select = findComponentUpward(this, SELECT_NAME);

            if (Select) {
                this.autoComplete = Select.autoComplete;
            }
        },

        beforeDestroy(){
            this.dispatch(SELECT_NAME, REMOVE);
            this.$off(EVENT_ON_SELECT_CLOSE, this.onSelectClose);
            this.$off(EVENT_ON_QUERY_CHANGE, this.onQueryChange);
        },

        methods: {
            blur(){
                this.isFocus = false;
            },

            onQueryChange(val){
                this.queryChange(val);
            },

            onSelectClose(){
                this.isFocus = false;
            },

            queryChange(val){
                const parsedQuery = regexpEscape(val);
                const rx = new RegExp(parsedQuery, 'i');

                this.hidden = !rx.test(this.searchLabel);
            },

            select(){
                if (this.disabled) {
                    return;
                }

                this.dispatch(SELECT_NAME, EVENT_ON_SELECT_SELECTED, this.value);
            },

            // 在使用函数防抖后，设置 key 后，不更新组件了，导致SearchLabel 不更新 #1865
            updateSearchLabel(){
                this.searchLabel = this.$el.textContent;
            },

        },
    };
</script>
