<style lang="less">
    @import "../src/styles/index.less";
</style>
<template>
    <div class="container">
        <div>
            <div>
                <span><router-link to="/split">Split</router-link></span>
                <span><router-link to="/layout">Layout</router-link></span>
                <span><router-link to="/affix">Affix</router-link></span>
                <span><router-link to="/anchor">Anchor</router-link></span>
                <span><router-link to="/grid">Grid</router-link></span>
                <span><router-link to="/button">Button</router-link></span>
                <span><router-link to="/input">Input</router-link></span>
                <span><router-link to="/radio">Radio</router-link></span>
                <span><router-link to="/checkbox">Checkbox</router-link></span>
                <span><router-link to="/steps">Steps</router-link></span>
                <span><router-link to="/timeline">Timeline</router-link></span>
                <span><router-link to="/switch">Switch</router-link></span>
                <span><router-link to="/alert">Alert</router-link></span>
                <span><router-link to="/badge">Badge</router-link></span>
                <span><router-link to="/tag">Tag</router-link></span>
                <span><router-link to="/input-number">InputNumber</router-link></span>
                <span><router-link to="/progress">Progress</router-link></span>
                <span><router-link to="/upload">Upload</router-link></span>
                <span><router-link to="/collapse">Collapse</router-link></span>
                <span><router-link to="/carousel">Carousel</router-link></span>
                <span><router-link to="/card">Card</router-link></span>
                <span><router-link to="/tree">Tree</router-link></span>
                <span><router-link to="/rate">Rate</router-link></span>
                <span><router-link to="/circle">Circle</router-link></span>
                <span><router-link to="/tabs">Tabs</router-link></span>
                <span><router-link to="/tooltip">Tooltip</router-link></span>
                <span><router-link to="/poptip">Poptip</router-link></span>
                <span><router-link to="/slider">Slider</router-link></span>
                <span><router-link to="/dropdown">Dropdown</router-link></span>
                <span><router-link to="/breadcrumb">Breadcrumb</router-link></span>
                <span><router-link to="/menu">Menu</router-link></span>
                <span><router-link to="/spin">Spin</router-link></span>
                <span><router-link to="/cascader">Cascader</router-link></span>
                <span><router-link to="/select">Select</router-link></span>
                <span><router-link to="/backtop">Backtop</router-link></span>
                <span><router-link to="/page">Page</router-link></span>
                <span><router-link to="/transfer">Transfer</router-link></span>
                <span><router-link to="/date">Date</router-link></span>
                <span><router-link to="/form">Form</router-link></span>
                <span><router-link to="/table">Table</router-link></span>
                <span><router-link to="/loading-bar">LoadingBar</router-link></span>
                <span><router-link to="/modal">Modal</router-link></span>
                <span><router-link to="/message">Message</router-link></span>
                <span><router-link to="/notice">Notice</router-link></span>
                <span><router-link to="/avatar">Avatar</router-link></span>
                <span><router-link to="/color-picker">ColorPicker</router-link></span>
                <span><router-link to="/auto-complete">AutoComplete</router-link></span>
                <span><router-link to="/scroll">Scroll</router-link></span>
                <span><router-link to="/divider">Divider</router-link></span>
                <span><router-link to="/time">Time</router-link></span>
                <span><router-link to="/cell">Cell</router-link></span>
                <span><router-link to="/drawer">Drawer</router-link></span>
                <span><router-link to="/icon">Icon</router-link></span>
                <span><router-link to="/list">List</router-link></span>
            </div>
        </div>
        <div style="margin: 50px">
            <router-view></router-view>
        </div>
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
