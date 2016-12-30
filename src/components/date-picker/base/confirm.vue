<template>
    <div :class="[prefixCls + '-confirm']">
        <span v-if="showTime" @click="handleToggleTime">
            <template v-if="isTime">选择日期</template>
            <template v-else>选择时间</template>
        </span>
        <i-button size="small" type="text" @click="handleClear">清空</i-button>
        <i-button size="small" type="primary" @click="handleSuccess">确定</i-button>
    </div>
</template>
<script>
    import iButton from '../../button/button.vue';

    const prefixCls = 'ivu-picker';

    export default {
        components: { iButton },
        props: {
            showTime: false,
            isTime: false
        },
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
            },
            handleToggleTime () {
                this.$emit('on-pick-toggle-time');
            }
        }
    };
</script>
