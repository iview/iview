<template>
    <Tree :data="baseData" show-checkbox @on-check-change="handleChange" @on-toggle-expand="showExpand"></Tree>
</template>
<script>
    export default {
        data () {
            return {
                bd: [],
                baseData: [
                    {
                        title: 'parent',
                        id: '1-0',
                        expand: true,
                        children: [
                            {
                                title: 'child1',
                                id: '1-1',
                                expand: true,
                                children: [
                                    {
                                        title: 'child1-1-1',
                                        id: '1-1-1'
                                    },
                                    {
                                        title: 'child1-1-2',
                                        id: '1-1-2'
                                    }
                                ]
                            },
                            {
                                title: 'child2',
                                id: '1-2'
                            }
                        ]
                    }
                ]
            }
        },
        methods: {
            handleSelectChange (data) {
                console.log(data);
            },
            updateTree (data) {
                data[0].children[0].checked = true;
//                data[0].children[0].children[0].checked = true;
//                data[0].children[0].children[1].checked = true;
            },
            handleChange () {
                console.log(1)
            },
            showExpand (payload) {
                console.log(payload)
            }
        },
        mounted () {
            this.updateTree(this.baseData);
        }
    }
</script>
