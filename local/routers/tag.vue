<template>
    <Tag>标签一</Tag>
    <Tag>标签二</Tag>
    <Tag closable>标签三</Tag>
    <Tag closable color="blue">标签一</Tag>
    <Tag closable color="green">标签二</Tag>
    <Tag closable color="red">标签三</Tag>
    <Tag color="red">标签三</Tag>
    <Tag closable color="yellow">标签四</Tag>
</template>
<script>
    import { Tag } from 'iview';
    export default {
        components: {
            Tag
        },
        props: {
        
        },
        data () {
            return {
            
            }
        },
        computed: {
        
        },
        methods: {
        
        }
    }
</script>