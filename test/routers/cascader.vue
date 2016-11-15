<template>
    <div style="margin: 50px;width:300px">
        <Cascader :data="data" :value="value"></Cascader>
    </div>
</template>
<script>
    import { Cascader } from 'iview';
    export default {
        props: {

        },
        data () {
            return {
                value: [],
                data: [{
                    value: 'zhejiang',
                    label: 'Zhejiang',
                    children: [{
                        value: 'hangzhou',
                        label: 'Hangzhou'
                    }],
                }, {
                    value: 'jiangsu',
                    label: 'Jiangsu',
                    children: [{
                        value: 'nanjing',
                        label: 'Nanjing',
                        children: [{
                            value: 'zhonghuamen',
                            label: 'Zhong Hua Men',
                            children: [{
                                value: 'abc',
                                label: 'ABC'
                            }]
                        }]
                    }, {
                        value: 'hhh',
                        label: 'HHH',
                        children: [{
                            value: 'ddd',
                            label: 'DDD'
                        }]
                    }]
                }]
            }
        },
        computed: {

        },
        methods: {

        }
    }
</script>