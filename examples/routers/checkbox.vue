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
        <Checkbox-group v-model="fruit" size="large">
            <Checkbox v-for="item in tags" :label="item.label" :key="item.label" true-value="true"></Checkbox>
        </Checkbox-group>
        <div>{{ fruit }}</div>
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
                testValue2: null
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
        }
    }
</script>
