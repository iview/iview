<style>
    .demo-row{
        margin-bottom: 5px;
        background-image: -webkit-linear-gradient(0deg, #F5F5F5 4.16666667%, transparent 4.16666667%, transparent 8.33333333%, #F5F5F5 8.33333333%, #F5F5F5 12.5%, transparent 12.5%, transparent 16.66666667%, #F5F5F5 16.66666667%, #F5F5F5 20.83333333%, transparent 20.83333333%, transparent 25%, #F5F5F5 25%, #F5F5F5 29.16666667%, transparent 29.16666667%, transparent 33.33333333%, #F5F5F5 33.33333333%, #F5F5F5 37.5%, transparent 37.5%, transparent 41.66666667%, #F5F5F5 41.66666667%, #F5F5F5 45.83333333%, transparent 45.83333333%, transparent 50%, #F5F5F5 50%, #F5F5F5 54.16666667%, transparent 54.16666667%, transparent 58.33333333%, #F5F5F5 58.33333333%, #F5F5F5 62.5%, transparent 62.5%, transparent 66.66666667%, #F5F5F5 66.66666667%, #F5F5F5 70.83333333%, transparent 70.83333333%, transparent 75%, #F5F5F5 75%, #F5F5F5 79.16666667%, transparent 79.16666667%, transparent 83.33333333%, #F5F5F5 83.33333333%, #F5F5F5 87.5%, transparent 87.5%, transparent 91.66666667%, #F5F5F5 91.66666667%, #F5F5F5 95.83333333%, transparent 95.83333333%);
        background-image: linear-gradient(90deg, #F5F5F5 4.16666667%, transparent 4.16666667%, transparent 8.33333333%, #F5F5F5 8.33333333%, #F5F5F5 12.5%, transparent 12.5%, transparent 16.66666667%, #F5F5F5 16.66666667%, #F5F5F5 20.83333333%, transparent 20.83333333%, transparent 25%, #F5F5F5 25%, #F5F5F5 29.16666667%, transparent 29.16666667%, transparent 33.33333333%, #F5F5F5 33.33333333%, #F5F5F5 37.5%, transparent 37.5%, transparent 41.66666667%, #F5F5F5 41.66666667%, #F5F5F5 45.83333333%, transparent 45.83333333%, transparent 50%, #F5F5F5 50%, #F5F5F5 54.16666667%, transparent 54.16666667%, transparent 58.33333333%, #F5F5F5 58.33333333%, #F5F5F5 62.5%, transparent 62.5%, transparent 66.66666667%, #F5F5F5 66.66666667%, #F5F5F5 70.83333333%, transparent 70.83333333%, transparent 75%, #F5F5F5 75%, #F5F5F5 79.16666667%, transparent 79.16666667%, transparent 83.33333333%, #F5F5F5 83.33333333%, #F5F5F5 87.5%, transparent 87.5%, transparent 91.66666667%, #F5F5F5 91.66666667%, #F5F5F5 95.83333333%, transparent 95.83333333%);
    }
    .demo-col{
        color: #fff;
        padding: 30px 0;
        text-align: center;
        font-size: 18px;
        background: rgba(0, 153, 229, .7);
    }
    .demo-col.light{
        background: rgba(0, 153, 229, .5);
    }
    .demo-row.light .demo-col{
        background: rgba(0, 153, 229, .5);
    }
    .demo-row.light .demo-col.light{
        background: rgba(0, 153, 229, .3);
    }

    .example-demo .ivu-col, .example-demo .ivu-col div{
        color: #fff;
        padding: 10px 0;
        text-align: center;
        background: rgba(0, 153, 229, .9);
    }
    .example-demo .gutter .ivu-col{
        background: transparent !important;
    }
    .example-demo  .ivu-col:nth-child(odd), .example-demo  .ivu-col:nth-child(odd) div{
        background: rgba(0, 153, 229, .7);
    }

    .code-row-bg{
        background: rgba(0,0,0,.05);
    }
</style>
<template>
    <div class="example-demo">
        <Row>
            <Col span="12">col-12</Col>
            <Col span="12">col-12</Col>
        </Row>
        <br>
        <Row>
            <Col span="8">col-8</Col>
            <Col span="8">col-8</Col>
            <Col span="8">col-8</Col>
        </Row>
        <br>
        <Row>
            <Col span="6">col-6</Col>
            <Col span="6">col-6</Col>
            <Col span="6">col-6</Col>
            <Col span="6">col-6</Col>
        </Row>
        <Divider></Divider>
        <Row :gutter="16">
            <Col span="6">
                <div>col-6</div>
            </Col>
            <Col span="6">
                <div>col-6</div>
            </Col>
            <Col span="6">
                <div>col-6</div>
            </Col>
            <Col span="6">
                <div>col-6</div>
            </Col>
        </Row>
        <Divider></Divider>
        <Row type="flex">
            <Col span="6" order="4">1 | order-4</Col>
            <Col span="6" order="3">2 | order-3</Col>
            <Col span="6" order="2">3 | order-2</Col>
            <Col span="6" order="1">4 | order-1</Col>
        </Row>
        <Divider></Divider>
        <Row>
            <Col span="18" push="6">col-18 | push-6</Col>
            <Col span="6" pull="18">col-6 | pull-18</Col>
        </Row>
        <Divider></Divider>
        <Row>
            <Col span="8">col-8</Col>
            <Col span="8" offset="8">col-8 | offset-8</Col>
        </Row>
        <br>
        <Row>
            <Col span="6" offset="8">col-6 | offset-8</Col>
            <Col span="6" offset="4">col-6 | offset-4</Col>
        </Row>
        <br>
        <Row>
            <Col span="12" offset="8">col-12 | offset-8</Col>
        </Row>
        <Divider></Divider>
        <p>子元素向左排列</p>
        <Row type="flex" justify="start" class="code-row-bg">
            <Col span="4">col-4</Col>
            <Col span="4">col-4</Col>
            <Col span="4">col-4</Col>
            <Col span="4">col-4</Col>
        </Row>
        <p>子元素向右排列</p>
        <Row type="flex" justify="end" class="code-row-bg">
            <Col span="4">col-4</Col>
            <Col span="4">col-4</Col>
            <Col span="4">col-4</Col>
            <Col span="4">col-4</Col>
        </Row>
        <p>子元素居中排列</p>
        <Row type="flex" justify="center" class="code-row-bg">
            <Col span="4">col-4</Col>
            <Col span="4">col-4</Col>
            <Col span="4">col-4</Col>
            <Col span="4">col-4</Col>
        </Row>
        <p>子元素等宽排列</p>
        <Row type="flex" justify="space-between" class="code-row-bg">
            <Col span="4">col-4</Col>
            <Col span="4">col-4</Col>
            <Col span="4">col-4</Col>
            <Col span="4">col-4</Col>
        </Row>
        <p>子元素分散排列</p>
        <Row type="flex" justify="space-around" class="code-row-bg">
            <Col span="4">col-4</Col>
            <Col span="4">col-4</Col>
            <Col span="4">col-4</Col>
            <Col span="4">col-4</Col>
        </Row>
        <Divider></Divider>
        <p>顶部对齐</p>
        <Row type="flex" justify="center" align="top" class="code-row-bg">
            <Col span="4"><p style="height: 80px">col-4</p></Col>
            <Col span="4"><p style="height: 30px">col-4</p></Col>
            <Col span="4"><p style="height: 100px">col-4</p></Col>
            <Col span="4"><p style="height: 60px">col-4</p></Col>
        </Row>
        <p>底部对齐</p>
        <Row type="flex" justify="center" align="bottom" class="code-row-bg">
            <Col span="4"><p style="height: 80px">col-4</p></Col>
            <Col span="4"><p style="height: 30px">col-4</p></Col>
            <Col span="4"><p style="height: 100px">col-4</p></Col>
            <Col span="4"><p style="height: 60px">col-4</p></Col>
        </Row>
        <p>居中对齐</p>
        <Row type="flex" justify="center" align="middle" class="code-row-bg">
            <Col span="4"><p style="height: 80px">col-4</p></Col>
            <Col span="4"><p style="height: 30px">col-4</p></Col>
            <Col span="4"><p style="height: 100px">col-4</p></Col>
            <Col span="4"><p style="height: 60px">col-4</p></Col>
        </Row>
        <Divider></Divider>
        <Row>
            <Col :xs="2" :sm="4" :md="6" :lg="8">Col</Col>
            <Col :xs="20" :sm="16" :md="12" :lg="8">Col</Col>
            <Col :xs="2" :sm="4" :md="6" :lg="8">Col</Col>
        </Row>
        <Divider></Divider>
        <Row>
            <Col :xs="{ span: 5, offset: 1 }" :lg="{ span: 6, offset: 2 }">Col</Col>
            <Col :xs="{ span: 11, offset: 1 }" :lg="{ span: 6, offset: 2 }">Col</Col>
            <Col :xs="{ span: 5, offset: 1 }" :lg="{ span: 6, offset: 2 }">Col</Col>
        </Row>
        <Divider>Flex 填充</Divider>
        <Row>
            <Col :flex="2">2 / 5</Col>
            <Col :flex="3">3 / 5</Col>
        </Row>
        <Row>
            <Col flex="100px">100px</Col>
            <Col flex="auto">Fill Rest</Col>
        </Row>
        <Row>
            <Col flex="1 1 200px">1 1 200px</Col>
            <Col flex="0 1 300px">0 1 300px</Col>
        </Row>
        <Row :wrap="false">
            <Col flex="none">
                <div style="padding: 0 16px">none</div>
            </Col>
            <Col flex="auto">auto with no-wrap</Col>
        </Row>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                n: 2
            }
        },
        methods: {
            add () {
                this.n++;
            }
        }
    }
</script>
