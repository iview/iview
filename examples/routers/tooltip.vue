<template>
    <div>
        <Tooltip always placement="top" transfer :content="text" :delay="1000" theme="dark">
            <Button @click="disabled = true">延时1秒显示</Button>
        </Tooltip>
        <Tooltip placement="top" transfer :content="text">
            <Button @click="handleChange">change</Button>
        </Tooltip>
        <Button @click="handleChange">change</Button>
        <Poptip title="Title" content="content">
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
