<template>
    <div style="margin: 200px;">
        <Tooltip always placement="top-end" :content="text" :delay="1000" theme="light">
            <Button @click="disabled = true">延时1秒显示</Button>
        </Tooltip>
        <Tooltip always :max-width="200" content="我的文本超级无敌长我的文本超级无敌长我的文本超级无敌长我的文本超级无敌长我的文本超级无敌长我的文本超级无敌长">
            <Button @click="handleChange">change</Button>
        </Tooltip>
        <Button @click="handleChange">change</Button>
        <Poptip title="Title" padding="0" width="250" word-wrap content="我的文本超级，无敌,长我的文本超级无敌长我的文本超级无敌长我的文本超级无敌长我的文本超级无敌长我的文本超级无敌长">
            <Button>Click</Button>
        </Poptip>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                text: 'Tooltip 文字提示'
            };
        },
        methods: {
            handleChange () {
                this.text = '提示'
            }
        }
    }
</script>
