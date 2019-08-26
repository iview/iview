<template>
    <div>
        <Tree ref="tree" :data="data2" check-directly show-checkbox></Tree>
        <Button @click="getCheckedNodes" type="primary">getCheckedNodes</Button>
        <Button @click="getCheckedAndIndeterminateNodes" type="primary">getCheckedAndIndeterminateNodes</Button>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                data2: [
                    {
                        title: 'parent 1',
                        expand: true,
                        disabled: true,
                        children: [
                            {
                                title: 'parent 1-1',
                                expand: true,
                                disabled: true,
                                children: [
                                    {
                                        title: 'leaf 1-1-1',
                                        checked: true
                                    },
                                    {
                                        title: 'leaf 1-1-2',
                                    }
                                ]
                            },
                            {
                                title: 'parent 1-2',
                                expand: true,
                                children: [
                                    {
                                        title: 'leaf 1-2-1',
                                        disabled: true,
                                        checked: true
                                    },
                                    {
                                        title: 'leaf 1-2-2',
                                        expand: true,
                                        children: [
                                            {
                                                title: 'leaf 1-2-2-1',
                                                disabled: true,
                                                checked: true
                                            }
                                        ]
                                    },
                                    {
                                        title: 'leaf 1-2-3',
                                        expand: true,
                                        children: [
                                            {
                                                title: 'leaf 1-2-3-1'
                                            },
                                            {
                                                title: 'leaf 1-2-3-2',
                                                disabled: true
                                            },
                                            {
                                                title: 'leaf 1-2-3-3'
                                            }
                                        ]
                                    },
                                ]
                            },
                            {
                                title: 'parent 1-3',
                                expand: true,
                                children: [
                                    {
                                        title: 'leaf 1-3-1',
                                        disabled: true,
                                        checked: true
                                    },
                                    {
                                        title: 'leaf 1-3-2',
                                        expand: true
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        },
        methods: {
            getCheckedNodes () {
                console.log(this.$refs.tree.getCheckedNodes());
            },
            getCheckedAndIndeterminateNodes () {
                console.log(this.$refs.tree.getCheckedAndIndeterminateNodes());
            }
        }
    }
</script>
