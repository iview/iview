<template>
    <div class="ivu-color-picker-hue">
        <div class="ivu-color-picker-hue-container" ref="container"
             @mousedown="handleMouseDown"
             @touchmove="handleChange"
             @touchstart="handleChange">
            <div class="ivu-color-picker-hue-pointer" :style="{top: 0, left: pointerLeft}">
                <div class="ivu-color-picker-hue-picker"></div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'Hue',
        props: {
            value: Object
        },
        data () {
            return {
                oldHue: 0,
                pullDirection: ''
            };
        },
        computed: {
            colors () {
                const h = this.value.hsl.h;
                if (h !== 0 && h - this.oldHue > 0) this.pullDirection = 'right';
                if (h !== 0 && h - this.oldHue < 0) this.pullDirection = 'left';
                this.oldHue = h;

                return this.value;
            },
            pointerLeft () {
                if (this.colors.hsl.h === 0 && this.pullDirection === 'right') return '100%';
                return (this.colors.hsl.h * 100) / 360 + '%';
            }
        },
        methods: {
            handleChange (e, skip) {
                !skip && e.preventDefault();

                const container = this.$refs.container;
                const containerWidth = container.clientWidth;

                const xOffset = container.getBoundingClientRect().left + window.pageXOffset;
                const pageX = e.pageX || (e.touches ? e.touches[0].pageX : 0);
                const left = pageX - xOffset;

                let h;
                let percent;

                if (left < 0) {
                    h = 0;
                } else if (left > containerWidth) {
                    h = 360;
                } else {
                    percent = left * 100 / containerWidth;
                    h = (360 * percent / 100);
                }

                if (this.colors.hsl.h !== h) {
                    this.$emit('change', {
                        h: h,
                        s: this.colors.hsl.s,
                        l: this.colors.hsl.l,
                        a: this.colors.hsl.a,
                        source: 'hsl'
                    });
                }
            },
            handleMouseDown (e) {
                this.handleChange(e, true);
                window.addEventListener('mousemove', this.handleChange);
                window.addEventListener('mouseup', this.handleMouseUp);
            },
            handleMouseUp () {
                this.unbindEventListeners();
            },
            unbindEventListeners () {
                window.removeEventListener('mousemove', this.handleChange);
                window.removeEventListener('mouseup', this.handleMouseUp);
            }
        }
    };
</script>