<template>
    <Input-number :max="10" :min="1" :value="1"></Input-number>
    <br><br>
    <i-input type="textarea" :autosize="true" placeholder="请输入..."></i-input>
    <i-input type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="请输入..."></i-input>
    <i-input name="a" icon="ios-clock-outline" @on-focus="focus" @on-blur="blur" readonly style="width:200px;" :value.sync="v" @on-enter="enter" @on-click="iconclick" size="large" placeholder="请输入"></i-input>
    <i-input icon="ios-clock-outline" style="width:200px;" :value.sync="v" @on-enter="enter" placeholder="请输入"></i-input>
    <i-input name="b" icon="ios-clock-outline" style="width:200px;" :value.sync="v" @on-enter="enter" size="small" placeholder="请输入"></i-input>
    <br>
    <br>
    <i-input style="width:200px;" :value.sync="v" @on-enter="enter" size="large" placeholder="请输入"></i-input>
    <i-input style="width:200px;" :value.sync="v" @on-enter="enter" placeholder="请输入"></i-input>
    <i-input style="width:200px;" :value.sync="v" @on-enter="enter" @on-change="change" size="small" placeholder="请输入"></i-input>
    {{ v }}
    <br>
    <br>
    <i-input readonly placeholder="this is something" style="width:200px;" :value.sync="t" type="textarea" :autosize="autosize"></i-input>
    {{ t }}
    <br>
    <br>
    <div style="width: 400px">
        <i-input :value.sync="v" type="password">
            <span slot="prepend">http://</span>
            <span slot="append">
                <i-button icon="ios-search"></i-button>
            </span>
        </i-input>
        <br>
        <i-input :value.sync="v">
            <span slot="prepend">http://</span>
            <span slot="append"><Icon type="ios-search"></Icon></span>
        </i-input>
        <br>
        <i-input :value.sync="v" size="small">
            <span slot="prepend">http://</span>
            <span slot="append"><Icon type="ios-search"></Icon></span>
        </i-input>

        <br>
        <i-input :value.sync="v" size="large">
            <i-select :model.sync="select1" slot="prepend" style="width: 80px">
                <i-option value="http">http://</i-option>
                <i-option value="https">https://</i-option>
            </i-select>
            <i-select :model.sync="select2" slot="append" style="width: 70px">
                <i-option value="com">.com</i-option>
                <i-option value="cn">.cn</i-option>
                <i-option value="net">.net</i-option>
                <i-option value="io">.io</i-option>
            </i-select>
        </i-input>
        <br>
        <i-input :value.sync="v">
            <i-select :model.sync="select1" slot="prepend" style="width: 80px">
                <i-option value="http">http://</i-option>
                <i-option value="https">https://</i-option>
            </i-select>
            <i-select :model.sync="select2" slot="append" style="width: 70px">
                <i-option value="com">.com</i-option>
                <i-option value="cn">.cn</i-option>
                <i-option value="net">.net</i-option>
                <i-option value="io">.io</i-option>
            </i-select>
        </i-input>
        <br>
        <i-input :value.sync="v" size="small">
            <i-select :model.sync="select1" slot="prepend" style="width: 80px">
                <i-option value="http">http://</i-option>
                <i-option value="https">https://</i-option>
            </i-select>
            <i-select :model.sync="select2" slot="append" style="width: 70px">
                <i-option value="com">.com</i-option>
                <i-option value="cn">.cn</i-option>
                <i-option value="net">.net</i-option>
                <i-option value="io">.io</i-option>
            </i-select>
        </i-input>
        <Input-number :value="2" size="small"></Input-number>
        <Input-number :value="2"></Input-number>
        <Input-number :value="2" size="large"></Input-number>
        <i-input type="password"></i-input>
    </div>
</template>
<script>
    import { iInput, Icon, iButton, iSelect, iOption, InputNumber } from 'iview';

    export default {
        components: {
            iInput,
            Icon,
            iButton,
            iSelect,
            iOption,
            InputNumber
        },
        props: {

        },
        data () {
            return {
                v: 'hello',
                t: '',
                autosize: {
                    minRows: 2,
                    maxRows: 5
                },
                select1: 'http',
                select2: 'com'
            }
        },
        computed: {

        },
        methods: {
            enter () {
                console.log(123)
            },
            iconclick () {
                console.log('iconclicked')
            },
            change (val) {
                console.log(val)
            },
            focus () {
                this.$Message.info('focus');
            },
            blur () {
                this.$Message.info('blur');
            }
        }
    }
</script>