<template>
    <div
        ref="reference"
        tabindex="0"
        @click="handleClick"
        @keydown.esc="handleEscape"
        @keydown.enter="handleEnter"
        @keydown.left="handleArrow($event, 'x', left)"
        @keydown.right="handleArrow($event, 'x', right)"
        @keydown.up="handleArrow($event, 'y', up)"
        @keydown.down="handleArrow($event, 'y', down)"
        @blur="blurColor"
        @focus="focusColor"
    >
        <template v-for="(item, index) in list">
            <div
                :key="item + ':' + index"
                :class="[prefixCls + '-picker-colors-wrapper']">
                <div :data-color-id="index">
                    <div
                        :style="{background: item}"
                        :class="[prefixCls + '-picker-colors-wrapper-color']"
                    ></div>
                    <div
                        :ref="'color-circle-' + index"
                        :class="[prefixCls + '-picker-colors-wrapper-circle', hideClass]"></div>
                </div>
            </div>
            <br v-if="lineBreak(list, index)">
        </template>
    </div>
</template>

<script>
import Emitter from '../../mixins/emitter';
import HandleEscapeMixin from './handleEscapeMixin';
import Prefixes from './prefixMixin';
import {clamp} from './utils';

export default {
    name: 'RecommendedColors',

    mixins: [Emitter, HandleEscapeMixin, Prefixes],

    props: {
        list: {
            type: Array,
            default: undefined,
        },
    },

    data() {
        const columns = 12;
        const rows = Math.ceil(this.list.length / columns);
        const normalStep = 1;

        return {
            left: -normalStep,
            right: normalStep,
            up: -normalStep,
            down: normalStep,
            powerKey: 'shiftKey',
            grid: {x: 1, y: 1},
            rows,
            columns,
        };
    },

    computed: {
        hideClass() {
            return `${this.prefixCls}-hide`;
        },
        linearIndex() {
            return this.getLinearIndex(this.grid);
        },
        currentCircle() {
            return this.$refs[`color-circle-${this.linearIndex}`][0];
        },
    },

    methods: {
        getLinearIndex(grid) {
            return this.columns * (grid.y - 1) + grid.x - 1;
        },
        getMaxLimit(axis) {
            return axis === 'x' ? this.columns : this.rows;
        },
        handleArrow(e, axis, direction) {
            e.preventDefault();
            e.stopPropagation();

            this.blurColor();

            const grid = {...this.grid};

            if (e[this.powerKey]) {
                if (direction < 0) {
                    grid[axis] = 1;
                } else {
                    grid[axis] = this.getMaxLimit(axis);
                }
            } else {
                grid[axis] += direction;
            }

            const index = this.getLinearIndex(grid);

            if (index >= 0 && index < this.list.length) {
                this.grid[axis] = clamp(grid[axis], 1, this.getMaxLimit(axis));
            }

            this.focusColor();
        },
        blurColor() {
            this.currentCircle.classList.add(this.hideClass);
        },
        focusColor() {
            this.currentCircle.classList.remove(this.hideClass);
        },
        handleEnter(e) {
            this.handleClick(e, this.currentCircle);
        },
        handleClick(e, circle) {
            e.preventDefault();
            e.stopPropagation();

            this.$refs.reference.focus();

            const target = circle || e.target;
            const colorId = target.dataset.colorId || target.parentElement.dataset.colorId;

            if (colorId) {
                this.blurColor();
                const id = Number(colorId) + 1;
                this.grid.x = id % this.columns || this.columns;
                this.grid.y = Math.ceil(id / this.columns);
                this.focusColor();
                this.$emit('picker-color', this.list[colorId]);
                this.$emit('change', {hex: this.list[colorId], source: 'hex'});
            }
        },
        lineBreak(list, index) {
            if (!index) {
                return false;
            }

            const nextIndex = index + 1;

            return nextIndex < list.length && nextIndex % this.columns === 0;
        },
    },
};
</script>
