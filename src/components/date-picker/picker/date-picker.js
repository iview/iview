import Vue from 'vue';
import Picker from '../picker.vue';
import DatePanel from '../panel/date.vue';
import DateRangePanel from '../panel/date-range.vue';
import MonthRangePanel from '../panel/month-range.vue';
import WeekPanel from '../panel/week.vue';
import WeekRangePanel from '../panel/week-range.vue';

const getPanel = function (type) {
    if (type === 'daterange' || type === 'datetimerange') {
        return DateRangePanel;
    }else if(type === 'monthrange'){
        return MonthRangePanel;
    }else if(type ==='weekrange'){
        return WeekRangePanel;
    }else if(type === 'week'){
        return WeekPanel;
    }
    return DatePanel;
};

import { oneOf } from '../../../utils/assist';

export default {
    mixins: [Picker],
    props: {
        type: {
            validator (value) {
                return oneOf(value, ['year', 'month', 'date', 'daterange', 'datetime', 'datetimerange', 'monthrange', 'week', 'weekrange']);
            },
            default: 'date'
        },
        value: {}
    },
    created () {

        if (!this.currentValue) {
            if (this.type === 'daterange' || this.type === 'datetimerange' || this.type === 'monthrange' || this.type === 'weekrange') {
                this.currentValue = ['',''];
            } else {
                this.currentValue = '';
            }
        }
        const panel = getPanel(this.type);
        this.Panel = new Vue(panel);
    }
};
