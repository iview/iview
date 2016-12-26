<template>
    <div :class="[prefixCls + '-body-wrapper']">
        <div :class="[prefixCls + '-body']">
            <div :class="[prefixCls + '-content']">
                <time-spinner
                    :show-seconds="showSeconds"
                    :hours="hours"
                    :minutes="minutes"
                    :seconds="seconds"
                    @on-change="handleChange"
                    @on-pick-click="handlePickClick"></time-spinner>
            </div>
            <Confirm
                @on-pick-clear="handlePickClear"
                @on-pick-success="handlePickSuccess"></Confirm>
        </div>
    </div>
</template>
<script>
    import TimeSpinner from '../base/time-spinner.vue';
    import Confirm from '../base/confirm.vue';

    import Mixin from './mixin';

    const prefixCls = 'ivu-picker-panel';
    const timePrefixCls = 'ivu-time-picker';

    export default {
        mixins: [Mixin],
        components: { TimeSpinner, Confirm },
        data () {
            return {
                prefixCls: prefixCls,
                timePrefixCls: timePrefixCls,
                format: 'HH:mm:ss',
                date: new Date(),
                value: '',
                hours: 0,
                minutes: 0,
                seconds: 0
            };
        },
        computed: {
            showSeconds () {
                return (this.format || '').indexOf('ss') !== -1;
            }
        },
        watch: {
            value (newVal) {
                if (!newVal) return;
                newVal = new Date(newVal);
                if (!isNaN(newVal)) {
                    this.handleChange({
                        hours: date.getHours(),
                        minutes: date.getMinutes(),
                        seconds: date.getSeconds()
                    });
                    this.$nextTick(_ => this.scrollTop());
                }
            }
        },
        methods: {
            handleChange (date) {
                if (date.hours !== undefined) {
                    this.date.setHours(date.hours);
                    this.hours = this.date.getHours();
                }
                if (date.minutes !== undefined) {
                    this.date.setMinutes(date.minutes);
                    this.minutes = this.date.getMinutes();
                }
                if (date.seconds !== undefined) {
                    this.date.setSeconds(date.seconds);
                    this.seconds = this.date.getSeconds();
                }
            },
            scrollTop () {

            }
        }
    };
</script>