<template>
     <div :class="wrapClasses"><slot></slot></div>
</template>
<script>
    const prefixCls = 'ivu-layout';

    export default {
        name: 'Layout',
        data () {
            return {
                hasSider: false
            };
        },
        computed: {
            wrapClasses () {
                return [
                    `${prefixCls}`,
                    {
                        [`${prefixCls}-has-sider`]: this.hasSider
                    }
                ];
            }
        },
        methods: {
            findSider () {
                return this.$children.some(child => {
                    return child.$options._componentTag === 'Sider'; 
                });
            }
        },
        mounted () {
            this.hasSider = this.findSider();
        }
    };
</script>