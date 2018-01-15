<template>
    <div>
        <Button @click="instance('info')">Info</Button>
        <Button @click="instance('success')">Success</Button>
        <Button @click="instance('warning')">Warning</Button>
        <Button @click="instance('error')">Error</Button>
        <Button @click="instance('confirm')">Confirm</Button>
    </div>
</template>
<script>
    export default {
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
                            content: content,
                            closable: true,
                            esc2x: false,   //default true
                            onCloseX() {
                                alert('click X button');
                            },
                            onCancel() {
                                alert('click cancel button');
                            },
                            onOk() {
                                alert('click ok button');
                            }
                        });
                        break;
                }
            }
        }
    };
</script>
