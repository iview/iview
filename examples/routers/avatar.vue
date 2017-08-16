<template>
    <div>
        <Avatar icon="person" size="large" style="background-color: #fde3cf;color: #f56a00"></Avatar>
        <Avatar icon="person"></Avatar>
        <Avatar icon="person" size="small"></Avatar>
        <Avatar icon="person" size="large" shape="square"></Avatar>
        <Avatar icon="person" shape="square"></Avatar>
        <Avatar icon="person" size="small" shape="square"></Avatar>
        <br><br>
        <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" size="large"></Avatar>
        <Avatar src="https://avatars2.githubusercontent.com/u/5370542?v=4&s=460"></Avatar>
        <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" size="small"></Avatar>
        <Avatar src="https://avatars2.githubusercontent.com/u/5370542?v=4&s=460" size="large" shape="square"></Avatar>
        <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" shape="square"></Avatar>
        <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" size="small" shape="square"></Avatar>
        <br><br>
        <Avatar size="large">Leo</Avatar>
        <Avatar size="large">A</Avatar>
        <Avatar size="default">A</Avatar>
        <Avatar size="small">A</Avatar>
        <Avatar size="large">Tomserm</Avatar>
        <Avatar size="large">{{ name }}</Avatar>
        {{ name }}
        <br><br>
        <Badge dot>
            <Avatar icon="person" shape="square"></Avatar>
        </Badge>
        <Badge :count="3">
            <Avatar icon="person" shape="square"></Avatar>
        </Badge>
        <Button @click="change">change</Button>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                name: 'Aresn'
            }
        },
        methods: {
            change () {
                this.name = 'Tomserm'
            }
        }
    }
</script>
