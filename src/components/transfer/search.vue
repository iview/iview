<template>
    <div :class="prefixCls">
        <i-input
            v-model="currentQuery"
            size="small"
            :icon="icon"
            :placeholder="placeholder"
            @on-click="handleClick"></i-input>
    </div>
</template>
<script>
    import iInput from '../input/input.vue';

    export default {
        name: 'Search',
        components: { iInput },
        props: {
            prefixCls: String,
            placeholder: String,
            query: String
        },
        data () {
            return {
                currentQuery: this.query
            };
        },
        watch: {
            query (val) {
                this.currentQuery = val;
            },
            currentQuery (val) {
                this.$emit('on-query-change', val);
            }
        },
        computed: {
            icon () {
                return this.query === '' ? 'ios-search' : 'ios-close';
            }
        },
        methods: {
            handleClick () {
                if (this.currentQuery === '') return;
                this.currentQuery = '';
                this.$emit('on-query-clear');
            }
        }
    };
</script>
