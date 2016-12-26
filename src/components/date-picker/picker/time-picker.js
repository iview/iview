import Picker from '../picker.vue';
import TimePanel from '../panel/time.vue';

export default {
    mixins: [Picker],
    props: {
        value: {},
        disabledHours: {
            type: Array,
            default () {
                return [];
            }
        },
        disabledMinutes: {
            type: Array,
            default () {
                return [];
            }
        },
        disabledSeconds: {
            type: Array,
            default () {
                return [];
            }
        },
        hideDisabledOptions: {
            type: Boolean,
            default: false
        }
    },
    data () {
        return {
            type: 'time'
        };
    },
    created () {
        this.panel = TimePanel;
    }
};