<template>
    <div>
        <Checkbox
            :indeterminate="true"
            :value="false"
            size="large">全选</Checkbox>
        <Checkbox
                :indeterminate="true"
                :value="false"
                size="default">全选</Checkbox>
        <Checkbox
                :indeterminate="true"
                :value="false"
                size="small">全选</Checkbox>
        <div>
            <Checkbox size="large" true-value="true" false-value="false" v-model="testValue1">Apple</Checkbox>
            <Checkbox true-value="true" false-value="false" v-model="testValue1">Apple</Checkbox>
            <Checkbox size="small" true-value="true" false-value="false" v-model="testValue1">Apple</Checkbox>
            {{ testValue1 }}
        </div>
        <div>
            <Checkbox :true-value="0" :false-value="1" v-model="testValue2">test number</Checkbox>
            {{ testValue2 }}
        </div>
        <Checkbox-group v-model="fruit" size="large" sort>
            <Checkbox v-for="item in tags" :label="item.label" :key="item.label" true-value="true"></Checkbox>
        </Checkbox-group>
        <div>{{ fruit }}</div>
        
        <section>
            <strong>无排序案例(随意勾选下列多选框)</strong>
            <div>
                题目：下列哪些是属于前框框架和库（）<br/>
                答案选项：<Input style="width: 360px;"  v-model="exam" readonly></Input>
            </div>
            <Checkbox-group v-model="value" size="large" @on-change="checkExam">
                <Checkbox v-for="item in examList" :label="item.label" :key="item.label" true-value="true">{{item.text}}</Checkbox>
            </Checkbox-group>
        </section>

        <section>
            <strong>有排序案例(随意勾选下列多选框)</strong>
            <div>
                题目：下列哪些是属于前框框架和库（）<br/>
                答案选项：<Input style="width: 360px;"  v-model="exam2" readonly></Input>
            </div>
            <Checkbox-group v-model="value2" size="large" @on-change="checkExam2" sort>
                <Checkbox v-for="item in examList" :label="item.label" :key="item.label" true-value="true">{{item.text}}</Checkbox>
            </Checkbox-group>
        </section>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                social: ['facebook', 'github'],
                fruit: ['苹果'],
                tags: [],
                testValue1: null,
                testValue2: null,
                examList: [],
                exam: "",
                value: [],
                exam2: "",
                value2: []
            }
        },
        mounted () {
            setTimeout(() => {
                this.tags = [
                    {
                        label: '香蕉'
                    },
                    {
                        label: '苹果'
                    },
                    {
                        label: '西瓜'
                    }
                ]
            }, 1000);
            this.getExamList();
        },
        methods: {
            getExamList () {
                this.examList = [
                    {
                        label: 'A',
                        text: 'A.Vue'
                    },
                    {
                        label: 'B',
                        text: 'B.React'
                    },
                    {
                        label: 'C',
                        text: 'C.Angular'
                    },
                    {
                        label: 'D',
                        text: 'D.jQuery'
                    }
                ];
            },
            checkExam (data) {
                this.exam = "";
                data.forEach(item => {
                    this.exam = this.exam +" "+ item;
                })
            },
            checkExam2 (data) {
                this.exam2 = "";
                data.forEach(item => {
                    this.exam2 = this.exam2 +" "+ item;
                })
            }
        }
    }
</script>
