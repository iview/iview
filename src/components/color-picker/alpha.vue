<template>
    <div class="ivu-color-picker-alpha">
        <div class="ivu-color-picker-alpha-checkboard-wrap">
            <div class="ivu-color-picker-alpha-checkerboard"></div>
        </div>
        <div class="ivu-color-picker-alpha-gradient" :style="{background: gradientColor}"></div>
        <div class="ivu-color-picker-alpha-container" ref="container"
             @mousedown="handleMouseDown"
             @touchmove="handleChange"
             @touchstart="handleChange">
            <div class="ivu-color-picker-alpha-pointer" :style="{left: colors.a * 100 + '%'}">
                <div class="ivu-color-picker-alpha-picker"></div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'Alpha',
        props: {
            value: Object,
            onChange: Function
        },
        computed: {
            colors () {
                return this.value;
            },
            gradientColor () {
                const rgba = this.colors.rgba;
                const rgbStr = [rgba.r, rgba.g, rgba.b].join(',');
                return 'linear-gradient(to right, rgba(' + rgbStr + ', 0) 0%, rgba(' + rgbStr + ', 1) 100%)';
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

                let a;
                if (left < 0) {
                    a = 0;
                } else if (left > containerWidth) {
                    a = 1;
                } else {
                    a = Math.round(left * 100 / containerWidth) / 100;
                }

                if (this.colors.a !== a) {
                    this.$emit('change', {
                        h: this.colors.hsl.h,
                        s: this.colors.hsl.s,
                        l: this.colors.hsl.l,
                        a: a,
                        source: 'rgba'
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