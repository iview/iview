<template>
    <div :class="[prefixCls + '-body-wrapper']" @mousedown.prevent>
        <div :class="[prefixCls + '-body']">
            <div :class="[timePrefixCls + '-header']" v-if="showDate">{{ visibleDate }}</div>
            <div :class="[prefixCls + '-content']">
                <time-spinner
                    ref="timeSpinner"
                    :show-seconds="showSeconds"
                    :steps="steps"
                    :hours="hours"
                    :minutes="minutes"
                    :seconds="seconds"
                    :disabled-hours="disabledHours"
                    :disabled-minutes="disabledMinutes"
                    :disabled-seconds="disabledSeconds"
                    :hide-disabled-options="hideDisabledOptions"
                    @on-change="handleChange"
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

    import { initTimeDate } from '../util';

    const prefixCls = 'ivu-picker-panel';
    const timePrefixCls = 'ivu-time-picker';

    export default {
        name: 'TimePicker',
        mixins: [ Mixin, Locale ],
        components: { TimeSpinner, Confirm },
        props: {
            steps: {
                type: Array,
                default: () => []
            }
        },
        data () {
            return {
                prefixCls: prefixCls,
                timePrefixCls: timePrefixCls,
                date: initTimeDate(),
                value: '',
                showDate: false,
                format: 'HH:mm:ss',
                hours: '',
                minutes: '',
                seconds: '',
                disabledHours: [],
                disabledMinutes: [],
                disabledSeconds: [],
                hideDisabledOptions: false,
                confirm: false
            };
        },
        computed: {
            showSeconds () {
                return (this.format || '').indexOf('ss') !== -1;
            },
            visibleDate () {
                const date = this.date;
                const month = date.getMonth() + 1;
                const tYear = this.t('i.datepicker.year');
                const tMonth = this.t(`i.datepicker.month${month}`);
                return `${date.getFullYear()}${tYear} ${tMonth}`;
            }
        },
        watch: {
            value (newVal) {
                if (!newVal) return;
                newVal = new Date(newVal);
                if (!isNaN(newVal)) {
                    this.date = newVal;
                    this.handleChange({
                        hours: newVal.getHours(),
                        minutes: newVal.getMinutes(),
                        seconds: newVal.getSeconds()
                    }, false);
                }
            }
        },
        methods: {
            handleClear() {
                this.date = initTimeDate();
                this.hours = '';
                this.minutes = '';
                this.seconds = '';
            },
            handleChange (date, emit = true) {
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
                if (emit) this.$emit('on-pick', this.date, true);
            },
            updateScroll () {
                this.$refs.timeSpinner.updateScroll();
            }
        },
        mounted () {
            if (this.$parent && this.$parent.$options.name === 'DatePicker') this.showDate = true;
        }
    };
</script>
