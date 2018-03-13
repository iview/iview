<style lang="less">
    @import "../src/styles/index.less";
</style>
<style lang="less" scoped>
nav {
    margin-bottom: 40px;

    ul { display: flex; flex-wrap: wrap; }
    li { display: inline-block; }
    li + li { border-left: solid 1px #bbb; padding-left: 10px; margin-left: 10px; }
}
.container{ padding: 10px 40px 0; }
.v-link-active { color: #bbb; }
</style>
<template>
    <div class="container">
        <nav>
            <ul>
                <li><router-link to="/layout">Layout</router-link></li>
                <li><router-link to="/affix">Affix</router-link></li>
                <li><router-link to="/grid">Grid</router-link></li>
                <li><router-link to="/button">Button</router-link></li>
                <li><router-link to="/input">Input</router-link></li>
                <li><router-link to="/radio">Radio</router-link></li>
                <li><router-link to="/checkbox">Checkbox</router-link></li>
                <li><router-link to="/steps">Steps</router-link></li>
                <li><router-link to="/timeline">Timeline</router-link></li>
                <li><router-link to="/switch">Switch</router-link></li>
                <li><router-link to="/alert">Alert</router-link></li>
                <li><router-link to="/badge">Badge</router-link></li>
                <li><router-link to="/tag">Tag</router-link></li>
                <li><router-link to="/input-number">InputNumber</router-link></li>
                <li><router-link to="/progress">Progress</router-link></li>
                <li><router-link to="/upload">Upload</router-link></li>
                <li><router-link to="/collapse">Collapse</router-link></li>
                <li><router-link to="/carousel">Carousel</router-link></li>
                <li><router-link to="/card">Card</router-link></li>
                <li><router-link to="/tree">Tree</router-link></li>
                <li><router-link to="/rate">Rate</router-link></li>
                <li><router-link to="/circle">Circle</router-link></li>
                <li><router-link to="/tabs">Tabs</router-link></li>
                <li><router-link to="/tooltip">Tooltip</router-link></li>
                <li><router-link to="/poptip">Poptip</router-link></li>
                <li><router-link to="/slider">Slider</router-link></li>
                <li><router-link to="/dropdown">Dropdown</router-link></li>
                <li><router-link to="/breadcrumb">Breadcrumb</router-link></li>
                <li><router-link to="/menu">Menu</router-link></li>
                <li><router-link to="/spin">Spin</router-link></li>
                <li><router-link to="/cascader">Cascader</router-link></li>
                <li><router-link to="/select">Select</router-link></li>
                <li><router-link to="/backtop">Backtop</router-link></li>
                <li><router-link to="/page">Page</router-link></li>
                <li><router-link to="/transfer">Transfer</router-link></li>
                <li><router-link to="/date">Date</router-link></li>
                <li><router-link to="/form">Form</router-link></li>
                <li><router-link to="/table">Table</router-link></li>
                <li><router-link to="/loading-bar">LoadingBar</router-link></li>
                <li><router-link to="/modal">Modal</router-link></li>
                <li><router-link to="/message">Message</router-link></li>
                <li><router-link to="/notice">Notice</router-link></li>
                <li><router-link to="/avatar">Avatar</router-link></li>
                <li><router-link to="/color-picker">ColorPicker</router-link></li>
                <li><router-link to="/auto-complete">AutoComplete</router-link></li>
                <li><router-link to="/scroll">Scroll</router-link></li>
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
        mounted: function() {

        },
        beforeDestroy: function() {

        },
        methods: {

        }
    }
</script>
