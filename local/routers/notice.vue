<template>
    <Tooltip content="Top Left 提示文字" placement="top" disabled>
        <Button>上面的左面</Button>
        <div slot="content">
            <p>附近的是否会可接受的</p>
            <p>飞机史蒂夫</p>
        </div>
    </Tooltip>
    <Tooltip content="Top Left 提示文字" placement="bottom">
        仅仅是一段文字而已，this的回复看就是风刀霜剑
    </Tooltip>
    <Tooltip content="Top Left 提示文字" placement="left" delay="1000">
        <Button>上面的左面</Button>
    </Tooltip>
    <Tooltip content="Top Left 提示文字" placement="right">
        <Button>上面的左面</Button>
    </Tooltip>
    <Tooltip content="Top Left 提示文字" placement="top-start">
        <Button>上面的左面</Button>
    </Tooltip>
    <Tooltip content="Top Left 提示文字" placement="top-end">
        <Button>上面的左面</Button>
    </Tooltip>
    <Tooltip content="Top Left 提示文字" placement="bottom-start">
        <Button>上面的左面</Button>
    </Tooltip>
    <Tooltip content="Top Left 提示文字" placement="bottom-end">
        <Button>上面的左面</Button>
    </Tooltip>
    <Tooltip content="Top Left 提示文字" placement="left-start">
        <Button>上面的左面</Button>
    </Tooltip>
    <Tooltip content="Top Left 提示文字" placement="left-end">
        <Button>上面的左面</Button>
    </Tooltip>
    <Tooltip content="Top Left 提示文字" placement="right-start">
        <Button>上面的左面</Button>
    </Tooltip>
    <Tooltip content="Top Left 提示文字" placement="right-end">
        <Button>上面的左面</Button>
    </Tooltip>
</template>
<script>
    import { Tooltip, Button } from 'iview';

    export default {
        components: { Tooltip, Button },
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