<template>
    <div style="width: 300px;margin: 100px;">
        <Cascader :data="data2" v-model="v1" change-on-select></Cascader>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                v1: ['zhejiang'],
                data2: [{
                    value: 'zhejiang',
                    label: '浙江',
                    children: [{
                        value: 'hangzhou',
                        label: '杭州',
                        children: [{
                            value: 'xihu',
                            label: '西湖'
                        }]
                    }]
                }, {
                    value: 'jiangsu',
                    label: '江苏',
                    children: [{
                        value: 'nanjing',
                        label: '南京',
                        children: [{
                            value: 'zhonghuamen',
                            label: '中华门'
                        }]
                    }]
                }]
            }
        }
    }
</script>
