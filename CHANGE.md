## table-expand插件开发说明
1. 扩展方式
    基于`iview v2.0.0-rc.9`现有项目文件扩展，改动文件有:
    * `src/components/table/cell.vue`
    * `src/components/table/table.vue`
    * `src/components/table/table-body.vue`
    * `src/components/table/table-head.vue`
    * `src/styles/components/table.less`

2. 测试及使用说明
    个人不善于编写单元测试，故无此项；在项目演示目录`examples/routers/table.vue`中有相关使用示例.
    
3. 代码说明
    expand 开发过程中尝试过slot,v-html方式用来展示expand的页面内容，感觉都不太合适；最终选择了vue组件的方式实现了效果。用户在使用过程中只需要在`columns:expand`列中声明 expand="expandTemplate" 属性即可； ***此参数需要传递一个Vue组件***； 此外，在此组件中可以获取`props: {row: Object, index: Number}`; 该数据为当前扩展行的`row`。
    
    `expandTemplate`的代码：
    
    ```
    <template>
        <div>
            我的名字叫【{{row.name}}】,今年{{row.age}}岁,家住在:{{row.address}}
        </div>
    </template>
    <script>
        export default {
            props: {
                row: Object,
                index: Number
            }
        };
    </script>
    ```

4.  代码改动说明
    为了增加表格事件使用的灵活性，在`click`事件中，增加返回了第二参数`index`；使得用户使用`行点击`事件得以触发行扩展功能。
   
## 新增内容说明
   
1. 新增属性
    * 不再使用此属性
2. 新增方法
    * `showExpand(index)`：显示/影藏`expand`扩展行； 参数：index 行号
    * `showExpandAll(status)`：显示/影藏所有`expand`扩展行；参数：status Boolean
    * `getExpandRows()`：获取已展开的行数
3. 新增事件
    * `on-expand`： 单行展开触发；参数：expands 已展开行数, row 当前行, status 状态 true/false, index 行号
    * `on-expand-all`： 单行展开触发；参数：expands 已展开行数, rows 所有行数据, status 状态 true/false
4. columns 新增类型：`expand`
    * 该属性和selection一致
    * `expand`： 此属性增加接收VUE组件，同时兼容原`render`的使用方法, 用户处理 expand 显示内容
    * `hidden`： Boolean, 用于隐藏当前列， 由于使用了 columns 显示 expand 内容；如果用户没有定义 expand 列，则会导致 expand 不显示，故增加此项，如果用户不愿意添加默认的显示效果，可以影藏当前列，同时保证功能不受影响。

### 其它
由于时间有限，此功能仅能抽出大半天的时间，如果不完善的地方请指出，我好修改。
希望能为iview提出一份贡献；