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
            },
            dateFormat: {
                type: String,
                validator (value) {
                    return oneOf(value, ['YY-MM-DD', 'YY/MM/DD', 'DD-MM-YY', 'DD/MM/YY', 'MM-DD-YY', 'MM/DD/YY', 'MM-DD', 'MM/DD', 'DD-MM', 'DD-MM']);
                },
                default: 'YY-MM-DD'
            },
            timeFormat: {
                type: String,
                validator (value) {
                    return oneOf(value, ['HH-MM-SS', 'HH-MM', 'HH', 'MM-SS']);
                },
                default: 'HH-MM-SS'
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
                    let dateFormat = null;
                    let timeFormat = null;

                    switch (this.dateFormat) {
                        case 'YY-MM-DD':
                            dateFormat = `${year}-${month}-${day}`;
                            break;

                        case 'YY/MM/DD':
                            dateFormat = `${year}/${month}/${day}`;
                            break;

                        case 'MM-DD':
                            dateFormat = `${month}-${day}`;
                            break;

                        case 'MM/DD':
                            dateFormat = `${month}/${day}`;
                            break;

                        case 'DD-MM-YY':
                            dateFormat = `${day}-${month}-${year}`;
                            break;

                        case 'DD/MM/YY':
                            dateFormat = `${day}/${month}/${year}`;
                            break;

                        case 'DD-MM':
                            dateFormat = `${day}-${month}`;
                            break;

                        case 'DD/MM':
                            dateFormat = `${day}/${month}`;
                            break;

                        case 'MM-DD-YY':
                            dateFormat = `${month}-${day}-${year}`;
                            break;

                        case 'MM/DD/YY':
                            dateFormat = `${month}/${day}/${year}`;
                            break;

                        default:
                            dateFormat = `${year}-${month}-${day}`;
                    }

                    switch (this.timeFormat) {
                        case 'HH-MM-SS':
                            timeFormat = `${hour}:${minute}:${second}`;
                            break;

                        case 'HH-MM':
                            timeFormat = `${hour}:${minute}`;
                            break;

                        case 'MM-SS':
                            timeFormat = `${minute}:${second}`;
                            break;

                        case 'HH':
                            timeFormat = `${hour}`;
                            break;

                        default:
                            timeFormat = `${hour}:${minute}:${second}`;
                    }


                    if (this.type === 'datetime') {
                        this.date = `${dateFormat} ${timeFormat}`;
                    } else if (this.type === 'date') {
                        this.date = `${dateFormat}`;
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