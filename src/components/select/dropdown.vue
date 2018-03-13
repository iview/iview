<template>
    <div
        :class="dropdownClasses"
        :style="styles"
    >
        <slot></slot>
    </div>
</template>

<script>
    import Vue from 'vue';
    import Popper from 'popper.js';
    import Emitter from '@/mixins/emitter';
    import SELECT_NAME from './selectName';
    import DROPDOWN_NAME from './dropdownName';
    import PREFIXCLS from './prefixCls';
    import {getPlacement} from './utils';
    import {
        BODY,
        BOTTOM,
        CENTER,
        DROPDOWN,
        START,
        WIDTH,
    } from '@/utils/constants';
    import {getStyle} from '@/utils/assist';
    import defaultToOneOf from 'caboodle-x/defaultToOneOf';
    import defineValidatorProperties from 'caboodle-x/defineValidatorProperties';
    import isObjectType from 'caboodle-x/isObjectType';
    import isStringType from 'caboodle-x/isStringType';
    import kebabJoin from 'caboodle-x/kebabJoin';
    import parseDecimal from 'caboodle-x/parseDecimal';
    import {
        EVENT_ON_DESTROY_POPPER,
        EVENT_ON_DESTROYED_POPPER,
        EVENT_ON_UPDATE_POPPER,
        EVENT_ON_UPDATED_POPPER,
    } from '@/utils/eventNames';
    import {
        PLACEMENT_LIST,
    } from '@/utils/enums';

    const isServer = Vue.prototype.$isServer;
    const prefixCls = kebabJoin(PREFIXCLS, DROPDOWN);

    export default {
        name: DROPDOWN_NAME,

        mixins: [Emitter],

        props: {
            className: {
                default: undefined,
                type: String,
                validate: isStringType,
            },
            placement: {
                default: undefined,
                type: String,
                validate: isStringType,
            },
        },

        data(){
            return defineValidatorProperties({}, {
                popper: {
                    validator: isObjectType,
                    value: null,
                },
                width: {
                    validator: Number.isSafeInteger,
                    value: 0,
                },
            });
        },

        computed: {
            dropdownClasses(){
                return [
                    prefixCls,
                    {
                        [this.className]: !!this.className && this.className.trim(),
                    },
                ];
            },

            styles(){
                if (this.width) {
                    return {
                        width: `${this.width}px`,
                    };
                }

                return {};
            },
        },

        created(){
            this.$on(EVENT_ON_UPDATE_POPPER, this.update);
            this.$on(EVENT_ON_DESTROY_POPPER, this.destroy);
        },

        beforeDestroy(){
            this.destroyPopper();
        },

        methods: {
            destroy(){
                if (isServer) {
                    this.onDestroyed();
                } else if (this.popper) {
                    this.resetTransformOrigin(this.popper);
                    this.destroyPopper();
                }
            },

            destroyPopper(){
                this.onDestroyed(this.popper && this.popper.destroy());
                this.popper = null;
            },

            onDestroyed(state){
                this.dispatch(SELECT_NAME, EVENT_ON_DESTROYED_POPPER, !!state);
            },

            onUpdated(state){
                this.dispatch(SELECT_NAME, EVENT_ON_UPDATED_POPPER, !!state);
            },

            resetTransformOrigin({_popper}){
                const placement = _popper.getAttribute('x-placement').split('-').shift();

                _popper.style.transformOrigin = `${CENTER} ${getPlacement(placement)}`;
            },

            update(){
                if (isServer) {
                    this.onUpdated();
                } else {
                    if (this.popper) {
                        this.popper.update();
                        this.onUpdated(true);
                    } else {
                        const placement = defaultToOneOf(this.placement, PLACEMENT_LIST, BOTTOM);

                        this.popper = new Popper(this.$parent.$refs.reference, this.$el, {
                            boundariesElement: BODY,
                            boundariesPadding: 0,
                            forceAbsolute: true,
                            gpuAcceleration: false,
                            onCreate(data){
                                return this.resetTransformOrigin(data);
                            },
                            placement: kebabJoin(placement, START),
                        });

                        this.onUpdated(true);
                    }

                    // set a height for parent is Modal and Select's width is 100%
                    const {
                        $el,
                        $options,
                    } = this.$parent;

                    if ($options.name === SELECT_NAME) {
                        const width = getStyle($el, WIDTH);

                        this.width = parseDecimal(width);
                    }
                }
            },
        },
    };
</script>
