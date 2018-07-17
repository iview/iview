<template>
    <h4>基本</h4>
    <br><br>
    <div style="background: #f60">
        <input-number></input-number>
        <Date-picker type="date" placeholder="选择日期" style="width: 100px;display: inline-block"></Date-picker>
        <i-input style="width: 100px"></i-input>
        <i-input type="text" placeholder="Username" style="width: 100px">
            <Icon type="ios-person-outline" slot="prepend"></Icon>
        </i-input>
        <i-button type="primary">按钮</i-button>
        <i-select :model.sync="model1" style="width:200px">
            <i-option v-for="item in cityList" :value="item.value">{{ item.label }}</i-option>
        </i-select>
    </div>
    <br><br>
    <i-button type="success">按钮</i-button>
    <i-button type="warning">按钮</i-button>
    <i-button type="error">按钮</i-button>
    <i-button type="info">按钮</i-button>
    <i-button icon="ios-search" type="success"></i-button>
    <br><br>
    <div style="width:400px">
        <i-button type="error" long size="small">按钮</i-button>
    </div>
    <br><br>
    <Button-group>
        <i-button>取消</i-button>
        <i-button type="primary">确定</i-button>
    </Button-group>
    <Button-group>
        <i-button disabled>昨日</i-button>
        <i-button disabled>今日</i-button>
        <i-button disabled>明日</i-button>
    </Button-group>
    <Button-group>
        <i-button type="primary">L</i-button>
        <i-button>M</i-button>
        <i-button type="ghost">M</i-button>
        <i-button type="dashed">R</i-button>
    </Button-group>
    <br><br>
    <h4>配合图标</h4>
    <br><br>
    <Button-group>
        <i-button type="primary">
            <Icon type="chevron-left"></Icon>
            前进
        </i-button>
        <i-button type="primary">
            后退
            <Icon type="chevron-right"></Icon>
        </i-button>
    </Button-group>
    <Button-group>
        <i-button type="primary" icon="ios-skipbackward"></i-button>
        <i-button type="primary" icon="ios-skipforward"></i-button>
    </Button-group>
    <Button-group>
        <i-button type="ghost" icon="ios-color-wand-outline"></i-button>
        <i-button type="ghost" icon="ios-sunny-outline"></i-button>
        <i-button type="ghost" icon="ios-crop"></i-button>
        <i-button type="ghost" icon="ios-color-filter-outline"></i-button>
    </Button-group>
    <br><br>
    <h4>圆角</h4>
    <br><br>
    <Button-group shape="circle">
        <i-button type="primary">
            <Icon type="chevron-left"></Icon>
            前进
        </i-button>
        <i-button type="primary">
            后退
            <Icon type="chevron-right"></Icon>
        </i-button>
    </Button-group>
    <Button-group shape="circle">
        <i-button type="primary" icon="ios-skipbackward"></i-button>
        <i-button type="primary" icon="ios-skipforward"></i-button>
    </Button-group>
    <Button-group shape="circle">
        <i-button type="ghost" icon="ios-color-wand-outline"></i-button>
        <i-button type="ghost" icon="ios-sunny-outline"></i-button>
        <i-button type="ghost" icon="ios-crop"></i-button>
        <i-button type="ghost" icon="ios-color-filter-outline"></i-button>
    </Button-group>
    <Button-group shape="circle" size="large">
        <i-button type="primary" icon="ios-skipbackward"></i-button>
        <i-button type="primary" icon="ios-skipforward"></i-button>
    </Button-group>
    <Button-group shape="circle" size="large">
        <i-button type="ghost" icon="ios-color-wand-outline"></i-button>
        <i-button type="ghost" icon="ios-sunny-outline"></i-button>
        <i-button type="ghost" icon="ios-crop"></i-button>
        <i-button type="ghost" icon="ios-color-filter-outline"></i-button>
    </Button-group>
    <Button-group shape="circle" size="small">
        <i-button type="primary" icon="ios-skipbackward"></i-button>
        <i-button type="primary" icon="ios-skipforward"></i-button>
    </Button-group>
    <Button-group shape="circle" size="small">
        <i-button type="ghost" icon="ios-color-wand-outline"></i-button>
        <i-button type="ghost" icon="ios-sunny-outline"></i-button>
        <i-button type="ghost" icon="ios-crop"></i-button>
        <i-button type="ghost" icon="ios-color-filter-outline"></i-button>
    </Button-group>

    <br><br>
    <h4>Vertical</h4>
    <br><br>

    <Button-group vertical>
        <i-button>取消</i-button>
        <i-button type="primary">确定</i-button>
    </Button-group>
    <Button-group vertical>
        <i-button>取消</i-button>
        <i-button type="primary">确定</i-button>
    </Button-group>
    <Button-group vertical>
        <i-button disabled>昨日</i-button>
        <i-button disabled>今日</i-button>
        <i-button disabled>明日</i-button>
    </Button-group>
    <Button-group vertical>
        <i-button type="primary">L</i-button>
        <i-button>M</i-button>
        <i-button type="ghost">M</i-button>
        <i-button type="dashed">R</i-button>
    </Button-group>
    <Button-group vertical>
        <i-button type="primary">
            <Icon type="chevron-left"></Icon>
            前进
        </i-button>
        <i-button type="primary">
            后退
            <Icon type="chevron-right"></Icon>
        </i-button>
    </Button-group>
    <Button-group vertical>
        <i-button type="primary" icon="ios-skipbackward"></i-button>
        <i-button type="primary" icon="ios-skipforward"></i-button>
    </Button-group>
    <Button-group vertical>
        <i-button type="ghost" icon="ios-color-wand-outline"></i-button>
        <i-button type="ghost" icon="ios-sunny-outline"></i-button>
        <i-button type="ghost" icon="ios-crop"></i-button>
        <i-button type="ghost" icon="ios-color-filter-outline"></i-button>
    </Button-group>
    <Button-group vertical size="large">
        <i-button type="primary" icon="ios-skipbackward"></i-button>
        <i-button type="primary" icon="ios-skipforward"></i-button>
    </Button-group>
    <Button-group shape="circle" vertical size="large">
        <i-button type="ghost" icon="ios-color-wand-outline"></i-button>
        <i-button type="ghost" icon="ios-sunny-outline"></i-button>
        <i-button type="ghost" icon="ios-crop"></i-button>
        <i-button type="ghost" icon="ios-color-filter-outline"></i-button>
    </Button-group>
    <Button-group shape="circle" vertical size="small">
        <i-button type="primary" icon="ios-skipbackward"></i-button>
        <i-button type="primary" icon="ios-skipforward"></i-button>
    </Button-group>
    <Button-group shape="circle" vertical size="small">
        <i-button type="ghost" icon="ios-color-wand-outline"></i-button>
        <i-button type="ghost" icon="ios-sunny-outline"></i-button>
        <i-button type="ghost" icon="ios-crop"></i-button>
        <i-button type="ghost" icon="ios-color-filter-outline"></i-button>
    </Button-group>

    <br><br>
    <i-button type="primary" icon="ios-search" shape="circle" size="small"></i-button>
    <i-button type="primary" icon="ios-search" shape="circle"></i-button>
    <i-button type="primary" icon="ios-search" shape="circle" size="large"></i-button>
    <i-button type="primary" icon="ios-search" shape="circle" size="small">搜索</i-button>
    <i-button type="primary" icon="ios-search" shape="circle">搜索</i-button>
    <i-button type="primary" icon="ios-search" shape="circle" size="large">搜索</i-button>
    <br><br>
    <i-button>Default</i-button>
    <i-button type="primary">Primary</i-button>
    <i-button type="ghost">Ghost</i-button>
    <i-button type="dashed">Dashed</i-button>
    <i-button type="text">文字按钮</i-button>
    <i-button type="text" disabled>文字按钮</i-button>
    <br><br>
    <i-button type="primary" size="large">Large</i-button>
    <i-button type="primary">Default</i-button>
    <i-button type="primary" size="small">Small</i-button>
    <br><br>
    <i-button>Default</i-button>
    <i-button disabled>Default(Disabled)</i-button>
    <br><br>
    <i-button type="primary">Primary</i-button>
    <i-button type="primary" disabled>Primary(Disabled)</i-button>
    <br><br>
    <i-button type="ghost">Ghost</i-button>
    <i-button type="ghost" disabled>Ghost(Disabled)</i-button>
    <br><br>
    <i-button type="dashed">dashed</i-button>
    <i-button type="dashed" disabled>dashed(Disabled)</i-button>
    <br><br>
    <i-button type="primary" shape="circle" icon="ios-search"></i-button>
    <i-button type="primary" icon="ios-search">搜索</i-button>
    <br><br>
    <i-button type="ghost" shape="circle">
        <Icon type="search"></Icon>
    </i-button>
    <i-button type="ghost">
        <Icon type="search"></Icon>
        搜索
    </i-button>
    <i-button type="ghost" shape="circle" size="large">
        <Icon type="search"></Icon>
    </i-button>
    <i-button type="ghost" shape="circle" size="small">
        <Icon type="search"></Icon>
    </i-button>
    <br><br><br>
    <i-button type="primary" loading>Loading...</i-button>
    <i-button type="primary" loading size="large">Loading...</i-button>
    <i-button type="primary" loading size="small">Loading...</i-button>
    <i-button type="primary" :loading="loading" @click="toLoading">
        <span v-if="!loading">Click me!</span>
        <span v-else>Loading...</span>
    </i-button>
    <i-button type="primary" :loading="loading2" icon="checkmark-round" @click="toLoading2">
        <span v-if="!loading2">Click me!</span>
        <span v-else>Loading...</span>
    </i-button>
    <h4>基本</h4>
    <Button-group size="large">
        <i-button>取消</i-button>
        <i-button type="primary">确定</i-button>
    </Button-group>
    <Button-group>
        <i-button type="primary">L</i-button>
        <i-button>M</i-button>
        <i-button type="ghost">R</i-button>
        <i-button type="dashed">R</i-button>
    </Button-group>
    <h4>配合图标</h4>
    <Button-group>
        <i-button type="primary">
            <Icon type="chevron-left"></Icon>
            前进
        </i-button>
        <i-button type="primary">
            后退
            <Icon type="chevron-right"></Icon>
        </i-button>
    </Button-group>
    <Button-group>
        <i-button type="primary" icon="cloud"></i-button>
        <i-button type="primary" icon="upload"></i-button>
    </Button-group>
</template>
<script>
    export default {
        props: {

        },
        data () {
            return {
                loading: false,
                loading2: false,
                model6: '',
                cityList: [
                    {
                        value: 'beijing',
                        label: '北京市'
                    },
                    {
                        value: 'shanghai',
                        label: '上海市'
                    },
                    {
                        value: 'shenzhen',
                        label: '深圳市'
                    },
                    {
                        value: 'hangzhou',
                        label: '杭州市'
                    },
                    {
                        value: 'nanjing',
                        label: '南京市'
                    },
                    {
                        value: 'chongqing',
                        label: '重庆市'
                    }
                ],
                model1: ''
            }
        },
        methods: {
            toLoading () {
                this.loading = true;
            },
            toLoading2 () {
                this.loading2 = true;
            }
        }
    }
</script>
