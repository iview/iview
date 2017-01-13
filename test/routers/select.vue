<template>
    <i-button type="primary" @click="modal1 = true">i-selelct加入width样式</i-button>
    <i-button type="primary" @click="modal2 = true">i-selelct没有加入width样式</i-button>

    <Modal
            :visible.sync="modal1"
            title="普通的Modal对话框标题">
        <i-select :model.sync="model1" :style="modalStyle">
            <i-option v-for="item in cityList" :value="item.value">{{ item.label }}</i-option>
        </i-select>
    </Modal>

    <Modal
            :visible.sync="modal2"
            title="普通的Modal对话框标题">
        <i-select :model.sync="model1" :style="modalStyle">
            <i-option v-for="item in cityList" :value="item.value">{{ item.label }}</i-option>
        </i-select>
    </Modal>
</template>
<script>
    export default {
        data () {
            return {
                modal1: false,
                modal2: false,
                modalStyle: '',
                cityList: [
                    {
                        value: 'beijing',
                        label: '北京市'
                    },
                    {
                        value: 'shanghai',
                        label: '上海市'
                    },
                    {
                        value: 'shenzhen',
                        label: '深圳市'
                    },
                    {
                        value: 'hangzhou',
                        label: '杭州市'
                    },
                    {
                        value: 'nanjing',
                        label: '南京市'
                    },
                    {
                        value: 'chongqing',
                        label: '重庆市'
                    }
                ],
                model1: ''
            }
        },
        computed: {
            modalStyle: function(){
                let s = ""
                if (this.modal1)
                    s = "width: 200px"
                if (this.modal2)
                    s = ""
                return s
            }
        }
    }
</script>
