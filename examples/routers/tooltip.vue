<template>
    <div>
        <Tooltip always placement="top" transfer content="Tooltip 文字提示" :delay="1000">
            <Button @click="disabled = true">延时1秒显示</Button>
        </Tooltip>
        <Tooltip placement="top" transfer content="Tooltip 文字提示">
            <Button @click="disabled = true">延时1秒显示</Button>
        </Tooltip>
    </div>
</template>
<script>
    export default {

    }
</script>
