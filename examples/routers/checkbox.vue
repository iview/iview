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
            <Checkbox true-value="true" false-value="false" v-model="testValue1" disabled>Apple</Checkbox>
            <Checkbox size="small" true-value="true" false-value="false" v-model="testValue1">Apple</Checkbox>
            {{ testValue1 }}
        </div>
        <div>
            <Checkbox :true-value="0" :false-value="1" v-model="testValue2">test number</Checkbox>
            {{ testValue2 }}
        </div>
        <Checkbox-group v-model="fruit" size="large">
            <Checkbox v-for="item in tags" :label="item.label" :key="item.label" true-value="true"></Checkbox>
        </Checkbox-group>
        <div>{{ fruit }}</div>
        <Divider></Divider>
        <CheckboxGroup v-model="fruit" size="small">
            <Checkbox label="香蕉"></Checkbox>
            <Checkbox label="苹果"></Checkbox>
            <Checkbox label="西瓜"></Checkbox>
        </CheckboxGroup>
        <br>
        <CheckboxGroup v-model="fruit" size="default">
            <Checkbox label="香蕉"></Checkbox>
            <Checkbox label="苹果"></Checkbox>
            <Checkbox label="西瓜"></Checkbox>
        </CheckboxGroup>
        <br>
        <CheckboxGroup v-model="fruit" size="large">
            <Checkbox label="香蕉"></Checkbox>
            <Checkbox label="苹果"></Checkbox>
            <Checkbox label="西瓜"></Checkbox>
        </CheckboxGroup>
        <Divider></Divider>
        <div style="border-bottom: 1px solid #e9e9e9;padding-bottom:6px;margin-bottom:6px;">
            <Checkbox
                    :indeterminate="indeterminate"
                    :value="checkAll"
                    @click.prevent.native="handleCheckAll">全选</Checkbox>
        </div>
        <CheckboxGroup v-model="checkAllGroup" @on-change="checkAllGroupChange">
            <Checkbox label="香蕉"></Checkbox>
            <Checkbox label="苹果"></Checkbox>
            <Checkbox label="西瓜"></Checkbox>
        </CheckboxGroup>
        <Divider></Divider>
        <CheckboxGroup v-model="fruit" size="small">
            <Checkbox label="香蕉" border></Checkbox>
            <Checkbox label="苹果" border></Checkbox>
            <Checkbox label="西瓜" border></Checkbox>
        </CheckboxGroup>
        <br>
        <CheckboxGroup v-model="fruit" size="default">
            <Checkbox label="香蕉" border></Checkbox>
            <Checkbox label="苹果" border disabled></Checkbox>
            <Checkbox label="西瓜" border></Checkbox>
        </CheckboxGroup>
        <br>
        <CheckboxGroup v-model="fruit" size="large">
            <Checkbox label="香蕉" border></Checkbox>
            <Checkbox label="苹果" border></Checkbox>
            <Checkbox label="西瓜" border></Checkbox>
        </CheckboxGroup>
        <Divider></Divider>
        <Checkbox v-model="single" size="small" border>单独</Checkbox>
        <Checkbox v-model="single" size="default" border disabled>单独</Checkbox>
        <Checkbox v-model="single" size="large" border>单独</Checkbox>
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
                indeterminate: true,
                checkAll: false,
                checkAllGroup: ['香蕉', '西瓜'],
                single: false
            };
        },
        methods: {
            handleCheckAll () {
                if (this.indeterminate) {
                    this.checkAll = false;
                } else {
                    this.checkAll = !this.checkAll;
                }
                this.indeterminate = false;

                if (this.checkAll) {
                    this.checkAllGroup = ['香蕉', '苹果', '西瓜'];
                } else {
                    this.checkAllGroup = [];
                }
            },
            checkAllGroupChange (data) {
                if (data.length === 3) {
                    this.indeterminate = false;
                    this.checkAll = true;
                } else if (data.length > 0) {
                    this.indeterminate = true;
                    this.checkAll = false;
                } else {
                    this.indeterminate = false;
                    this.checkAll = false;
                }
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
                ];
            }, 1000);
        }
    };
</script>
