<template>
    <Tabs type="card" @on-contextmenu="handleContextMenu">
        <TabPane label="标签一" name="tab1" context-menu>标签一的内容</TabPane>
        <TabPane label="标签二" name="tab2">标签二的内容</TabPane>
        <TabPane label="标签三" name="tab3" context-menu>标签三的内容</TabPane>
        <template slot="contextMenu">
            <DropdownItem @click.native="handleContextMenuEdit">编辑</DropdownItem>
            <DropdownItem @click.native="handleContextMenuDelete" style="color: #ed4014">删除</DropdownItem>
        </template>
    </Tabs>
</template>
<script>
    export default {
        data () {
            return {
                contextData: null
            }
        },
        methods: {
            handleContextMenu (data) {
                this.contextData = data;
            },
            handleContextMenuEdit () {
                this.$Message.info('Click edit of ' + this.contextData.name);
            },
            handleContextMenuDelete () {
                this.$Message.info('Click delete of ' + this.contextData.name);
            }
        }
    }
</script>
