<template>
    <div style="width: 200px;margin: 100px;">
        <i-select v-model="model" filterable clearable style="width:200px">
            <i-option :value="option.value" v-for="option in options" :key="option">{{option.label}}</i-option>
        </i-select>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                model: 1,
                options: [

                ]
            }
        },
        mounted () {
            this.options = [{
                label: '全部',
                value: 0
            },{
                label: '苹果',
                value: 1
            },{
                label: '香蕉',
                value: 2
            },{
                label: '西瓜',
                value: 3
            }];
        }
    }
</script>