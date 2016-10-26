import Popper from 'popper.js';

/**
* https://github.com/freeze-component/vue-popper
* */
export default {
    props: {
        placement: {
            type: String,
            default: 'bottom'
        },
        boundariesPadding: {
            type: Number,
            default: 5
        },
        reference: Object,
        popper: Object,
        offset: {
            default: 0
        },
        value: Boolean,
        visibleArrow: Boolean,
        transition: String,
        options: {
            type: Object,
            default () {
                return {};
            }
        }
    },
    data() {
        return {
            showPopper: false
        };
    },
    watch: {
        value: {
            immediate: true,
            handler(val) {
                this.showPopper = val;
                this.$emit('input', val);
            }
        },
        showPopper(val) {
            val ? this.updatePopper() : this.destroyPopper();
            this.$emit('input', val);
        }
    },
    methods: {
        createPopper() {
            if (!/^(top|bottom|left|right)(-start|-end)?$/g.test(this.placement)) {
                return;
            }

            const options = this.options;
            const popper = this.popper || this.$els.popper;
            const reference = this.reference || this.$els.reference;

            if (!popper || !reference) return;
            if (this.visibleArrow) {
                this.appendArrow(popper);
            }

            if (this.popperJS && this.popperJS.hasOwnProperty('destroy')) {
                this.popperJS.destroy();
            }

            options.placement = this.placement;
            options.offset = this.offset;

            this.$nextTick(() => {
                this.popperJS = new Popper(
                    reference,
                    popper,
                    options
                );
                this.popperJS.onCreate(popper => {
                    this.resetTransformOrigin(popper);
                    this.$emit('created', this);
                });
            });
        },
        updatePopper() {
            if (this.popperJS) {
                this.popperJS.update();
            } else {
                this.createPopper();
            }
        },
        doDestroy() {
            if (this.showPopper) return;
            this.popperJS.destroy();
            this.popperJS = null;
        },
        destroyPopper() {
            if (this.popperJS) {
                this.resetTransformOrigin(this.popperJS);
            }
        },
        resetTransformOrigin(popper) {
            let placementMap = {top: 'bottom', bottom: 'top', left: 'right', right: 'left'};
            let placement = popper._popper.getAttribute('x-placement').split('-')[0];
            let origin = placementMap[placement];
            popper._popper.style.transformOrigin = ['top', 'bottom'].indexOf(placement) > -1 ? `center ${ origin }` : `${ origin } center`;
        },
        appendArrow(element) {
            let hash;
            if (this.appended) {
                return;
            }

            this.appended = true;

            for (let item in element.attributes) {
                if (/^_v-/.test(element.attributes[item].name)) {
                    hash = element.attributes[item].name;
                    break;
                }
            }

            const arrow = document.createElement('div');

            if (hash) {
                arrow.setAttribute(hash, '');
            }
            arrow.setAttribute('x-arrow', '');
            arrow.className = 'popper__arrow';
            element.appendChild(arrow);
        }
    },
    beforeDestroy() {
        if (this.popperJS) {
            this.popperJS.destroy();
        }
    }
};