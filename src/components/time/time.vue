<template>
    <span :class="classes" @click="handleClick">{{ date }}</span>
</template>
<script>
    import Vue from 'vue';
    const isServer = Vue.prototype.$isServer;
    import { oneOf } from '../../utils/assist';
    import Locale from '../../mixins/locale';
    import Time from './time';

    const prefixCls = 'ivu-time';

    export default {
        name: 'Time',
        mixins: [Locale],
        props: {
            time: {
                type: [Number, Date, String],
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
                const type = typeof this.time;
                let time;

                if (type === 'number') {
                    const timestamp = this.time.toString().length > 10 ? this.time : this.time * 1000;
                    time = (new Date(timestamp)).getTime();
                } else if (type === 'object') {
                    time = this.time.getTime();
                } else if (type === 'string') {
                    time = (new Date(this.time)).getTime();
                }

                if (this.type === 'relative') {
                    this.date = Time(time, this.t);
                } else {
                    const date = new Date(this.time);
                    const year = date.getFullYear();
                    const month = (date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1);
                    const day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
                    const hour = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
                    const minute = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
                    const second = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();

                    if (this.type === 'datetime') {
                        this.date = `${year}-${month}-${day} ${hour}:${minute}:${second}`;
                    } else if (this.type === 'date') {
                        this.date = `${year}-${month}-${day}`;
                    }
                }
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