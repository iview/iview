<template>
    <div style="margin: 100px;width: 200px;">
        <AutoComplete
            placement="top"
            transfer
            v-model="value"
            icon="ios-search"
            :data="data"
            @on-search="onHandleSearch"
            @on-change="onChange"
            @on-select="onSelect"
        >
            <!--<Option v-for="item in data" :value="item" :label="item" :key="item">-->
            <!--<span style="color: red">{{ item }}</span>-->
            <!--</Option>-->
        </AutoComplete>
    </div>
</template>
<script>
    export default {
        props: {},
        data () {
            return {
                value: "",
                source: ["1", "2", "3", "11", "12", "13"],
                data: []
            };
        },
        computed: {},
        methods: {
            onHandleSearch (value) {
                let result = [];
                for (let val of this.source) {
                    if (val.includes(value)) {
                        result.push(val);
                    }
                }
                this.data = result;
            },
            onSelect (e) {
                console.log('onSelect', e);
            },
            onChange (v) {
                console.log("onChange", v);
            },
            fm (value, item) {
                return item.toUpperCase().indexOf(value.toUpperCase()) !== -1;
            }
        }
    };
</script>
