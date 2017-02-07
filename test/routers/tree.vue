<template>
    <Tree
        :data.sync="treeData"
        :show-checkbox="true"
        :multiple="true"
        @on-select-change="selectFn"
        @on-check-change="checkFn"></Tree>
</template>
<script>
    export default {
        data: function() {
            return {
                treeData: [{
                    expand: true,
                    title: 'parent 1',
                    selected: false,
                    children: [{
                        title: 'parent 1-0',
                        expand: true,
                        disabled: true,
                        children: [{
                            title: 'leaf',
                            disableCheckbox: true
                        }, {
                            title: 'leaf',
                        }]
                    }, {
                        title: 'parent 1-1',
                        checked: true,
                        children: [{
                            title: '<span style="color: red">sss</span>',
                        }]
                    }]
                }]
            }
        },
        methods: {
            selectFn(data){
                console.log(data);
            },
            checkFn(data){
                console.log(data);
            }
        }
    }
</script>
