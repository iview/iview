<template>
    <div style="margin: 100px">
        <AutoComplete
                v-model="value4"
                icon="ios-search"
                placeholder="input here"
                placement="bottom-start"
                style="width:300px">
            <div class="demo-auto-complete-item" v-for="item in data4">
                <div class="demo-auto-complete-group">
                    <span>{{ item.title }}</span>
                    <a href="https://www.google.com/search?q=iView" target="_blank">更多</a>
                </div>
                <Option v-for="option in item.children" :value="option.title" :key="option.title">
                    <span class="demo-auto-complete-title">{{ option.title }}</span>
                    <span class="demo-auto-complete-count">{{ option.count }} 人关注</span>
                </Option>
            </div>
            <a href="https://www.google.com/search?q=iView" target="_blank" class="demo-auto-complete-more">查看所有结果</a>
        </AutoComplete>
<!--        <Select v-model="model1" style="width:200px">-->
<!--            <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>-->
<!--        </Select>-->
    </div>
</template>
<script>
    export default {
        data () {
            return {
                value4: '',
                data4: [
                    {
                        title: '话题',
                        children: [
                            {
                                title: 'iView',
                                count: 10000,

                            },
                            {
                                title: 'iView UI',
                                count: 10600,

                            }
                        ]
                    },
                    {
                        title: '问题',
                        children: [
                            {
                                title: 'iView UI 有多好',
                                count: 60100,

                            },
                            {
                                title: 'iView 是啥',
                                count: 30010,

                            }
                        ]
                    },
                    {
                        title: '文章',
                        children: [
                            {
                                title: 'iView 是一个设计语言',
                                count: 100000,

                            }
                        ]
                    }
                ],
                cityList: [
                    {
                        value: 'New York',
                        label: 'New York'
                    },
                    {
                        value: 'London',
                        label: 'London'
                    },
                    {
                        value: 'Sydney',
                        label: 'Sydney'
                    },
                    {
                        value: 'Ottawa',
                        label: 'Ottawa'
                    },
                    {
                        value: 'Paris',
                        label: 'Paris'
                    },
                    {
                        value: 'Canberra',
                        label: 'Canberra'
                    }
                ],
                model1: ''
            }
        }
    }
</script>
<style>
    .demo-auto-complete-item{
        padding: 4px 0;
        border-bottom: 1px solid #F6F6F6;
    }
    .demo-auto-complete-group{
        font-size: 12px;
        padding: 4px 6px;
    }
    .demo-auto-complete-group span{
        color: #666;
        font-weight: bold;
    }
    .demo-auto-complete-group a{
        float: right;
    }
    .demo-auto-complete-count{
        float: right;
        color: #999;
    }
    .demo-auto-complete-more{
        display: block;
        margin: 0 auto;
        padding: 4px;
        text-align: center;
        font-size: 12px;
    }
</style>
