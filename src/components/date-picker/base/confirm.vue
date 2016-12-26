<template>
    <div :class="[prefixCls + '-confirm']">
        <i-button size="small" type="text" @click="handleClear">清空</i-button>
        <i-button size="small" type="primary" @click="handleSuccess">确定</i-button>
    </div>
</template>
<script>
    import iButton from '../../button/button.vue';

    const prefixCls = 'ivu-picker';

    export default {
        components: { iButton },
        data () {
            return {
                prefixCls: prefixCls
            };
        },
        methods: {
            handleClear () {
                this.$emit('on-pick-clear');
            },
            handleSuccess () {
                this.$emit('on-pick-success');
            }
        }
    };
</script>
