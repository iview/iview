<style>
    .tooltip_out{
        padding: 150px;
    }
    body{
        height: 1000px;
        padding: 10px;
    }
</style>
<template>
    <div class="tooltip_out">
        <!--<Poptip title="标题" content="内容">-->
            <!--<Button>click 触发</Button>-->
        <!--</Poptip>-->
        <!--<Poptip title="标题" content="内容" trigger="hover">-->
            <!--<Button>hover 触发</Button>-->
        <!--</Poptip>-->
        <Poptip title="确定删除这条信息吗？" content="内容" trigger="focus" @on-ok="ok" @on-cancel="cancel" ok-text="yes" cancel-text="no" width="200">
            <a>Delete</a>
        </Poptip>
        <Poptip title="标题" content="内容" trigger="focus">
            <input type="text">
        </Poptip>
        <!--<Poptip title="标题" content="内容" trigger="focus">-->
            <!--<Button>focus 触发</Button>-->
        <!--</Poptip>-->
        <Tooltip content="这里是提示文字">
            当鼠标经过这段文字时，会显示一个气泡框
        </Tooltip>
    </div>
</template>
<script>
    import { Tooltip, Button, Row, iCol, Poptip, iSelect, iOption, Message } from 'iview';

    export default {
        components: { Tooltip, Button, Row, iCol, Poptip, iSelect, iOption, Message },
        props: {
        
        },
        data () {
            return {

            }
        },
        computed: {
        
        },
        methods: {
            ok () {
                Message.info('ok');
            },
            cancel () {
                Message.info('cancel');
            }
        }
    }
</script>