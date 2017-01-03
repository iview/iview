<template>
    <Row>
        <i-col span="8">
            <span>Basic Model: {{model1}}</span>
            <auto-complete :model.sync="model1">
                <i-option v-for="item in cityList" :value="item.value">{{ item.label }}</i-option>
            </auto-complete>
        </i-col>
    </Row>
    <br/>
    <Row>
        <i-col span="8">
            <span>Placeholder Model: {{model2}}</span>
            <auto-complete :model.sync="model2" placeholder="test">
                <i-option v-for="item in cityList" :value="item.value">{{ item.label }}</i-option>
            </auto-complete>
        </i-col>
    </Row>
    <br/>
    <Row>
        <i-col span="8">
            <span>Disabled</span>
            <auto-complete :model.sync="model2" placeholder="test" disabled>
                <i-option v-for="item in cityList" :value="item.value">{{ item.label }}</i-option>
            </auto-complete>
        </i-col>
    </Row>
    <br/>
    <Row>
        <i-col span="6">
            <span>Small</span>
            <auto-complete size="small">
                <i-option v-for="item in cityList" :value="item.value">{{ item.label }}</i-option>
            </auto-complete>
        </i-col>
        <i-col span="6" offset="1">
            <span>Normal</span>
            <auto-complete>
                <i-option v-for="item in cityList" :value="item.value">{{ item.label }}</i-option>
            </auto-complete>
        </i-col>
        <i-col span="6" offset="1">
            <span>Large</span>
            <auto-complete size="large">
                <i-option v-for="item in cityList" :value="item.value">{{ item.label }}</i-option>
            </auto-complete>
        </i-col>
    </Row>
    <br/>
    <Row>
        <i-col span="8">
            <span>Not Found Text</span>
            <auto-complete not-found-text="Not found">
                <i-option v-for="item in []" :value="item.value">{{ item.label }}</i-option>
            </auto-complete>
        </i-col>
    </Row>
    <br/>
    <Row>
        <i-col span="8">
            <span>Dynamic</span>
            <auto-complete :model.sync="username" @on-change="onChange" not-found-text="">
                <i-option v-for="item in emailList" :value="item">{{ item }}</i-option>
            </auto-complete>
        </i-col>
    </Row>
</template>
<script>
    export default {
        data () {
            return {
                cityList: [
                    {
                        value: 'Beijing',
                        label: 'Beijing'
                    },
                    {
                        value: 'Shanghai',
                        label: 'Shanghai'
                    },
                    {
                        value: 'Shenzhen',
                        label: 'Shenzhen'
                    },
                    {
                        value: 'Hangzhou',
                        label: 'Hangzhou'
                    },
                    {
                        value: 'Nanjing',
                        label: 'Nanjing'
                    },
                    {
                        value: 'Nanning',
                        label: 'Nanning'
                    }
                ],
                model1: 'Beijing',
                model2: '',
                username: '',
                emailList: []
            }
        },

        methods: {
            onChange (value) {
                let list
                if (!value || value.indexOf('@') >= 0) {
                    list = [];
                } else {
                    list = ['gmail.com', '163.com', 'qq.com'].map(domain => `${value}@${domain}`);
                }
                this.emailList = list;
            }
        }
    }
</script>
