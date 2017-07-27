<template>
    <Panel shadow size="large">
        <Editor @on-change="onChange" :defaultContent="defaultContent"></Editor>
        <Split transparent></Split>
        <Button type="primary" @click="getContent">get html</Button>
    </Panel>

</template>
<script>
    export default {
        data () {
            return {
                defaultContent:'<br/><br/><br/><br/><p>----------</p><p>我是初始化内容</p>',
                content:''
            }
        },
        methods: {
            onChange (txt) {
                this.content = txt
            },
            getContent (){
                console.log(this.content)
            }
        }
    }
</script>
