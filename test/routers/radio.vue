<template>
    <div>
        <Radio v-model="single" @on-change="c">Radio</Radio>
        <Radio-group v-model="phone" type="button" @on-change="c">
            <Radio label="apple">
                <Icon type="social-apple"></Icon>
                <span>Apple</span>
            </Radio>
            <Radio label="android">
                <Icon type="social-android"></Icon>
                <span>Android</span>
            </Radio>
            <Radio label="windows">
                <Icon type="social-windows"></Icon>
                <span>Windows</span>
            </Radio>
        </Radio-group>
        <Radio-group v-model="animal">
            <Radio label="金斑蝶"></Radio>
            <Radio label="爪哇犀牛"></Radio>
            <Radio label="印度黑羚"></Radio>
        </Radio-group>
        {{ phone }}
        <div @click="phone = 'apple'">apple</div>
        <div @click="single = true"> single</div>{{ single }}
    </div>
</template>
<script>
    export default {
        data () {
            return {
                phone: 'apple',
                animal: '爪哇犀牛',
                single: false
            }
        },
        methods: {
            c (data) {
                console.log(data)
            }
        }
    }
</script>
