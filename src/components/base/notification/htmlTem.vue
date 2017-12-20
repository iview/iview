<template>
    <span v-if="desc">
        <div v-html="desc" v-if="type === 'notice'"></div>
        <span v-html="desc" v-if="type === 'message'"></span>
    </span>
</template>

<script>
export default {
    name: 'htmlTem',
    props: {
        desc: String,
        type: String
    }
};
</script>
