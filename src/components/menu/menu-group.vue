<template>
    <li :class="[prefixCls + '-item-group']">
        <div :class="[prefixCls + '-item-group-title']" :style="groupStyle">{{ title }}</div>
        <ul><slot></slot></ul>
    </li>
</template>
<script>
    import { findComponentUpward, findComponentsUpward } from '../../utils/assist';
    import mixin from './mixin';
    const prefixCls = 'ivu-menu';

    export default {
        name: 'MenuGroup',
        mixins: [ mixin ],
        props: {
            title: {
                type: String,
                default: ''
            }
        },
        data () {
            return {
                prefixCls: prefixCls
            };
        },
        computed: {
            groupStyle () {
                return this.hasParentSubmenu ? {
                    paddingLeft: 43 + (this.parentSubmenuNum - 1) * 28 + 'px'
                } : {};
            }
        }
    };
</script>
