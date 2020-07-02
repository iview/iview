<template>
   <div>
       <Tabs type="card" @on-contextmenu="handleContextMenu">
           <TabPane label="标签一" name="tab1" context-menu>标签一的内容</TabPane>
           <TabPane label="标签二" name="tab2">标签二的内容</TabPane>
           <TabPane label="标签三" name="tab3" context-menu>标签三的内容</TabPane>
           <template slot="contextMenu">
               <DropdownItem @click.native="handleContextMenuEdit">编辑</DropdownItem>
               <DropdownItem @click.native="handleContextMenuDelete" style="color: #ed4014">删除</DropdownItem>
           </template>
       </Tabs>
       <Divider></Divider>
       <Tabs type="card" :draggable="true" @on-drag-drop="handleDragDrop">
           <TabPane v-for="(tab, index) in tabs" :key="index" :label="tab.label" :name="tab.name">{{ tab.label }}</TabPane>
       </Tabs>
   </div>
</template>
<script>
    export default {
        data () {
            return {
                contextData: null,
                tabs: [
                    {
                        label: '标签一',
                        name: 'name1'
                    },
                    {
                        label: '标签二',
                        name: 'name2'
                    },
                    {
                        label: '标签三',
                        name: 'name3'
                    },
                    {
                        label: '标签四',
                        name: 'name4'
                    },
                    {
                        label: '标签五',
                        name: 'name5'
                    }
                ]
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
            },
            handleDragDrop (name, newName, a, b, names) {
                this.tabs.splice(b,1,...this.tabs.splice(a, 1 , this.tabs[b]));
            }
        }
    }
</script>
