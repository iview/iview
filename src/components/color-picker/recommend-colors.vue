<template>
    <div>
        <template v-for="(item, index) in list">
            <span><em :style="{'background': item}"></em></span>
            <br v-if="(index + 1) % 10 === 0 && index !== 0 && (index + 1) !== list.length">
        </template>
    </div>
</template>
<script>
    export default {
        props: {
            list: Array
        },
        data () {
            return {

            };
        },
        methods: {

        }
    };
</script>