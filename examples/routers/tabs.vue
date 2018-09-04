<template>
    <Tabs type="card" closable @on-tab-remove="handleTabRemove" :beforeRemove="handleBeforeRemove">
        <TabPane label="标签一" v-if="tab0">标签一的内容</TabPane>
        <TabPane label="标签二" v-if="tab1">标签二的内容</TabPane>
        <TabPane label="标签三" v-if="tab2">标签三的内容</TabPane>
    </Tabs>
</template>
<script>
    export default {
        data () {
            return {
                tab0: true,
                tab1: true,
                tab2: true
            }
        },
        methods: {
            handleTabRemove (name) {
                this['tab' + name] = false;
            },
            handleBeforeRemove (index) {
                console.log(index);

                return new Promise((resolve, reject) => {
                    this.$Modal.confirm({
                        title: 'Title',
                        content: '<p>Content of dialog</p><p>Content of dialog</p>',
                        onOk: () => {
                            resolve();
                        },
                        onCancel: () => {
                            reject();
                        }
                    });
                });
            }
        }
    }
</script>
