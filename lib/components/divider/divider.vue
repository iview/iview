<template>
    <div :class="classes">
        <span v-if="hasSlot" :class="slotClasses">
            <slot></slot>
        </span>
    </div>
</template>

<script>
    import {oneOf} from '../../utils/assist';

    const prefixCls = 'ivu-divider';

    export default {
        name: 'Divider',
        props: {
            type: {
                type: String,
                default: 'horizontal',
                validator (value) {
                    return oneOf(value, ['horizontal', 'vertical']);
                }
            },
            orientation: {
                type: String,
                default: 'center',
                validator (value) {
                    return oneOf(value, ['left', 'right', 'center']);
                }
            },
            dashed: {
                type: Boolean,
                default: false,
            }
        },
        computed: {
            hasSlot() {
                return !!this.$slots.default;
            },
            classes() {
                return [
                    `${prefixCls}`,
                    `${prefixCls}-${this.type}`,
                    {
                        [`${prefixCls}-with-text`]: this.hasSlot && this.orientation === 'center',
                        [`${prefixCls}-with-text-${this.orientation}`]: this.hasSlot,
                        [`${prefixCls}-dashed`]: !!this.dashed
                    }
                ];
            },
            slotClasses() {
                return [
                    `${prefixCls}-inner-text`,
                ];
            }
        }
    };
</script>