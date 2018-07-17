<template>
    <li :class="classes" @click.stop="select" @mouseout.stop="blur" v-show="!hidden"><slot>{{ showLabel }}</slot></li>
</template>
<script>
    const prefixCls = 'ivu-select-item';

    export default {
        props: {
            value: {
                type: [String, Number],
                required: true
            },
            label: {
                type: [String, Number]
            },
            disabled: {
                type: Boolean,
                default: false
            }
        },
        componentName: 'select-item',
        data () {
            return {
                selected: false,
                index: 0,    // for up and down to focus
                isFocus: false,
                hidden: false,    // for search
                searchLabel: ''    // the value is slot,only for search
            };
        },
        computed: {
            classes () {
                return [
                    `${prefixCls}`,
                    {
                        [`${prefixCls}-disabled`]: this.disabled,
                        [`${prefixCls}-selected`]: this.selected,
                        [`${prefixCls}-focus`]: this.isFocus
                    }
                ];
            },
            showLabel () {
                return (this.label) ? this.label : this.value;
            }
        },
        methods: {
            select () {
                if (this.disabled) {
                    return false;
                }

                this.$dispatch('on-select-selected', this.value);
            },
            blur () {
                this.isFocus = false;
            },
            queryChange (val) {
                const parsedQuery = val.replace(/(\^|\(|\)|\[|\]|\$|\*|\+|\.|\?|\\|\{|\}|\|)/g, '\\$1');
                this.hidden = !new RegExp(parsedQuery, 'i').test(this.searchLabel);
            }
        },
        compiled () {
            this.searchLabel = this.$el.innerHTML;
        },
        events: {
            'on-select-close' () {
                this.isFocus = false;
            },
            'on-query-change' (val) {
                this.queryChange(val);
            }
        }
    };
</script>
