<template>
    <div :class="prefixCls">
        <i-input
            :value.sync="query"
            size="small"
            :icon="icon"
            :placeholder="placeholder"
            @on-click="handleClick"></i-input>
    </div>
</template>
<script>
    import iInput from '../input/input.vue';

    export default {
        components: { iInput },
        props: {
            prefixCls: String,
            placeholder: String,
            query: String
        },
        computed: {
            icon () {
                return this.query === '' ? 'ios-search' : 'ios-close';
            }
        },
        methods: {
            handleClick () {
                if (this.query === '') return;
                this.query = '';
            }
        }
    }
</script>