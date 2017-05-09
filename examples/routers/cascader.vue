<template>
    <Row>
        <i-col span="4">
            <Button @click="handleLoad">load</Button>
        </i-col>
        <i-col span="6">
            <!--<Cascader :data="data2" v-model="v1" change-on-select></Cascader>-->
            <Cascader :data="data2" v-model="v1" :loadData="loadData"></Cascader>
        </i-col>
    </Row>
</template>
<script>
    export default {
        data () {
            return {
                v1: [],
                data2: [{
                    value: 'zhejiang',
                    label: '浙江',
                    children: [],
                    loading: false
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
        },
        methods: {
            handleLoad () {
                this.data2[0].loading = !this.data2[0].loading;
            },
            loadData (item, cb) {
                item.loading = true;
                setTimeout(() => {
                    if (item.value === 'zhejiang') {
                        item.children = [
                            {
                                value: 'hangzhou',
                                label: '杭州',
                                loading: false,
                                children: []
                            }
                        ];
                    } else if (item.value === 'hangzhou') {
                        item.children = [
                            {
                                value: 'ali',
                                label: '阿里巴巴'
                            }
                        ];
                    }
                    item.loading = false;
                    cb();
                }, 1000);
            }
        }
    }
</script>
