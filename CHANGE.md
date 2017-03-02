### Input
使用 v-model
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