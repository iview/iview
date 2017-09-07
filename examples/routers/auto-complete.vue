<template>
    <div style="margin: 100px;width: 200px;">
        <AutoComplete transfer v-model="value" icon="ios-search" :data="data" @on-search="handleSearch" @on-change="hc" :filter-method="fm">
            <!--<Option v-for="item in data" :value="item" :label="item" :key="item">-->
                <!--<span style="color: red">{{ item }}</span>-->
            <!--</Option>-->
        </AutoComplete>
    </div>
</template>
<script>

    export default {
        props: {

        },
        data () {
            return {
                value: '',
                data: [],
//                data: ['Burns Bay Road', 'Downing Street', 'Wall Street']
            };
        },
        computed: {},
        methods: {
            handleSearch (value) {
                this.data = !value ? [] : [
                    value + '@qq.com',
                    value + '@sina.com',
                    value + '@163.com'
                ]
            },
            hc (v) {
//                console.log(v)
            },
            fm (value, item) {
                return item.toUpperCase().indexOf(value.toUpperCase()) !== -1;
            }
        }
    };
</script>