
import {clearHours} from '../util';

export default {
    props: {
        tableDate: {
            type: Date,
            required: true
        },
        disabledDate: {
            type: Function
        },
        selectionMode: {
            type: String,
            required: true
        },
        value: {
            type: Array,
            required: true
        },
        rangeState: {
            type: Object,
            default: () => ({
                from: null,
                to: null,
                selecting: false
            })
        },

    },
    computed: {
        dates(){
            const {selectionMode, value, rangeState} = this;
            const rangeSelecting = selectionMode === 'range' && rangeState.selecting;
            return rangeSelecting ? [rangeState.from] : value;
        },
    },
    methods: {
        handleClick (cell) {
            if (cell.disabled || cell.type === 'weekLabel') return;
            const newDate = new Date(clearHours(cell.date));

            this.$emit('on-pick', newDate);
            this.$emit('on-pick-click');
        },
        handleMouseMove (cell) {
            if (!this.rangeState.selecting) return;
            if (cell.disabled) return;
            const newDate = cell.date;
            this.$emit('on-change-range', newDate);
        },
    }
};
