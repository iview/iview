<style>
    .tooltip_out{
        padding: 150px;
    }
    body{
        height: 1000px;
        padding: 10px;
    }
    .api table{
        font-family: Consolas,Menlo,Courier,monospace;
        font-size: 13px;
        border-collapse: collapse;
        border-spacing: 0;
        empty-cells: show;
        border: 1px solid #e9e9e9;
        width: 100%;
        margin-bottom: 24px;
    }
    .api table th{
        background: #f7f7f7;
        white-space: nowrap;
        color: #5c6b77;
        font-weight: 600;
    }
    .api table td, .api table th{
        border: 1px solid #e9e9e9;
        padding: 8px 16px;
        text-align: left;
    }
</style>
<template>
    <div class="tooltip_out">
        <Poptip>
            <a>click 激活</a>
            <div slot="title"><i>自定义标题</i></div>
            <div slot="content">
                <a>关闭提示框</a>
            </div>
        </Poptip>
        <Poptip placement="right" width="300">
            <i-button type="ghost">click 激活</i-button>
            <div class="api" slot="content">
                <table>
                    <thead>
                    <tr>
                        <th>属性</th>
                        <th>说明</th>
                        <th>类型</th>
                        <th>默认值</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>content</td>
                        <td>显示的内容</td>
                        <td>String | Number</td>
                        <td>空</td>
                    </tr>
                    <tr>
                        <td>placement</td>
                        <td>提示框出现的位置，可选值为<code>top</code><code>top-start</code><code>top-end</code><code>bottom</code><code>bottom-start</code><code>bottom-end</code><code>left</code><code>left-start</code><code>left-end</code><code>right</code><code>right-start</code><code>right-end</code></td>
                        <td>String</td>
                        <td>bottom</td>
                    </tr>
                    <tr>
                        <td>disabled</td>
                        <td>是否禁用提示框</td>
                        <td>Boolean</td>
                        <td>false</td>
                    </tr>
                    <tr>
                        <td>delay</td>
                        <td>延迟显示，单位毫秒</td>
                        <td>Number</td>
                        <td>0</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </Poptip>
        <!--<Poptip title="标题" content="内容">-->
            <!--<Button>click 触发</Button>-->
        <!--</Poptip>-->
        <!--<Poptip title="标题" content="内容" trigger="hover">-->
            <!--<Button>hover 触发</Button>-->
        <!--</Poptip>-->
        <Poptip title="确定删除这条信息吗？" confirm content="内容" trigger="focus" @on-ok="ok" @on-cancel="cancel">
            <a><strong>Delete</strong></a>
        </Poptip>
        <!--<Poptip title="标题" content="内容" trigger="focus">-->
            <!--<input type="text">-->
        <!--</Poptip>-->
        <!--<Poptip title="标题" content="内容" trigger="focus">-->
            <!--<Button>focus 触发</Button>-->
        <!--</Poptip>-->
        <!--<Tooltip content="这里是提示文字">-->
            <!--当鼠标经过这段文字时，会显示一个气泡框-->
        <!--</Tooltip>-->
        <Poptip>
            <a>click 激活</a>
            <div slot="content">
                <a>关闭提示框</a>
            </div>
        </Poptip>
    </div>
</template>
<script>
    import { Tooltip, Button, Row, iCol, Poptip, iSelect, iOption, Message } from 'iview';

    export default {
        components: { Tooltip, iButton: Button, Row, iCol, Poptip, iSelect, iOption, Message },
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
