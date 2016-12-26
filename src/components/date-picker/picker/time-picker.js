import Picker from '../picker.vue';
import TimePanel from '../panel/time.vue';
import Options from '../time-mixins';

export default {
    mixins: [Picker, Options],
    props: {
        value: {}
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