<template>
    <div>
        <template v-for="(item, index) in list">
            <span @click="handleClick(index)"><em :style="{'background': item}"></em></span>
            <br v-if="(index + 1) % 12 === 0 && index !== 0 && (index + 1) !== list.length">
        </template>
    </div>
</template>
<script>
    export default {
        props: {
            list: Array
        },
        methods: {
            handleClick (index) {
                this.$emit('picker-color', this.list[index]);
            }
        }
    };
</script>