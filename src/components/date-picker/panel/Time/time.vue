<template>
    <div :class="[prefixCls + '-body-wrapper']" @mousedown.prevent>
        <div :class="[prefixCls + '-body']">
            <div :class="[timePrefixCls + '-header']" v-if="showDate">{{ visibleDate }}</div>
            <div :class="[prefixCls + '-content']">
                <time-spinner
                    ref="timeSpinner"
                    :show-seconds="showSeconds"
                    :steps="steps"
                    :hours="timeSlots[0]"
                    :minutes="timeSlots[1]"
                    :seconds="timeSlots[2]"
                    :disabled-hours="disabledHMS.disabledHours"
                    :disabled-minutes="disabledHMS.disabledMinutes"
                    :disabled-seconds="disabledHMS.disabledSeconds"
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
    import TimeSpinner from '../../base/time-spinner.vue';
    import Confirm from '../../base/confirm.vue';
    import Options from '../../time-mixins';


    import Mixin from '../panel-mixin';
    import Locale from '../../../../mixins/locale';

    import { initTimeDate } from '../../util';

    const prefixCls = 'ivu-picker-panel';
    const timePrefixCls = 'ivu-time-picker';

    const capitalize = (str) => str[0].toUpperCase() + str.slice(1);
    const mergeDateHMS = (date, hours, minutes, seconds) => {
        const newDate = new Date(date.getTime());
        newDate.setHours(hours);
        newDate.setMinutes(minutes);
        newDate.setSeconds(seconds);
        return newDate;
    };
    const unique = (el, i, arr) => arr.indexOf(el) === i;
    const returnFalse = () => false;

    export default {
        name: 'TimePickerPanel',
        mixins: [ Mixin, Locale, Options ],
        components: { TimeSpinner, Confirm },
        props: {
            disabledDate: {
                type: Function,
                default: returnFalse
            },
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
            return {
                prefixCls: prefixCls,
                timePrefixCls: timePrefixCls,
                date: this.value[0] || initTimeDate(),
                showDate: false
            };
        },
        computed: {
            showSeconds () {
                return !(this.format || '').match(/mm$/);
            },
            visibleDate () { // TODO
                const date = this.date;
                const month = date.getMonth() + 1;
                const tYear = this.t('i.datepicker.year');
                const tMonth = this.t(`i.datepicker.month${month}`);
                return `${date.getFullYear()}${tYear} ${tMonth}`;
            },
            timeSlots(){
                if (!this.value[0]) return [];
                return ['getHours', 'getMinutes', 'getSeconds'].map(slot => this.date[slot]());
            },
            disabledHMS(){
                const disabledTypes = ['disabledHours', 'disabledMinutes', 'disabledSeconds'];
                if (this.disabledDate === returnFalse || !this.value[0]) {
                    const disabled = disabledTypes.reduce(
                        (obj, type) => (obj[type] = this[type], obj), {}
                    );
                    return disabled;
                } else {
                    const slots = [24, 60, 60];
                    const disabled = ['Hours', 'Minutes', 'Seconds'].map(type => this[`disabled${type}`]);
                    const disabledHMS = disabled.map((preDisabled, j) => {
                        const slot = slots[j];
                        const toDisable = preDisabled;
                        for (let i = 0; i < slot; i+= (this.steps[j] || 1)){
                            const hms = this.timeSlots.map((slot, x) => x === j ? i : slot);
                            const testDateTime = mergeDateHMS(this.date, ...hms);
                            if (this.disabledDate(testDateTime, true)) toDisable.push(i);
                        }
                        return toDisable.filter(unique);
                    });
                    return disabledTypes.reduce(
                        (obj, type, i) => (obj[type] = disabledHMS[i], obj), {}
                    );
                }
            }
        },
        watch: {
            value (dates) {
                let newVal = dates[0] || initTimeDate();
                newVal = new Date(newVal);
                this.date = newVal;
            }
        },
        methods: {
            handleChange (date, emit = true) {

                const newDate = new Date(this.date);
                Object.keys(date).forEach(
                    type => newDate[`set${capitalize(type)}`](date[type])
                );

                if (emit) this.$emit('on-pick', newDate, 'time');
            },
        },
        mounted () {
            if (this.$parent && this.$parent.$options.name === 'DatePicker') this.showDate = true;
        }
    };
</script>
