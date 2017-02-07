<template>
    <Tree
        :data.sync="treeData"
        :show-checkbox="true"
        :multiple="true"
        :on-select="selectFn"
        :on-check="checkFn"></Tree>
</template>
<script>
    export default {
        data: function() {
            return {
                treeData: [{
                    title: 'parent 1',
                    selected: false,
                    node: [{
                        title: 'parent 1-0',
                        expand: true,
                        disabled: true,
                        node: [{
                            title: 'leaf',
                            disableCheckbox: true
                        }, {
                            title: 'leaf',
                        }]
                    }, {
                        title: 'parent 1-1',
                        checked: true,
                        node: [{
                            title: '<span style="color: red">sss</span>',
                        }]
                    }]
                }]
            }
        },
        methods: {
            selectFn(data){
//                console.log(data);
            },
            checkFn(data){
//                console.log(data);
            }
        }
    }
</script>
