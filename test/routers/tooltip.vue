<style scoped>
    .top,.bottom{
        text-align: center;
    }
    .center{
        width: 300px;
        margin: 10px auto;
        overflow: hidden;
    }
    .center-left{
        float: left;
    }
    .center-right{
        float: right;
    }
</style>
<template>
    <div class="top">
        <Tooltip content="Top Left 文字提示" placement="top-start" @on-popper-hide="hide">
            <i-button>上左</i-button>
        </Tooltip>
        <Tooltip content="Top Center 文字提示" placement="top">
            <i-button>上边</i-button>
        </Tooltip>
        <Tooltip content="Top Right 文字提示" placement="top-end">
            <i-button>上右</i-button>
        </Tooltip>
    </div>
    <div class="center">
        <div class="center-left">
            <Tooltip content="Left Top 文字提示" placement="left-start">
                <i-button>左上</i-button>
            </Tooltip><br><br>
            <Tooltip content="Left Center 文字提示" placement="left">
                <i-button>左边</i-button>
            </Tooltip><br><br>
            <Tooltip content="Left Bottom 文字提示" placement="left-end">
                <i-button>左下</i-button>
            </Tooltip>
        </div>
        <div class="center-right">
            <Tooltip content="Right Top 文字提示" placement="right-start">
                <i-button>右上</i-button>
            </Tooltip><br><br>
            <Tooltip content="Right Center 文字提示" placement="right">
                <i-button>右边</i-button>
            </Tooltip><br><br>
            <Tooltip content="Right Bottom 文字提示" placement="right-end">
                <i-button>右下</i-button>
            </Tooltip>
        </div>
    </div>
    <div class="bottom">
        <Tooltip content="Bottom Left 文字提示" placement="bottom-start">
            <i-button>下左</i-button>
        </Tooltip>
        <Tooltip content="Bottom Center 文字提示" placement="bottom">
            <i-button>下边</i-button>
        </Tooltip>
        <Tooltip content="Bottom Right 文字提示" placement="bottom-end">
            <i-button>下右</i-button>
        </Tooltip>
    </div>
</template>
<script>
    import { Tooltip, iButton, Message } from 'iview';
    export default {
        components: { Tooltip, iButton },
        methods: {
            hide () {
                Message.info('hide')
            }
        }
    }
</script>
