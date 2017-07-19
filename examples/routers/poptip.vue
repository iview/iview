<template>
    <div>
        <Poptip trigger="hover" title="提示标题" content="提示内容">
            <Button>hover 激活</Button>
        </Poptip>
        <Poptip title="提示标题" content="提示内容">
            <Button>click 激活</Button>
        </Poptip>
        <Poptip trigger="focus" title="提示标题" content="提示内容">
            <Button>focus 激活</Button>
        </Poptip>
        <Poptip trigger="focus" title="提示标题" content="提示内容">
            <i-input placeholder="输入框的 focus"></i-input>
        </Poptip>
    </div>
</template>
<script>
    export default {

    }
</script>
