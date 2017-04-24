<template>
    <Select v-model="fields.pid" filterable @on-change="clear">
        <div class="search"><Input v-model="search" @on-change="filter" placeholder="请输入..." style="width: 300px"></Input></div>
        <Option v-for="item in option" :value="item.value" :label="item.label"></Option>
    </Select>
</template>

<script>
    export default {
        data () {
            return {
                search : '',
                fields: {
                    pid: 0
                },
                filterOption :[],
                option : []
            }
        },
        mounted : function(){
            const arr = [
                {
                    value : 0,
                    label : "一级菜单"
                },
                {
                    value : 1,
                    label : "二级菜单"
                },
                {
                    value : 2,
                    label : "三级菜单"
                }
            ];
            this.filterOption = arr;
            this.option = JSON.parse( JSON.stringify( arr ) );
        },
        methods : {
            clear : function(pid){
                this.search = '';
                this.filter();
            },
            filter : function(){

                this.option = [];
                const filterData = [];

                this.filterOption.forEach((item)=>{
                    if( item.label.indexOf( this.search ) > -1 ){
                        filterData.push( item );
                    }
                });
                this.option = filterData;
                console.log(this.fields.pid)
            }
        }
    }
</script>