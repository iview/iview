<template>
    <span :class="classes">
        <img :src="src" v-if="src">
        <span :class="[prefixCls + '-string']" v-else-if="$slots.default"><slot></slot></span>
        <Icon :type="icon" v-else-if="icon"></Icon>
    </span>
</template>
<script>
    import Icon from '../icon';
    import { oneOf } from '../../utils/assist';

    const prefixCls = 'ivu-avatar';

    export default {
        name: 'Avatar',
        components: { Icon },
        props: {
            shape: {
                validator (value) {
                    return oneOf(value, ['circle', 'square']);
                },
                default: 'circle'
            },
            size: {
                validator (value) {
                    return oneOf(value, ['small', 'large', 'default']);
                },
                default: 'default'
            },
            src: {
                type: String
            },
            icon: {
                type: String
            }
        },
        data () {
            return {
                prefixCls: prefixCls
            };
        },
        computed: {
            classes () {
                return [
                    `${prefixCls}`,
                    `${prefixCls}-${this.shape}`,
                    `${prefixCls}-${this.size}`,
                    {
                        [`${prefixCls}-image`]: !!this.src,
                        [`${prefixCls}-icon`]: !!this.icon
                    }
                ];
            }
        },
        methods: {

        }
    };
</script>