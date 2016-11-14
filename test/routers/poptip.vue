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
    .tip{
        width: 24px;
        position: fixed;
        top: 10px;
        right: 10px;
    }
    .tip-inner{
        width: 24px;
        height: 24px;
        line-height: 22px;
        text-align: center;
        background: #fff;
        border: 1px solid #3399ff;
        color: #3399ff;
        border-radius: 50%;
        cursor: pointer;
    }
    .tip-content{
        width: 200px;
        height: 100px;
        white-space: normal;
    }
</style>
<template>
    <Tooltip content="这里是提示文字">
        当鼠标经过这段文字时，会显示一个气泡框
    </Tooltip>
    <div class="tooltip_out">
        <!--<Tooltip placement="top" content="Tooltip 文字提示">-->
            <!--<strong>-->
                <!--<a>Link</a>-->
            <!--</strong>-->
        <!--</Tooltip>-->
        <!--<Poptip trigger="hover" title="提示标题" content="提示内容">-->
            <!--<i-button>hover 激活</i-button>-->
        <!--</Poptip>-->
        <!--<Poptip content="提示内容" title="tip">-->
            <!--<i-button>click 激活</i-button>-->
        <!--</Poptip>-->
        <!--<Poptip content="提示内容">-->
            <!--<div slot="title"><i>自定义标题</i></div>-->
            <!--<i-button>click 激活</i-button>-->
        <!--</Poptip>-->
        <!--<Tooltip class="tip" placement="left-start" trigger="hover">-->
            <!--<div class="tip-inner">-->
                <!--<Icon type="information"></Icon>-->
            <!--</div>-->
            <!--<div class="tip-content" slot="content">-->
                <!--<p>iView 最新版本为 0.9.7，该版本对很多组件 UI 进行了调整</p>-->
            <!--</div>-->
        <!--</Tooltip>-->
        <!--<Poptip>-->
            <!--<a>click 激活</a>-->
            <!--<div slot="title"><i>自定义标题</i></div>-->
            <!--<div slot="content">-->
                <!--<a>关闭提示框</a>-->
            <!--</div>-->
        <!--</Poptip>-->
        <!--<Poptip placement="right" width="300">-->
            <!--<i-button type="ghost">click 激活</i-button>-->
            <!--<div class="api" slot="content">-->
                <!--<table>-->
                    <!--<thead>-->
                    <!--<tr>-->
                        <!--<th>属性</th>-->
                        <!--<th>说明</th>-->
                        <!--<th>类型</th>-->
                        <!--<th>默认值</th>-->
                    <!--</tr>-->
                    <!--</thead>-->
                    <!--<tbody>-->
                    <!--<tr>-->
                        <!--<td>content</td>-->
                        <!--<td>显示的内容</td>-->
                        <!--<td>String | Number</td>-->
                        <!--<td>空</td>-->
                    <!--</tr>-->
                    <!--<tr>-->
                        <!--<td>placement</td>-->
                        <!--<td>提示框出现的位置，可选值为<code>top</code><code>top-start</code><code>top-end</code><code>bottom</code><code>bottom-start</code><code>bottom-end</code><code>left</code><code>left-start</code><code>left-end</code><code>right</code><code>right-start</code><code>right-end</code></td>-->
                        <!--<td>String</td>-->
                        <!--<td>bottom</td>-->
                    <!--</tr>-->
                    <!--<tr>-->
                        <!--<td>disabled</td>-->
                        <!--<td>是否禁用提示框</td>-->
                        <!--<td>Boolean</td>-->
                        <!--<td>false</td>-->
                    <!--</tr>-->
                    <!--<tr>-->
                        <!--<td>delay</td>-->
                        <!--<td>延迟显示，单位毫秒</td>-->
                        <!--<td>Number</td>-->
                        <!--<td>0</td>-->
                    <!--</tr>-->
                    <!--</tbody>-->
                <!--</table>-->
            <!--</div>-->
        <!--</Poptip>-->
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
        <!--<Poptip>-->
            <!--<a>click 激活</a>-->
            <!--<div slot="content">-->
                <!--<a>关闭提示框</a>-->
            <!--</div>-->
        <!--</Poptip>-->
    </div>
</template>
<script>
    import { Tooltip, iButton, Row, iCol, Poptip, iSelect, iOption, Message, Icon } from 'iview';

    export default {
        components: { Tooltip, iButton, Row, iCol, Poptip, iSelect, iOption, Message, Icon },
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
