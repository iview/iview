### Button
可以考虑是否支持 @click，而不用 @click.native
### Input
使用 v-model，增加 on-input-change // todo 考虑更名
### RadioGroup
使用 v-model
### Radio
value 改为了 label，使用 v-model，废弃 checked
### Checkbox
使用 v-model
### CheckboxGroup
value 改为了 label，使用 v-model，废弃 checked
### Switch
废弃checked， 改为了 value，使用 v-model
### Badge
class 改为了 className
### InputNumber
使用 v-model
### Progress (名称有警告)
新增 on-status-change 事件
### Upload 
父级不能 computed Upload 的 fileList 了
### Collapse
废弃 activeKey，使用 v-model，key 是保留的，更名为 name
### Carousel
废弃 activeIndex，使用 v-model，v-for="n in slides.length",Vue2的数字循环，是从1开始的
### Tree
废弃 data，改为 value，使用 v-model，key 更名为 name，不能再 template 的prop 上使用 this
### Circle
改名为 iCircle
### Tabs
废弃 activeKey，改用 value，使用 v-model，key 更名为 name
### popper.js 将 prop: visible 移至 data 里
### Slider
支持 v-model
### Dropdown
DropdownItem key 改为 name, Dropdown 的 visible 要使用 @on-visible-change 捕获，不再 sync
DropdownItem 里，this.$parent.$parent 与1.0 有区别
### Menu
MenuItem 和 Submenu 的 key 改为了 name
Menu 的 activeKey 改为 activeName,openKeys 改为 openNames
### Cascader
Caspanel 的 sublist 从 prop -> data
### Select
model 改为 value，支持 v-model
### Page
class 改为 className
### DatePicker
使用 v-model
### LoadingBar
部分 prop 移至 data
### Modal
visible 改为 value，使用 v-model，style 改为 styles，$Modal 的关闭有改动，建议后面在纯 html 模式下测试
### Table
i-table 改为 Table
### Message
notice.vue 的 key 改为了 name，style 改为 styles
notification.vue 的 key 改为了 name，style 改为 styles
## Popper 
移除了 visible，使用 value 受控，可能涉及到的组件：Poptip、Tooltip