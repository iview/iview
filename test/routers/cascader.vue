<template>
    <div style="margin: 50px;width:300px">
        {{ value | json }}
        <Cascader size="large" :data="data" @on-change="change" trigger="hover" :render-format="format"></Cascader>
    </div>
</template>
<script>
    import { Cascader } from 'iview';
    export default {
        props: {

        },
        data () {
            return {
                value: ['jiangsu', 'hhh', 'ddd'],
//                value: [],
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
//                        disabled: true,
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
            change (data, opts) {
                console.log(data);
                console.log(opts)
            },
            format (label, data) {
                return label[label.length - 1];
            }
        }
    }
</script>