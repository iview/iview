
import { oneOf } from '../../../../utils/assist';
import {initTimeDate } from '../../util';


export default {
    props: {
        confirm: {
            type: Boolean,
            default: false
        },
        showTime: {
            type: Boolean,
            default: false
        },
        format: {
            type: String,
            default: 'yyyy-MM-dd'
        },
        selectionMode: {
            type: String,
            validator (value) {
                return oneOf(value, ['year', 'month', 'date', 'time']);
            },
            default: 'date'
        },
        shortcuts: {
            type: Array,
            default: () => []
        },
        disabledDate: {
            type: Function,
            default: () => false
        },
        value: {
            type: Array,
            default: () => [initTimeDate(), initTimeDate()]
        },
        showWeekNumbers: {
            type: Boolean,
            default: false
        },
        startDate: {
            type: Date
        }
    },
    computed: {
        isTime(){
            return this.currentView === 'time';
        }
    },
    methods: {
        handleToggleTime(){
            this.currentView = this.currentView === 'time' ? this.selectionMode : 'time';
        },
    }
};
