<template>
    <li
        v-show="!hidden"
        :class="wrapperClasses"
    >
        <div :class="titleClasses">{{label}}</div>
        <ul>
            <li
                :class="optionClasses"
                ref="options"
            >
                <slot></slot>
            </li>
        </ul>
    </li>
</template>

<script>
    import OPTIONGROUP_NAME from './optionGroupName';
    import PREFIXCLS from './prefixCls';
    import {
        EMPTY_STRING,
        GROUP,
        ITEM,
        NONE,
        TITLE,
        WRAP,
    } from '@/utils/constants';
    import kebabJoin from 'caboodle-x/kebabJoin';
    import {
        EVENT_ON_QUERY_CHANGE,
    } from '@/utils/eventNames';

    const prefixCls = kebabJoin(PREFIXCLS, GROUP);

    export default {
        name: OPTIONGROUP_NAME,

        props: {
            label: {
                default: EMPTY_STRING,
                type: String,
            },
        },

        data(){
            return {
                hidden: false, // for search
            };
        },

        computed: {
            optionClasses(){
                return [
                    prefixCls,
                ];
            },

            optionSelector(){
                return `.${kebabJoin(PREFIXCLS, ITEM)}`;
            },

            titleClasses(){
                return [
                    kebabJoin(prefixCls, TITLE),
                ];
            },

            wrapperClasses(){
                return [
                    kebabJoin(prefixCls, WRAP),
                ];
            },
        },

        mounted(){
            this.$on(EVENT_ON_QUERY_CHANGE, () => {
                this.queryChange();
            });
        },

        methods: {
            queryChange(){
                this.$nextTick(() => {
                    const options = [...this.$refs.options.querySelectorAll(this.optionSelector)];
                    const hasVisibleOption = options.find(option => option.style.display !== NONE);

                    this.hidden = !hasVisibleOption;
                });
            },
        },
    };
</script>
