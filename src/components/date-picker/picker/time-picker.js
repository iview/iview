import Picker from '../picker.vue';
import TimePanel from '../panel/time.vue';
import TimeRangePanel from '../panel/time-range.vue';
import Options from '../time-mixins';

const getPanel = function (type) {
    if (type === 'timerange') {
        return TimeRangePanel;
    }
    return TimePanel;
};

import { oneOf } from '../../../utils/assist';

export default {
    mixins: [Picker, Options],
    props: {
        type: {
            validator (value) {
                return oneOf(value, ['time', 'timerange']);
            },
            default: 'time'
        },
        value: {}
    },
    created () {
        if (!this.value) {
            if (this.type === 'timerange') {
                this.value = ['',''];
            } else {
                this.value = '';
            }
        }
        this.panel = getPanel(this.type);
    }
};