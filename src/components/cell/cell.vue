<template>
    <div :class="classes">
        <a v-if="to" class="ivu-cell-link" @click="handleClick">
            <CellItem :title="title" :label="label" :extra="extra">
                <slot name="icon" slot="icon"></slot>
                <slot></slot>
                <slot name="extra" slot="extra"></slot>
            </CellItem>
        </a>
        <div class="ivu-cell-link" v-else>
            <CellItem :title="title" :label="label" :extra="extra">
                <slot name="icon" slot="icon"></slot>
                <slot></slot>
                <slot name="extra" slot="extra"></slot>
            </CellItem>
        </div>
        <div class="ivu-cell-arrow" v-if="to">
            <slot name="arrow">
                <Icon type="ios-arrow-right"></Icon>
            </slot>
        </div>
    </div>
</template>
<script>
    import CellItem from './cell-item.vue';
    import Icon from '../icon/icon.vue';

    const prefixCls = 'ivu-cell';

    export default {
        name: 'Cell',
        components: { CellItem, Icon },
        props: {
            name: {
                type: [String, Number]
            },
            title: {
                type: String,
                default: ''
            },
            label: {
                type: String,
                default: ''
            },
            extra: {
                type: String,
                default: ''
            },
            disabled: {
                type: Boolean,
                default: false
            },
            selected: {
                type: Boolean,
                default: false
            },
            to: {
                type: [Object, String]
            },
            replace: {
                type: Boolean,
                default: false
            }
        },
        data () {
            return {
                prefixCls: prefixCls
            }
        },
        computed: {
            classes () {
                return [
                    `${prefixCls}`,
                    {
                        [`${prefixCls}-disabled`]: this.disabled,
                        [`${prefixCls}-selected`]: this.selected,
                        [`${prefixCls}-with-link`]: this.to
                    }
                ];
            }
        },
        methods: {
            handleClick () {
                const isRoute = this.$router;
                if (isRoute) {
                    this.replace ? this.$router.replace(this.to) : this.$router.push(this.to);
                } else {
                    window.location.href = this.to;
                }
            }
        }
    }
</script>