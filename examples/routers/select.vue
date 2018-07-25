<template>
    <div>
        <!-- <Select v-model="model1" style="width:200px">
            <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>

        <Select v-model="model2" multiple style="width:200px">
            <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select> -->
        <Tabs value="name1">
            <Tab-Pane label="标签一"
                      name="name1">标签一的内容</Tab-Pane>
            <Tab-Pane label="标签二"
                      name="name2">
                <i-Select value="beijing">
                    <i-Option value="beijing">北京</i-Option>
                    <i-Option value="shanghai">上海</i-Option>
                    <i-Option value="shenzhen">深圳</i-Option>
                </i-Select>
            </Tab-Pane>
        </Tabs>
    </div>
</template>
<script>
export default {
    data () {
        return {
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
            model1: '',
            model2: []
        }
    }
}
</script>
<style lang="less">
#app {
  padding: 20px;
}

.ivu-tabs-tabpane {
  min-height: 200px;
  padding: 20px;
}
</style>
