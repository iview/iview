<template>
    <div
        :class="[prefixCls + '-alpha']"
        tabindex="0"
        @click="$el.focus()"
        @keydown.esc="handleEscape"
        @keydown.left="handleLeft"
        @keydown.right="handleRight"
        @keydown.up="handleUp"
        @keydown.down="handleDown"
    >
        <div :class="[prefixCls + '-alpha-checkboard-wrap']">
            <div :class="[prefixCls + '-alpha-checkerboard']"></div>
        </div>
        <div
            :style="gradientStyle"
            :class="[prefixCls + '-alpha-gradient']"></div>
        <div
            ref="container"
            :class="[prefixCls + '-alpha-container']"
            @mousedown="handleMouseDown"
            @touchmove="handleChange"
            @touchstart="handleChange">
            <div
                :style="{top: 0, left: `${value.a * 100}%`}"
                :class="[prefixCls + '-alpha-pointer']">
                <div :class="[prefixCls + '-alpha-picker']"></div>
            </div>
        </div>
    </div>
</template>

<script>
import HSAMixin from './hsaMixin';
import Prefixes from './prefixMixin';
import {clamp, toRGBAString} from './utils';

export default {
    name: 'Alpha',

    mixins: [HSAMixin, Prefixes],

    data() {
        const normalStep = 1;
        const jumpStep = 10;

        return {
            left: -normalStep,
            right: normalStep,
            up: jumpStep,
            down: -jumpStep,
            powerKey: 'shiftKey',
        };
    },

    computed: {
        gradientStyle() {
            const {r, g, b} = this.value.rgba;
            const start = toRGBAString({r, g, b, a: 0});
            const finish = toRGBAString({r, g, b, a: 1});

            return {background: `linear-gradient(to right, ${start} 0%, ${finish} 100%)`};
        },
    },

    methods: {
        change(newAlpha) {
            const {h, s, l} = this.value.hsl;
            const {a} = this.value;

            if (a !== newAlpha) {
                this.$emit('change', {h, s, l, a: newAlpha, source: 'rgba'});
            }
        },
        handleSlide(e, direction) {
            e.preventDefault();
            e.stopPropagation();

            this.change(clamp(e[this.powerKey] ? direction : Math.round(this.value.hsl.a * 100 + direction) / 100, 0, 1));
        },
        handleChange(e) {
            e.preventDefault();
            e.stopPropagation();

            const left = this.getLeft(e);

            if (left < 0) {
                this.change(0);
                return;
            }

            const {clientWidth} = this.$refs.container;

            if (left > clientWidth) {
                this.change(1);
                return;
            }

            this.change(Math.round(left * 100 / clientWidth) / 100);
        },
    },
};
</script>
