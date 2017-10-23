<template>
    <div>
        <Tree :data="baseData" show-checkbox></Tree>
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
                this.$set(this.baseData[0].children[0], 'disabled', false);
            }
        }
    }
</script>
