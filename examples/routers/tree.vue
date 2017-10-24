<template>
    <div>
        <Tree :data="baseData" show-checkbox multiple></Tree>
        <Button @click="handleAdd">add</Button>
        <Button @click="handleUpdate">update</Button>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                baseData: [
                    {
                        expand: true,
                        title: 'parent 1',
                        children: [
                            {
                                title: 'parent 1-0',
                                expand: true,
                                disabled: true,
                                children: [
                                    {
                                        title: 'leaf',
                                        disableCheckbox: true
                                    },
                                    {
                                        title: 'leaf',
                                        checked: false
                                    }
                                ]
                            },
                            {
                                title: 'parent 1-1',
                                expand: true,
                                checked: true,
                                children: [
                                    {
                                        title: '<span style="color: red">leaf</span>',
                                        render: (h) => {
                                            return h('Button', {
                                                props: {
                                                    type: 'primary',
                                                    size: 'small'
                                                },
                                                on: {
                                                    click: () => {
                                                        this.cc();
                                                    }
                                                }
                                            }, '我是按钮')
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        },
        methods: {
            handleAdd () {
                this.baseData.push(
                    {
                        title: 'test name',
                        checked: true
                    }
                )
            },
            handleUpdate () {
                this.$set(this.baseData[0].children[0].children[1], 'checked', true);
            },
            cc () {
                console.log(99)
            }
        }
    }
</script>
