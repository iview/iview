<template>
    <div>
        <i-button @click="showModal = true">Modal有Tabs</i-button>
        <i-button @click="showModal2 = true">Modal无Tabs</i-button>
        <Modal v-model="showModal" title="弹窗">
            <Tabs>
                <Tab-pane label="演示" style="height: 80px;">
                    <Date-picker transfer type="daterange" placement="bottom-end" placeholder="选择日期" style="width: 200px"></Date-picker>
                    <i-select transfer multiple v-model="m1">
                        <i-option v-for="item in options" :value="item.value" :key="item.value">{{ item.label }}</i-option>
                    </i-select>
                </Tab-pane>
            </Tabs>
        </Modal>
        <Modal v-model="showModal2" title="弹窗">
            <i-select>
                <i-option v-for="item in options" :value="item.value" :key="item.value">{{ item.label }}</i-option>
            </i-select>
        </Modal>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                m1: [],
                showModal: false,
                showModal2: false,
                options: [
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
                ]
            }
        },
        methods: {
            ok () {
                this.$Message.info('点击了确定');
            },
            cancel () {
                this.$Message.info('点击了取消');
            },
            remoteMethod(query) {
                this.loading = true;
                setTimeout(() => {
                    this.loading = false;
                    this.options = this.cityList;
                }, 200);
            },
            resetForm() {
                //加个计时器，就能解决这个定位问题了
                // setTimeout(()=> {
                this.$refs["formSelect"].clearSingleSelect();
                this.options = [];
                // }, 300)
            }
        }
    }
</script>
