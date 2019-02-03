<template>
    <div :style="circleSize" :class="wrapClasses">
        <svg viewBox="0 0 100 100">
            <path :d="pathString" :stroke="trailColor" :stroke-width="trailWidth" :fill-opacity="0" :style="trailStyle" />
            <path :d="pathString" :stroke-linecap="strokeLinecap" :stroke="strokeColor" :stroke-width="computedStrokeWidth" fill-opacity="0" :style="pathStyle" />
        </svg>
        <div :class="innerClasses">
            <slot></slot>
        </div>
    </div>
</template>
<script>
    import { oneOf } from '../../utils/assist';

    const prefixCls = 'ivu-chart-circle';

    export default {
        name: 'iCircle',
        props: {
            percent: {
                type: Number,
                default: 0
            },
            size: {
                type: Number,
                default: 120
            },
            strokeWidth: {
                type: Number,
                default: 6
            },
            strokeColor: {
                type: String,
                default: '#2d8cf0'
            },
            strokeLinecap: {
                validator (value) {
                    return oneOf(value, ['square', 'round']);
                },
                default: 'round'
            },
            trailWidth: {
                type: Number,
                default: 5
            },
            trailColor: {
                type: String,
                default: '#eaeef2'
            },
            dashboard: {
                type: Boolean,
                default: false
            }
        },
        computed: {
            circleSize () {
                return {
                    width: `${this.size}px`,
                    height: `${this.size}px`
                };
            },
            computedStrokeWidth () {
                return this.percent === 0 && this.dashboard ? 0 : this.strokeWidth;
            },
            radius () {
                return 50 - this.strokeWidth / 2;
            },
            pathString () {
                if (this.dashboard) {
                    return `M 50,50 m 0,${this.radius}
                    a ${this.radius},${this.radius} 0 1 1 0,-${2 * this.radius}
                    a ${this.radius},${this.radius} 0 1 1 0,${2 * this.radius}`;
                } else {
                    return `M 50,50 m 0,-${this.radius}
                    a ${this.radius},${this.radius} 0 1 1 0,${2 * this.radius}
                    a ${this.radius},${this.radius} 0 1 1 0,-${2 * this.radius}`;
                }
            },
            len () {
                return Math.PI * 2 * this.radius;
            },
            trailStyle () {
                let style = {};
                if (this.dashboard) {
                    style = {
                        'stroke-dasharray': `${this.len - 75}px ${this.len}px`,
                        'stroke-dashoffset': `-${75 / 2}px`,
                        'transition': 'stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s'
                    };
                }
                return style;
            },
            pathStyle () {
                let style = {};
                if (this.dashboard) {
                    style = {
                        'stroke-dasharray': `${(this.percent / 100) * (this.len - 75)}px ${this.len}px`,
                        'stroke-dashoffset': `-${75 / 2}px`,
                        'transition': 'stroke-dashoffset .3s ease 0s, stroke-dasharray .6s ease 0s, stroke .6s, stroke-width .06s ease .6s'
                    };
                } else {
                    style = {
                        'stroke-dasharray': `${this.len}px ${this.len}px`,
                        'stroke-dashoffset': `${((100 - this.percent) / 100 * this.len)}px`,
                        'transition': 'stroke-dashoffset 0.6s ease 0s, stroke 0.6s ease'
                    };
                }
                return style;
            },
            wrapClasses () {
                return `${prefixCls}`;
            },
            innerClasses () {
                return `${prefixCls}-inner`;
            }
        }
    };
</script>
