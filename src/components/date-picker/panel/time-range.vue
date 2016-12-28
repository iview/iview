<template>
    <div :class="classes">
        <div :class="[prefixCls + '-body']">
            <div :class="[prefixCls + '-content', prefixCls + '-content-left']">
                <div :class="[timePrefixCls + '-header']">开始时间</div>
                <time-spinner
                    :show-seconds="showSeconds"
                    :hours="hours"
                    :minutes="minutes"
                    :seconds="seconds"
                    :disabled-hours="disabledHours"
                    :disabled-minutes="disabledMinutes"
                    :disabled-seconds="disabledSeconds"
                    :hide-disabled-options="hideDisabledOptions"
                    @on-change="handleStartChange"
                    @on-pick-click="handlePickClick"></time-spinner>
            </div>
            <div :class="[prefixCls + '-content', prefixCls + '-content-right']">
                <div :class="[timePrefixCls + '-header']">结束时间</div>
                <time-spinner
                    :show-seconds="showSeconds"
                    :hours="hoursEnd"
                    :minutes="minutesEnd"
                    :seconds="secondsEnd"
                    :disabled-hours="disabledHours"
                    :disabled-minutes="disabledMinutes"
                    :disabled-seconds="disabledSeconds"
                    :hide-disabled-options="hideDisabledOptions"
                    @on-change="handleEndChange"
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

    import { initTimeDate, toDate } from '../util';

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
                date: initTimeDate(),
                dateEnd: initTimeDate(),
                value: '',
                hours: '',
                minutes: '',
                seconds: '',
                hoursEnd: '',
                minutesEnd: '',
                secondsEnd: '',
                disabledHours: [],
                disabledMinutes: [],
                disabledSeconds: [],
                hideDisabledOptions: false
            };
        },
        computed: {
            classes () {
                return [
                    `${prefixCls}-body-wrapper`,
                    `${timePrefixCls}-with-range`,
                    {
                        [`${timePrefixCls}-with-seconds`]: this.showSeconds
                    }
                ];
            },
            showSeconds () {
                return (this.format || '').indexOf('ss') !== -1;
            }
        },
        watch: {
            value (newVal) {
                if (!newVal) return;
                if (Array.isArray(newVal)) {
                    const valStart = newVal[0] ? toDate(newVal[0]) : false;
                    const valEnd = newVal[1] ? toDate(newVal[1]) : false;

                    if (valStart && valEnd) {
                        this.handleChange(
                            {
                                hours: valStart.getHours(),
                                minutes: valStart.getMinutes(),
                                seconds: valStart.getSeconds()
                            },
                            {
                                hours: valEnd.getHours(),
                                minutes: valEnd.getMinutes(),
                                seconds: valEnd.getSeconds()
                            },
                            false
                        );
                    }
                }
            }
        },
        methods: {
            handleClear() {
                this.date = initTimeDate();
                this.dateEnd = initTimeDate();
                this.hours = '';
                this.minutes = '';
                this.seconds = '';
                this.hoursEnd = '';
                this.minutesEnd = '';
                this.secondsEnd = '';
            },
            handleChange (date, dateEnd, emit = true) {
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
                if (dateEnd.hours !== undefined) {
                    this.dateEnd.setHours(dateEnd.hours);
                    this.hoursEnd = this.dateEnd.getHours();
                }
                if (dateEnd.minutes !== undefined) {
                    this.dateEnd.setMinutes(dateEnd.minutes);
                    this.minutesEnd = this.dateEnd.getMinutes();
                }
                if (dateEnd.seconds !== undefined) {
                    this.dateEnd.setSeconds(dateEnd.seconds);
                    this.secondsEnd = this.dateEnd.getSeconds();
                }
                if (emit) this.$emit('on-pick', [this.date, this.dateEnd], true);
            },
            handleStartChange (date) {
                this.handleChange(date, {});
            },
            handleEndChange (date) {
                this.handleChange({}, date);
            }
        }
    };
</script>