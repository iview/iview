<template>
    <div :class="[prefixCls + '-body-wrapper']" @mousedown.prevent>
        <div :class="[prefixCls + '-body']">
            <div :class="[timePrefixCls + '-header']" v-if="showDate">{{ visibleDate }}</div>
            <div :class="[prefixCls + '-content']">
                <time-spinner
                    ref="timeSpinner"
                    :show-seconds="showSeconds"
                    :steps="steps"
                    :hours="value[0] && date.getHours()"
                    :minutes="value[0] && date.getMinutes()"
                    :seconds="value[0] && date.getSeconds()"
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
    import TimeSpinner from '../../base/time-spinner.vue';
    import Confirm from '../../base/confirm.vue';
    import Options from '../../time-mixins';


    import Mixin from '../panel-mixin';
    import Locale from '../../../../mixins/locale';

    import { initTimeDate } from '../../util';

    const prefixCls = 'ivu-picker-panel';
    const timePrefixCls = 'ivu-time-picker';

    const capitalize = (str) => str[0].toUpperCase() + str.slice(1);

    export default {
        name: 'TimePickerPanel',
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

                if (emit) this.$emit('on-pick', newDate, true);
            },
        },
        mounted () {
            if (this.$parent && this.$parent.$options.name === 'DatePicker') this.showDate = true;
        }
    };
</script>
