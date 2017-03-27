<template>
    <Row>
        <Col :span="12">
            <Tabs type="card" closable @on-tab-remove="handleTagRemove">
                <Tab-pane label="标签一" v-if="tab0">标签一的内容</Tab-pane>
                <Tab-pane label="标签二" v-if="tab1">标签二的内容</Tab-pane>
                <Tab-pane label="标签三" v-if="tab2">标签三的内容</Tab-pane>
            </Tabs>
        </Col>
        <Col :span="12">
            <Tabs type="card" closable @on-tab-remove="handleTagRemove">
                <Tab-pane :label="tab.label" v-for="tab of tabs">{{tab.content}}</Tab-pane>
                <Button size="small" slot="right" @click="addTab">添加</Button>
            </Tabs>
        </Col>
    </Row>
</template>


<script lang="babel">
    export default {
        data () {
            return {
                tabs:[
                        {label:'标签0',content:'标签内容0'},
                        {label:'标签1',content:'标签内容1'},
                        {label:'标签2',content:'标签内容2'},
                ],
                tab0: true,
                tab1: true,
                tab2: true
            }
        },
        methods: {
            handleTagRemove (name) {
                this['tab' + name] = false;
            },
            addTab(){
                this.tabs.push({label:'标签'+this.tabs.length,content:'标签内容'+this.tabs.length});
            }
        }
    }
</script>
