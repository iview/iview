export default {
    props: {
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
    }
};