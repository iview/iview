<template>
    <div>
        <Button @click="instance('info')">Info</Button>
        <Button @click="instance('success')">Success</Button>
        <Button @click="instance('warning')">Warning</Button>
        <Button @click="instance('error')">Error</Button>
        <Button @click="instance('confirm')">confirm</Button>
        <Modal
            v-model="modal1"
            :closable="true"
            title="123213"
            >
            <p>Content of dialog</p>
            <!-- <div slot="footer">
                <Button type="error" size="large" long :loading="modal_loading" @click="del">Delete</Button>
            </div> -->
        </Modal>
        <Button @click="modal1 = true">Error</Button>
        <Button @click="showAlert">showAlert</Button>
        <Button @click="showConfirm">showConfirm</Button>
        <Button @click="showToast">showToast</Button>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                modal1: false
            }
        },
        methods: {
            instance (type) {
                const title = 'Title';
                const content = '<p>Content of dialog</p><p>Content of dialog</p>';
                switch (type) {
                    case 'info':
                        this.$Modal.info({
                            title: title,
                            content: content,
                            closable: true
                        });
                        break;
                    case 'success':
                        this.$Modal.success({
                            title: title,
                            content: content
                        });
                        break;
                    case 'warning':
                        this.$Modal.warning({
                            title: title,
                            content: content
                        });
                        break;
                    case 'error':
                        this.$Modal.error({
                            title: title,
                            content: content
                        });
                        break;
                    case 'confirm':
                        this.$Modal.confirm({
                            title: title,
                            content: content
                        });
                        break;
                }
            },
            showAlert() {
                this.$vux.alert.show({
                    title: 'Vux is Cool',
                    content: 'Do you agree?',
                    buttonText: '123123',
                    onShow () {
                        console.log('Plugin: I\'m showing')
                    },
                    onHide () {
                        console.log('Plugin: I\'m hiding')
                    }
                })
            },
            showConfirm() {
                this.$vux.confirm.show({
                title: '确认',
                content: '确认',
                'cancelText': '确认',
                'confirmText': '取消',
                // 组件除show外的属性
                onCancel () {
                    console.log(this) // 非当前 vm
                },
                onConfirm () {}
                })
            },
            showToast() {
                // 显示文字
                this.$vux.toast.text('hello', 'top')
            }
        }
    }
</script>
