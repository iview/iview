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
                    :steps="steps"
                    :show-seconds="showSeconds"
                    :hours="value[0] && dateStart.getHours()"
                    :minutes="value[0] && dateStart.getMinutes()"
                    :seconds="value[0] && dateStart.getSeconds()"
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
                    :steps="steps"
                    :show-seconds="showSeconds"
                    :hours="value[1] && dateEnd.getHours()"
                    :minutes="value[1] && dateEnd.getMinutes()"
                    :seconds="value[1] && dateEnd.getSeconds()"
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
    import TimeSpinner from '../../base/time-spinner.vue';
    import Confirm from '../../base/confirm.vue';
    import Options from '../../time-mixins';


    import Mixin from '../panel-mixin';
    import Locale from '../../../../mixins/locale';

    import { initTimeDate, formatDateLabels } from '../../util';

    const prefixCls = 'ivu-picker-panel';
    const timePrefixCls = 'ivu-time-picker';

    const capitalize = (str) => str[0].toUpperCase() + str.slice(1);

    export default {
        name: 'RangeTimePickerPanel',
        mixins: [ Mixin, Locale, Options ],
        components: { TimeSpinner, Confirm },
        props: {
            steps: {
                type: Array,
                default: () => []
            },
            format: {
                type: String,
                default: 'HH:mm:ss'
            },
            value: {
                type: Array,
                required: true
            },
        },
        data () {
            const [dateStart, dateEnd] = this.value.slice();
            return {
                prefixCls: prefixCls,
                timePrefixCls: timePrefixCls,
                showDate: false,
                dateStart: dateStart || initTimeDate(),
                dateEnd: dateEnd || initTimeDate()
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
                return !(this.format || '').match(/mm$/);
            },
            leftDatePanelLabel () {
                return this.panelLabelConfig(this.date);
            },
            rightDatePanelLabel () {
                return this.panelLabelConfig(this.dateEnd);
            }
        },
        watch: {
            value (dates) {
                const [dateStart, dateEnd] = dates.slice();
                this.dateStart = dateStart || initTimeDate();
                this.dateEnd = dateEnd || initTimeDate();
            }
        },
        methods: {
            panelLabelConfig (date) {
                const locale = this.t('i.locale');
                const datePanelLabel = this.t('i.datepicker.datePanelLabel');
                const { labels, separator } = formatDateLabels(locale, datePanelLabel, date || initTimeDate());
                return [labels[0].label, separator, labels[1].label].join('');
            },
            handleChange (start, end, emit = true) {

                const dateStart = new Date(this.dateStart);
                let dateEnd = new Date(this.dateEnd);

                // set dateStart
                Object.keys(start).forEach(type => {
                    dateStart[`set${capitalize(type)}`](start[type]);
                });

                // set dateEnd
                Object.keys(end).forEach(type => {
                    dateEnd[`set${capitalize(type)}`](end[type]);
                });

                // judge endTime > startTime?
                if (dateEnd < dateStart) dateEnd = dateStart;

                if (emit) this.$emit('on-pick', [dateStart, dateEnd], 'time');
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
