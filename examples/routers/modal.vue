<template>
    <div>
        <i-button @click="modal=true">show modal</i-button>
        <Modal v-model="modal" @on-ok="resetForm" @on-cancel="resetForm" title="表单">
            <div>
                <i-select ref="formSelect" filterable remote clearable :remote-method="remoteMethod" :loading="loading">
                    <i-option v-for="option in options" :value="option.value" :key="option.value">{{option.label}}</i-option>
                </i-select>
            </div>
        </Modal>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                modal: false,
                loading: false,
                options: [],
                cityList: [
                    {
                        value: "beijing",
                        label: "北京市"
                    },
                    {
                        value: "shanghai",
                        label: "上海市"
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
