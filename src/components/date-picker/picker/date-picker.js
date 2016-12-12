import Picker from '../picker.vue';
import DatePanel from '../panel/date.vue';
import DateRangePanel from '../panel/date-range.vue';

const getPanel = function (type) {
    if (type === 'daterange' || type === 'datetimerange') {
        return DateRangePanel;
    }
    return DatePanel;
};

export default {
    mixins: [Picker],
    props: {
        type: {
            type: String,
            default: 'date'
        }
    },
    created() {
        this.panel = getPanel(this.type);
    }
}