<template>
    <span :class="classes" @click="handleClick">{{ date }}</span>
</template>
<script>
    import Vue from 'vue';
    const isServer = Vue.prototype.$isServer;
    import { oneOf } from '../../utils/assist';

    const prefixCls = 'ivu-time';

    export default {
        name: 'Time',
        props: {
            time: {
                type: [String, Number, Date],
                required: true
            },
            type: {
                type: String,
                validator (value) {
                    return oneOf(value, ['relative', 'date', 'datetime']);
                },
                default: 'relative'
            },
            hash: {
                type: String,
                default: ''
            },
            interval: {
                type: Number,
                default: 60
            }
        },
        data () {
            return {
                date: ''
            };
        },
        computed: {
            classes () {
                return [
                    `${prefixCls}`,
                    {
                        [`${prefixCls}-with-hash`]: this.hash
                    }
                ];
            }
        },
        methods: {
            handleClick () {
                if (this.hash !== '') window.location.hash = this.hash;
            },
            setTime () {
                this.date = this.time;
            }
        },
        mounted () {
            this.setTime();
            if (isServer) return;
            this.timer = setInterval(() => {
                this.setTime();
            }, 1000 * this.interval);
        },
        beforeDestroy () {
            if (this.timer) clearInterval(this.timer);
        }
    };
</script>