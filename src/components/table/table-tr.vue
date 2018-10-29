<template>
    <tr :class="rowClasses(row._index)" :draggable="drag" v-on:dragstart="onDrag($event,row._index)" v-on:drop="onDrop($event,row._index)" v-on:dragover="allowDrop($event)" v-if="drag" ><slot></slot></tr>
    <tr :class="rowClasses(row._index)" v-else ><slot></slot></tr>
</template>
<script>
    export default {
        props: {
            row: Object,
            prefixCls: String,
            drag:Boolean
        },
        computed: {
            objData () {
                return this.$parent.objData;
            }
        },
        methods: {
             onDrag(e,index){
                e.dataTransfer.setData("index",index);
            },
            onDrop(e,index){
                var dragIndex = e.dataTransfer.getData("index");
                this.$parent.$parent.dragAndDrop(dragIndex,index);
                e.preventDefault();
            },
            allowDrop(e)
            {
                e.preventDefault();
            },
            rowClasses (_index) {
                return [
                    `${this.prefixCls}-row`,
                    this.rowClsName(_index),
                    {
                        [`${this.prefixCls}-row-highlight`]: this.objData[_index] && this.objData[_index]._isHighlight,
                        [`${this.prefixCls}-row-hover`]: this.objData[_index] && this.objData[_index]._isHover
                    }
                ];
            },
            rowClsName (_index) {
                return this.$parent.$parent.rowClassName(this.objData[_index], _index);
            },
        }
    };
</script>