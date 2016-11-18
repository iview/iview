<style>
    body{
        height: auto;
    }
</style>
<template>
    <div style="margin: 50px;">
        <Transfer
            :data="data"
            filterable
            :target-keys.sync="targetKeys"
            :operations="['向左移动','向右移动']"
            :filter-method="filterMethod"
            @on-change="change">
            <!--<div :style="{float: 'right', margin: '5px'}">-->
                <!--<i-button type="ghost" size="small" @click="getMock">刷新</i-button>-->
            <!--</div>-->
        </Transfer>
    </div>
</template>
<script>
    import { Transfer, iButton } from 'iview';

    export default {
        props: {
        
        },
        data () {
            return {
                data: [{"key":"0","label":"content1","description":"description of content1","disabled":true},{"key":"1","label":"content2","description":"description of content2","disabled": false},{"key":"2","label":"content3","description":"description of content3","disabled":false},{"key":"3","label":"content4","description":"description of content4","disabled":false},{"key":"4","label":"content5","description":"description of content5","disabled":true},{"key":"5","label":"content6","description":"description of content6","disabled":false},{"key":"6","label":"content7","description":"description of content7","disabled":false},{"key":"7","label":"content8","description":"description of content8","disabled":false},{"key":"8","label":"content9","description":"description of content9","disabled":true},{"key":"9","label":"content10","description":"description of content10","disabled":false},{"key":"10","label":"content11","description":"description of content11","disabled":false},{"key":"11","label":"content12","description":"description of content12","disabled":false},{"key":"12","label":"content13","description":"description of content13","disabled":true},{"key":"13","label":"content14","description":"description of content14","disabled":false},{"key":"14","label":"content15","description":"description of content15","disabled":false},{"key":"15","label":"content16","description":"description of content16","disabled":false},{"key":"16","label":"content17","description":"description of content17","disabled":false},{"key":"17","label":"content18","description":"description of content18","disabled":true},{"key":"18","label":"content19","description":"description of content19","disabled":false},{"key":"19","label":"content20","description":"description of content20","disabled":false}],
                targetKeys: ['1','2','3','5','8'],
                selectedKeys: ['0','1','4', '5','6','9']
            }
        },
        computed: {
        
        },
        methods: {
            change (newTargetKeys, direction, moveKeys) {
//                console.log(newTargetKeys)
                this.targetKeys = newTargetKeys;
            },
            filterMethod (data, query) {
                if (query === '') return true;
                return data.label === query;
            },
            getMock () {

            }
        }
    }
</script>