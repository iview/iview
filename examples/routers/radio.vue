<template>
    <div>
        <Radio size="large" v-model="single">Radio</Radio>
        <Radio size="default" v-model="single">Radio</Radio>
        <Radio size="small" v-model="single">Radio</Radio>
        <br><br>
        <Radio-group v-model="phone">
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
        <Radio-group v-model="button2" type="button" size="large">
            <Radio label="北京"></Radio>
            <Radio label="上海" disabled></Radio>
            <Radio label="深圳"></Radio>
            <Radio label="杭州"></Radio>
        </Radio-group>
        <Radio-group v-model="button2" type="button" size="default">
            <Radio label="北京"></Radio>
            <Radio label="上海" disabled></Radio>
            <Radio label="深圳"></Radio>
            <Radio label="杭州"></Radio>
        </Radio-group>
        <Radio-group v-model="button2" type="button" size="small">
            <Radio label="北京"></Radio>
            <Radio label="上海" disabled></Radio>
            <Radio label="深圳"></Radio>
            <Radio label="杭州"></Radio>
        </Radio-group>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                single: true,
                phone: '',
                button2: '北京',
            };
        },
        methods: {

        }
    };
</script>
