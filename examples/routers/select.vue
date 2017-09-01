<template>
    <div>
        <h4>有remote属性</h4>
        {{ selectedIds }}
        <i-select remote clearable filterable multiple :label="selectedLabel" v-model="selectedIds" style='margin-bottom:20px;'>
            <i-option v-for="option in list" :value="option.id" :key="option.id">{{option.name}}</i-option>
        </i-select>
        <i-button @click="setVal3">设置3</i-button>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                list: [],
                selectedIds: [],
                selectedLabel: []
            }
        },
        methods: {
            setVal1: function () {
                this.selectedLabel = ['几何', '化学'];
                this.selectedIds = ['201701041343', '201701011541']

            },
            setVal2: function () {
                this.selectedLabel = ['政治', '英语', '数学'];
                this.selectedIds = ['201701031442', '201701061244', '201701011145']
            },
            setVal3: function () {
                this.selectedLabel = [];
                this.selectedIds = [];
            }
        },
        mounted () {
            setTimeout(() => {
                this.list = [{
                    name: '语文',
                    id: '201701011046'
                }, {
                    name: '数学',
                    id: '201701011145'
                }, {
                    name: '英语',
                    id: '201701061244'
                }, {
                    name: '几何',
                    id: '201701041343'
                }, {
                    name: '政治',
                    id: '201701031442'
                }, {
                    name: '化学',
                    id: '201701011541'
                }]
            }, 1000)
        }
    }
</script>
