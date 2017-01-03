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
</template>
<script>
    export default {
        data () {
            return {
                cityList: [
                    {
                        value: 'beijing',
                        label: 'Beijing'
                    },
                    {
                        value: 'shanghai',
                        label: 'Shanghai'
                    },
                    {
                        value: 'shenzhen',
                        label: 'Shenzhen'
                    },
                    {
                        value: 'hangzhou',
                        label: 'Hangzhou'
                    },
                    {
                        value: 'nanjing',
                        label: 'Nanjing'
                    },
                    {
                        value: 'nanning',
                        label: 'Nanning'
                    }
                ],
                model1: 'beijing',
                model2: ''
            }
        },

        methods: {
            onChange () {}
        }
    }
</script>
