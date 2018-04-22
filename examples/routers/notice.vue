<template>
    <div>
        <p>带描述信息</p>
        <Button @click="normal(false)">普通</Button>
        <Button @click="info(false)">消息</Button>
        <Button @click="success(false)">成功</Button>
        <Button @click="warning(false)">警告</Button>
        <Button @click="error(false)">错误</Button>
        <Button @click="testRender()">render</Button>
        <p>仅标题</p>
        <Button @click="info(true)">消息</Button>
        <Button @click="success(true)">成功</Button>
        <Button @click="warning(true)">警告</Button>
        <Button @click="error(true)">错误</Button>
        <Button @click="destroy()">销毁</Button>
    </div>
</template>
<script>
    export default {
        methods: {
            normal (nodesc) {
                this.$Notice.open({
                    title: 'google',
                    duration: 0,
                    desc: nodesc ? '' : '这里是通知描述这里,是通知描述这里是通知描述这里,是通知描述这里,是通知描述这里是通知描述这里是通知描述',
                    render (h) {
                        return h('span', {}, 'sdsdfsdf');
                    }
                });
            },
            info (nodesc) {
                this.$Notice.info({
                    // title: '这是通知标题',
                    duration: 0,
                    desc: nodesc ? '' : '这里是通知描述这里,是通知描述这里是通知描述这里,是通知描述这里,是通知描述这里是通知描述这里是通知描述',
                    render (h) {
                        return h('span', {}, 'sdsdfsdf');
                    }
                });
            },
            success () {
                this.$Notice.success({
                    title: '这是通知标题',
                    desc: '当你定义了render之后，这个描述会被覆盖',
                    render: h => {
                        return h('span', {}, [
                            '这是',
                            h('Button', {props: {type: 'text'}}, 'render'),
                            '函数渲染的'
                        ]);
                    },
                    duration: 0
                });
            },
            warning (nodesc) {
                this.$Notice.warning({
                    title: '这是通知标题',
                    desc: nodesc ? '' : '这里是通知描述这里,是通知描述这里是通知描述这里,是通知描述这里,是通知描述这里是通知描述这里是通知描述',
                });
            },
            error (nodesc) {
                this.$Notice.error({
                    title: '这是通知标题',
                    desc: nodesc ? '' : '这里是通知描述这里,是通知描述这里是通知描述这里,是通知描述这里,是通知描述这里是通知描述这里是通知描述'
                });
            },
            testRender () {
                this.$Notice.info({
                    title: '这是通知标题',
                    duration: 0,
                    // desc: '当你定义了render之后，这个描述会被覆盖',
                    render: h => {
                        return h('span', {}, [
                            '这是',
                            h('Button', {props: {type: 'text'}}, 'render'),
                            '函数渲染的'
                        ]);
                    },
                });
            },
            destroy () {
                this.$Notice.destroy();
            }
        }
    }
</script>
