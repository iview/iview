import Picker from '../picker.vue';
import TimePickerPanel from '../panel/Time/time.vue';
import RangeTimePickerPanel from '../panel/Time/time-range.vue';
import Options from '../time-mixins';

import { findComponentsDownward, oneOf } from '../../../utils/assist';

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
    },
    computed: {
        panel(){
            const isRange =  this.type === 'timerange';
            return isRange ? 'RangeTimePickerPanel' : 'TimePickerPanel';
        },
        ownPickerProps(){
            return {
                disabledHours: this.disabledHours,
                disabledMinutes: this.disabledMinutes,
                disabledSeconds: this.disabledSeconds,
                hideDisabledOptions: this.hideDisabledOptions
            };
        }
    },
    watch: {
        visible(visible){
            if (visible) {
                this.$nextTick(() => {
                    const spinners = findComponentsDownward(this, 'TimeSpinner');
                    spinners.forEach(instance => instance.updateScroll());
                });
            }
        }
    }
};
