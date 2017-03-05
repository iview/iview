<template>
    <Transfer
            :data="data2"
            :target-keys="targetKeys2"
            filterable
            :render-format="rf"
            :filter-method="filterMethod"
            @on-change="handleChange2"></Transfer>
</template>
<script>
    export default {
        data () {
            return {
                data2: this.getMockData(),
                targetKeys2: this.getTargetKeys()
            }
        },
        methods: {
            getMockData () {
                let mockData = [];
                for (let i = 1; i <= 20; i++) {
                    mockData.push({
                        key: i.toString(),
                        label: '内容' + i,
                        description: '内容' + i + '的描述信息',
                        disabled: Math.random() * 3 < 1
                    });
                }
                return mockData;
            },
            getTargetKeys () {
                return this.getMockData()
                        .filter(() => Math.random() * 2 > 1)
                        .map(item => item.key);
            },
            handleChange2 (newTargetKeys) {
                this.targetKeys2 = newTargetKeys;
            },
            filterMethod (data, query) {
                return data.label.indexOf(query) > -1;
            },
            rf (data) {
                return '<i class="ivu-icon ivu-icon-alert"></i>' + data.label;
            }
        }
    }
</script>
