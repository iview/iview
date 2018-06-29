import { oneOf } from '../utils/assist';

export default {
    props: {
        to: {
            type: [Object, String]
        },
        replace: {
            type: Boolean,
            default: false
        },
        target: {
            type: String,
            validator (value) {
                return oneOf(value, ['_blank', '_self', '_parent', '_top']);
            },
            default: '_self'
        }
    },
    computed: {
        linkUrl () {
            const type = typeof this.to;
            return type === 'string' ? this.to : null;
        }
    },
    methods: {
        handleClick () {
            const isRoute = this.$router;
            let href = this.to || this.href;
            if (isRoute) {
                this.replace ? this.$router.replace(href) : this.$router.push(href);
            } else {
                window.location.href = href;
            }
        },
        handleCheckClick (event) {
            if (this.to || this.href) {
                if (this.target === '_blank') {
                    return false;
                } else {
                    event.preventDefault();
                    this.handleClick();
                }
            }
        }
    }
};
