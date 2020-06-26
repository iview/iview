<template>
    <div :class="[classes + '-wrapper']">
        <div :class="[classes + '-action']">
            <Icon type="ios-arrow-back" :class="[classes + '-action-arrow']" @click.native="prev" />
            <span :class="[classes + '-action-title']">{{selectYear}}年{{zeroFill(selectMonth)}}月</span>
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
                    <td :class="[classes + '-content-col']" v-for="(child, dindex) in getRenderDays(item)" :key="dindex">
                        <span 
                            :class="[classes + '-content-num', selectYear === nowYear && nowMonth === selectMonth && child.day === nowDate ? prefixCls+'-content-num-current' : '']"
                            @click="handlerClick(child)"
                            v-if="child.type === 'now'">
                            {{zeroFill(child.day)}}
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
        format: {
            type: String,
            validator (value) {
                return oneOf(value, ['-', '/']);
            },
            default: '-'
        }
    },
    data(){
        return {
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
    methods: {
        getRenderDays (index) {
            const prevIndex = (index-1)*7;
            const nextIndex = index*7
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
            this.days = getCalendarList(this.selectMonth, this.selectYear);
        },
        zeroFill (num) {
            return num < 10 ? '0'+num : num;
        },
        handlerClick (item) {
            const {selectYear, selectMonth, format} = this;
            const zeroFillMonth = this.zeroFill(selectMonth);
            const zeroFillDay = this.zeroFill(item.day);
            const time = selectYear + format + zeroFillMonth + format + zeroFillDay;
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
    },
    created () {
        this.days = getCalendarList(this.nowMonth, this.nowYear);
    }
}
</script>