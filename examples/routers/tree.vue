<template>
    <div>
        <Tree :data="baseData" show-checkbox></Tree>
        <div @click="c">change</div>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                baseData: [{
                    expand: true,
                    title: 'parent 1',
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
                        expand: true,
                        checked: true,
                        children: [{
                            title: '<span style="color: red">leaf</span>'
                        }]
                    }]
                }]
            }
        },
        methods: {
            c () {
                this.baseData[0].expand = false;
            }
        }
    }
</script>
