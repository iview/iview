<template>
    <div v-if="!closed" :class="classes" transition="fade">
        <span :class="textClasses"><slot></slot></span>
        <Icon v-if="closable" type="ios-close-empty" @click="close"></Icon>
    </div>
</template>
<script>
    import Icon from '../icon';
    import { oneOf } from '../../utils/assist';

    const prefixCls = 'ivu-tag';

    export default {
        components: { Icon },
        props: {
            closable: {
                type: Boolean,
                default: false
            },
            color: {
                validator (value) {
                    return oneOf(value, ['blue', 'green', 'red', 'yellow']);
                }
            }
        },
        data () {
            return {
                closed: false
            }
        },
        computed: {
            classes () {
                return [
                    `${prefixCls}`,
                    {
                        [`${prefixCls}-${this.color}`]: !!this.color
                    }
                ]
            },
            textClasses () {
                return `${prefixCls}-text`;
            }
        },
        methods: {
            close (e) {
                this.closed = true;
                this.$emit('on-close', e);
            }
        }
    }
</script>