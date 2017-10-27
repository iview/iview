<template>
    <div :class="classes" @mousedown.prevent>
        <div :class="[prefixCls + '-body']">
            <div :class="[prefixCls + '-content', prefixCls + '-content-left']">
                <div :class="[timePrefixCls + '-header']">
                    <template v-if="showDate">{{ leftDatePanelLabel }}</template>
                    <template v-else>{{ t('i.datepicker.startTime') }}</template>
                </div>
                <time-spinner
                    ref="timeSpinner"
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
                <div :class="[timePrefixCls + '-header']">
                    <template v-if="showDate">{{ rightDatePanelLabel }}</template>
                    <template v-else>{{ t('i.datepicker.endTime') }}</template>
                </div>
                <time-spinner
                    ref="timeSpinnerEnd"
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
                v-if="confirm"
                @on-pick-clear="handlePickClear"
                @on-pick-success="handlePickSuccess"></Confirm>
        </div>
    </div>
</template>
<script>
    import TimeSpinner from '../base/time-spinner.vue';
    import Confirm from '../base/confirm.vue';

    import Mixin from './mixin';
    import Locale from '../../../mixins/locale';

    import { initTimeDate, toDate, formatDate, formatDateLabels } from '../util';

    const prefixCls = 'ivu-picker-panel';
    const timePrefixCls = 'ivu-time-picker';

    export default {
        name: 'TimePicker',
        mixins: [ Mixin, Locale ],
        components: { TimeSpinner, Confirm },
        data () {
            return {
                prefixCls: prefixCls,
                timePrefixCls: timePrefixCls,
                format: 'HH:mm:ss',
                showDate: false,
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
                hideDisabledOptions: false,
                confirm: false
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
            },
            leftDatePanelLabel () {
                return this.panelLabelConfig(this.date);
            },
            rightDatePanelLabel () {
                return this.panelLabelConfig(this.dateEnd);
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
            panelLabelConfig (date) {
                const locale = this.t('i.locale');
                const datePanelLabel = this.t('i.datepicker.datePanelLabel');
                const { labels, separator } = formatDateLabels(locale, datePanelLabel, date || initTimeDate());
                return [labels[0].label, separator, labels[1].label].join('');
            },
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
                const oldDateEnd = new Date(this.dateEnd);

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
                // judge endTime > startTime?
                if (this.dateEnd < this.date) {
                    this.$nextTick(() => {
                        this.dateEnd = new Date(this.date);
                        this.hoursEnd = this.dateEnd.getHours();
                        this.minutesEnd = this.dateEnd.getMinutes();
                        this.secondsEnd = this.dateEnd.getSeconds();

                        const format = 'yyyy-MM-dd HH:mm:ss';
                        if (formatDate(oldDateEnd, format) !== formatDate(this.dateEnd, format)) {
                            if (emit) this.$emit('on-pick', [this.date, this.dateEnd], true);
                        }
                    });
                } else {
                    if (emit) this.$emit('on-pick', [this.date, this.dateEnd], true);
                }
            },
            handleStartChange (date) {
                this.handleChange(date, {});
            },
            handleEndChange (date) {
                this.handleChange({}, date);
            },
            updateScroll () {
                this.$refs.timeSpinner.updateScroll();
                this.$refs.timeSpinnerEnd.updateScroll();
            }
        },
        mounted () {
            if (this.$parent && this.$parent.$options.name === 'DatePicker') this.showDate = true;
        }
    };
</script>
