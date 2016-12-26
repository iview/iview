<template>
    <div :class="classes">
        <div :class="[prefixCls+ '-wrapper']">
            <ul :class="[prefixCls + '-list']">
                <li v-for="item in hoursList"></li>
            </ul>
        </div>
        <div :class="[prefixCls+ '-wrapper']">
            <li v-for="item in minutesList"></li>
        </div>
        <div :class="[prefixCls+ '-wrapper']" v-show="showSeconds">
            <li v-for="item in secondsList"></li>
        </div>
    </div>
</template>
<script>
    const prefixCls = 'ivu-time-picker-cells';

    export default {
        props: {
            hours: {
                type: Number,
                default: 0
            },
            minutes: {
                type: Number,
                default: 0
            },
            seconds: {
                type: Number,
                default: 0
            },
            showSeconds: {
                type: Boolean,
                default: true
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
                    {
                        [`${prefixCls}-with-seconds`]: this.showSeconds
                    }
                ];
            },
            hoursList () {
                return [];
            },
            minutesList () {
                return [];
            },
            secondsList () {
                return [];
            }
        },
        methods: {

        }
    };
</script>