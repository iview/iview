<style lang="less">
    @import "../src/styles/index.less";
</style>
<style scoped>
nav {
    margin-bottom: 40px;
}

li {
    display: inline-block;
}

li + li {
    border-left: solid 1px #bbb;
    padding-left: 5px;
    margin-left: 5px;
}

.v-link-active {
    color: #bbb;
}
</style>
<template>
    <div>
        <nav>
            <ul>
                <li><a v-link="'/button'">Button</a></li>
                <li><a v-link="'/card'">Card</a></li>
                <li><a v-link="'/message'">Message</a></li>
                <li><a v-link="'/more'">More</a></li>
                <li><a v-link="'/page'">Page</a></li>
                <li><a v-link="'/poptip'">Poptip</a></li>
                <li><a v-link="'/tooltip'">Tooltip</a></li>
                <li><a v-link="'/radio'">Radio</a></li>
                <li><a v-link="'/select'">Select</a></li>
                <li><a v-link="'/slider'">Slider</a></li>
                <li><a v-link="'/step'">Step</a></li>
                <li><a v-link="'/switch'">Switch</a></li>
                <li><a v-link="'/alert'">Alert</a></li>
                <li><a v-link="'/tag'">Tag</a></li>
                <li><a v-link="'/input'">Input</a></li>
                <li><a v-link="'/cascader'">Cascader</a></li>
                <li><a v-link="'/transfer'">Transfer</a></li>
                <li><a v-link="'/table'">Table</a></li>
                <li><a v-link="'/dropdown'">Dropdown</a></li>
                <li><a v-link="'/tabs'">Tabs</a></li>
                <li><a v-link="'/menu'">Menu</a></li>
                <li><a v-link="'/date'">Date</a></li>
                <li><a v-link="'/form'">Form</a></li>
                <li><a v-link="'/carousel'">Carousel</a></li>
                <li><a v-link="'/rate'">Rate</a></li>
                <li><a v-link="'/upload'">Upload</a></li>
                <li><a v-link="'/tree'">Tree</a></li>
                <li><a v-link="'/notice'">Notice</a></li>
            </ul>
        </nav>
        <router-view></router-view>
    </div>
</template>
<script>
    module.exports = {
        data: function() {
            return {

            }
        },
        ready: function() {

        },
        beforeDestroy: function() {

        },
        methods: {

        }
    }
</script>
