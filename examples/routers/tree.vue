<template>
    <Tree :data="db" show-checkbox></Tree>
</template>
<script>
    export default {
        data () {
            return {
                db:[
                    {
                        title: '父级',
                        checked: false,
                        children: [
                            {
                                title: '孩子',
                                checked: false,
                                children: [
                                    {
                                        title: '孙子',
                                        checked: true
                                    },
                                    {
                                        title: '孙子',
                                        checked: false,
                                        children: [
                                            {
                                                title: '曾孙',
                                                checked: false
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        title: '其他',
                        checked: false,
                        children: [
                            {
                                title: '其他孩子',
                                checked: true
                            },
                            {
                                title: '其他孩子2',
                                checked: true
                            }
                        ]
                    }
                ]
            }
        },
        methods: {

        },
        mounted () {

        }
    }
</script>
