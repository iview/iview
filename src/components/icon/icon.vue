<template>
    <i :class="classes" :style="styles"></i>
</template>
<script>
    const prefixCls = 'ivu-icon';

    export default {
        name: 'Icon',
        props: {
            type: String,
            iconCls: String,
            size: [Number, String],
            color: String
        },
        computed: {
            classes () {
                return [{
                    [`${prefixCls} ${prefixCls}-${this.type}`]: !this.iconCls,
                    [`${this.iconCls}`]: !!this.iconCls
                }];
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
