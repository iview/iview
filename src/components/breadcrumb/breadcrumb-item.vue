<template>
    <span>
        <a v-if="to" :href="linkUrl" :target="target" :class="linkClasses" @click="handleCheckClick">
            <slot></slot>
        </a>
        <span v-else :class="linkClasses">
            <slot></slot>
        </span>
        <span :class="separatorClasses" v-html="separator" v-if="!showSeparator"></span>
        <span :class="separatorClasses" v-else>
            <slot name="separator"></slot>
        </span>
    </span>
</template>
<script>
    import mixinsLink from '../../mixins/link';
    const prefixCls = 'ivu-breadcrumb-item';
    import { oneOf } from '../../utils/assist';

    export default {
        name: 'BreadcrumbItem',
        mixins: [ mixinsLink ],
        props: {
            to: {
                type: [Object, String]
            },
            replace: {
                type: Boolean,
                default: false
            },
            target: {
                type: String,
                validator (value) {
                    return oneOf(value, ['_blank', '_self', '_parent', '_top']);
                },
                default: '_self'
            }
        },
        data () {
            return {
                separator: '',
                showSeparator: false
            };
        },
        computed: {
            linkClasses () {
                return `${prefixCls}-link`;
            },
            separatorClasses () {
                return `${prefixCls}-separator`;
            }
        },
        mounted () {
            this.showSeparator = this.$slots.separator !== undefined;
        }
    };
</script>
