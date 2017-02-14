<template>
    <i :class="classes" :style="styles" :title="title"></i>
</template>
<script>
    const prefixCls = 'ivu-icon';

    export default {
        props: {
            type: String,
            size: [Number, String],
            color: String,
            title: String
        },
        computed: {
            classes () {
                return `${prefixCls} ${prefixCls}-${this.type}`;
            },
            styles () {
                let style = {};

                if (this.size) {
                    style['font-size'] = `${this.size}px`;
                }

                if (this.color) {
                    style.color = this.color;
                }

                return style;
            }
        }
    };
</script>
