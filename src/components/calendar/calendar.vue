<template>
    <div :class="[classes + '-wrapper']">
        <div :class="[classes + '-action']">
            <Icon type="ios-arrow-back" :class="[classes + '-action-arrow']" @click.native="prev" />
            <DatePicker 
                type="month"
                :value="datePickerTime"
                transfer
                placement="bottom" 
                @on-change="handlerPickerClick" 
                @on-clickoutside="handlerPickerClose"
                :open="datePickerVisible">
                <span :class="[classes + '-action-title']" @click="choosePickerDate">
                    {{selectYear}}{{t('i.datepicker.year')}}{{zeroFill(selectMonth)}}{{t('i.datepicker.month')}}
                </span>
            </DatePicker>
            <Icon type="ios-arrow-forward" :class="[classes + '-action-arrow']"  @click.native="next" />
        </div>
        <table :class="classes">
            <thead>
                <tr :class="[classes + '-header']">
                    <th :class="[classes + '-header-col']" v-for="(item, index) in headerDays" :key="index">{{item}}</th>
                </tr>
            </thead>
            <tbody :class="[classes + '-content']">
                <tr v-for="item in trDays" :key="item">
                    <td 
                        v-for="(child, dindex) in getRenderDays(item)"
                        :class="[classes + '-content-col', child.disabled ? classes + '-content-col-disabled' : '' ]" 
                        :key="dindex">
                        <span 
                            @click="handlerClick(child)"
                            :class="[classes + '-content-num',child.selected ? classes + '-content-num-selected' : '']"
                            v-if="child.type === 'now'">
                            {{zeroFill(child.day)}}
                            <i :class="[selectYear === nowYear && nowMonth === selectMonth && child.day === nowDate ? prefixCls+'-content-num-current' : '']"></i>
                        </span>
                        <div :class="[classes + '-slot-item']" v-if=" child.type === 'now' ">
                            <slot :date="selectYear + format  + zeroFill(selectMonth) + format + zeroFill(child.day)"></slot>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
import Locale from '../../mixins/locale';
import { oneOf } from '../../utils/assist';
import { getCalendarList, getNowTime} from './date-format';
const nowTime = getNowTime();
const prefixCls = 'ivu-calendar';
export default {
    name: 'Calendar',
    mixins: [ Locale ],
    props: {
        value: {
            type: String,
            default: ''
        },
        format: {
            type: String,
            validator (value) {
                return oneOf(value, ['-', '/']);
            },
            default: '-'
        },
        disabledDate: {
            type: Function
        }
    },
    data(){
        return {
            // datePicker status
            datePickerVisible: false,
            datePickerTime: '',
            prefixCls: prefixCls,
            days: [],
            nowYear: nowTime.year,
            nowMonth: nowTime.month,
            nowDate: nowTime.day,
            selectYear: nowTime.year,
            selectMonth: nowTime.month,
        }
    },
    computed: {
        classes () {
            return [
                `${prefixCls}`
            ];
        },
        headerDays () {
            const translatedDays = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'].map(item => {
                return this.t('i.datepicker.weeks.' + item);
            });
            return translatedDays;
        },
        trDays () {
            const days = this.days;
            return days ? Math.ceil(days.length/7) : 0;
        }
    },
    watch: {
        value: {
            handler () {
                const val = this.value;
                if (val) {
                    this.updateDefaultSelectTime();
                }
                this.updatePickerSelectTime();
            },
            immediate: true
        }
    },
    methods: {
        updateDefaultSelectTime () {
            const { value, format } = this;
            const splitTime = value.split(format);
            const year = splitTime[0];
            const month = splitTime[1];
            if (year) {
                this.selectYear = parseInt(year);
            }
            if (month) {
                this.selectMonth = parseInt(month);
            }
        },
        updatePickerSelectTime () {
            const { selectYear, selectMonth } = this;
            this.DatePickerTime = selectYear + '-' + selectMonth;
            this.updateDays();
        },
        handlerPickerClick (value) {
            const times = value.split('-');
            const year = times[0];
            const month = times[1];
            this.selectYear = year;
            this.selectMonth = parseInt(month);
            this.updateDays();
            this.handlerPickerClose();
        },
        choosePickerDate () {
            this.datePickerVisible = !this.datePickerVisible;
        },
        handlerPickerClose () {
            this.datePickerVisible = false;
        },
        getRenderDays (index) {
            const prevIndex = (index-1)*7;
            const nextIndex = index*7;
            const { selectYear, selectMonth, format } = this;
            const joinYearMonth = selectYear + format + this.zeroFill(selectMonth);
            this.days.forEach(item => {
                let hasDisabledDate = typeof this.disabledDate === 'function';
                let joinTotalTime = joinYearMonth + format + this.zeroFill(item.day);
                if (hasDisabledDate && this.disabledDate(joinTotalTime)) {
                    item.disabled = true;
                }
            })
            return this.days ? this.days.slice(prevIndex, nextIndex) : [];
        },
        prev () {
            if( this.selectMonth === 1 ){
                this.selectYear = this.selectYear - 1;
                this.selectMonth = 12;
            }else{
                this.selectMonth--;
            }
            this.updateDays();
        },
        updateDays () {
            const {selectYear, selectMonth, format} = this;
            const zeroFillMonth = this.zeroFill(selectMonth);
            const time = selectYear + format + zeroFillMonth;
            this.days = getCalendarList(selectMonth, selectYear);
            this.$emit('input', time);
        },
        zeroFill (num) {
            return num < 10 ? '0'+num : num;
        },
        handlerClick (item) {
            if (item.disabled){
                return false;
            }
            const {selectYear, selectMonth, format} = this;
            const zeroFillMonth = this.zeroFill(selectMonth);
            const zeroFillDay = this.zeroFill(item.day);
            const time = selectYear + format + zeroFillMonth + format + zeroFillDay;
            this.days.forEach(children => {
                children.selected = children.day === item.day
            })
            this.$emit('on-click', {
                date: time
            })
        },
        next () {
            if( this.selectMonth === 12 ){
                this.selectYear = this.selectYear + 1;
                this.selectMonth = 1;
            }else{
                this.selectMonth++;
            }
            this.updateDays();
        }
    }
}
</script>