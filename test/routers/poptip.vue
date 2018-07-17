<template>
    <div style="margin: 100px">
        <Poptip trigger="hover" placement="bottom" title="提示标题" content="提示内容">
            <i-button>hover 激活</i-button>
        </Poptip>
        <Poptip title="提示标题" placement="bottom" content="提示内容">
            <i-button>click 激活</i-button>
        </Poptip>
        <Poptip trigger="focus" title="提示标题" content="提示内容">
            <i-input type="textarea"></i-input>
            <!--<i-button>focus 激活</i-button>-->
        </Poptip>
        <Poptip trigger="focus" placement="bottom" title="提示标题" content="提示内容">
            <i-input></i-input>
        </Poptip>
    </div>
</template>
<script>
    export default {

    }
</script>
