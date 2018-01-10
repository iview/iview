import Picker from '../picker.vue';
import TimePickerPanel from '../panel/time.vue';
import RangeTimePickerPanel from '../panel/time-range.vue';
import Options from '../time-mixins';

import { oneOf } from '../../../utils/assist';

export default {
    mixins: [Picker, Options],
    components: { TimePickerPanel, RangeTimePickerPanel },
    props: {
        type: {
            validator (value) {
                return oneOf(value, ['time', 'timerange']);
            },
            default: 'time'
        },
        value: {}
    },
    computed: {
        panel(){
            const isRange =  this.type === 'timerange';
            return isRange ? 'RangeTimePickerPanel' : 'TimePickerPanel';
        }
    },
    created () {
        if (!this.currentValue) {
            if (this.type === 'timerange') {
                this.currentValue = ['',''];
            } else {
                this.currentValue = '';
            }
        }
    }
};
