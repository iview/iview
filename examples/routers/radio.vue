<template>
    <div>
        <Radio size="large" v-model="single">Radio</Radio>
        <Radio size="default" v-model="single">Radio</Radio>
        <Radio size="small" v-model="single">Radio</Radio>
        <br>
        <Radio size="large" v-model="single" border>Radio</Radio>
        <Radio size="default" v-model="single" border disabled>Radio</Radio>
        <Radio size="small" v-model="single" border>Radio</Radio>
        <br><br>
        <Radio-group v-model="phone">
            <Radio label="apple">
                <Icon type="logo-apple"></Icon>
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
        <Divider></Divider>
        <Radio-group v-model="phone" size="small">
            <Radio label="apple" border>
                <Icon type="logo-apple"></Icon>
                <span>选项一</span>
            </Radio>
            <Radio label="android" border>
                <Icon type="logo-android"></Icon>
                <span>选项二</span>
            </Radio>
            <Radio label="windows" border>
                <Icon type="logo-windows"></Icon>
                <span>选项三</span>
            </Radio>
        </Radio-group>
        <br><br>
        <Radio-group v-model="phone" size="default">
            <Radio label="apple" border>
                <span>选项一</span>
            </Radio>
            <Radio label="android" border disabled>
                <span>选项二</span>
            </Radio>
            <Radio label="windows" border>
                <span>选项三</span>
            </Radio>
        </Radio-group>
        <br><br>
        <Radio-group v-model="phone" size="large">
            <Radio label="apple" border>
                <Icon type="logo-apple"></Icon>
                <span>选项一</span>
            </Radio>
            <Radio label="android" border>
                <Icon type="logo-android"></Icon>
                <span>选项二</span>
            </Radio>
            <Radio label="windows" border>
                <Icon type="logo-windows"></Icon>
                <span>选项三</span>
            </Radio>
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
