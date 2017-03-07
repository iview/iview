<template>
    <div :class="[prefixCls + '-confirm']">
        <span :class="timeClasses" v-if="showTime" @click="handleToggleTime">
            <template v-if="isTime">{{ t('i.datepicker.selectDate') }}</template>
            <template v-else>{{ t('i.datepicker.selectTime') }}</template>
        </span>
        <i-button size="small" type="text" @click.native="handleClear">{{ t('i.datepicker.clear') }}</i-button>
        <i-button size="small" type="primary" @click.native="handleSuccess">{{ t('i.datepicker.ok') }}</i-button>
    </div>
</template>
<script>
    import iButton from '../../button/button.vue';
    import Locale from '../../../mixins/locale';

    const prefixCls = 'ivu-picker';

    export default {
        mixins: [ Locale ],
        components: { iButton },
        props: {
            showTime: false,
            isTime: false,
            timeDisabled: false
        },
        data () {
            return {
                prefixCls: prefixCls
            };
        },
        computed: {
            timeClasses () {
                return {
                    [`${prefixCls}-confirm-time-disabled`]: this.timeDisabled
                };
            }
        },
        methods: {
            handleClear () {
                this.$emit('on-pick-clear');
            },
            handleSuccess () {
                this.$emit('on-pick-success');
            },
            handleToggleTime () {
                if (this.timeDisabled) return;
                this.$emit('on-pick-toggle-time');
            }
        }
    };
</script>
