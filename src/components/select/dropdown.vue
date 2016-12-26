<template>
    <div class="ivu-select-dropdown"><slot></slot></div>
</template>
<script>
    import Popper from 'popper.js';

    export default {
        props: {
            placement: {
                type: String,
                default: 'bottom-start'
            }
        },
        data () {
            return {
                popper: null
            };
        },
        methods: {
            update () {
                if (this.popper) {
                    this.$nextTick(() => {
                        this.popper.update();
                    });
                } else {
                    this.$nextTick(() => {
                        this.popper = new Popper(this.$parent.$els.reference, this.$el, {
                            gpuAcceleration: false,
                            placement: this.placement,
                            boundariesPadding: 0,
                            forceAbsolute: true,
                            boundariesElement: 'body'
                        });
                        this.popper.onCreate(popper => {
                            this.resetTransformOrigin(popper);
                        });
                    });
                }
            },
            destroy () {
                if (this.popper) {
                    this.resetTransformOrigin(this.popper);
                    setTimeout(() => {
                        this.popper.destroy();
                        this.popper = null;
                    }, 300);
                }
            },
            resetTransformOrigin(popper) {
                let placementMap = {top: 'bottom', bottom: 'top'};
                let placement = popper._popper.getAttribute('x-placement').split('-')[0];
                let origin = placementMap[placement];
                popper._popper.style.transformOrigin = `center ${ origin }`;
            }
        },
        ready () {
            this.$on('on-update-popper', this.update);
            this.$on('on-destroy-popper', this.destroy);
        },
        beforeDestroy () {
            if (this.popper) {
                this.popper.destroy();
            }
        }
    };
</script>
