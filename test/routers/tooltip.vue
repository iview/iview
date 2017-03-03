<template>
    <Tooltip placement="top" content="Tooltip 文字提示" :delay="1000">
        <Button @click="disabled = true">延时1秒显示</Button>
    </Tooltip>
</template>
<script>
    export default {

    }
</script>
