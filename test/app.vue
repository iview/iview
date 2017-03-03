<style lang="less">
    @import "../src/styles/index.less";
</style>
<style scoped>
nav { margin-bottom: 40px; }
ul { display: flex; flex-wrap: wrap; }
li { display: inline-block; }
li + li { border-left: solid 1px #bbb; padding-left: 10px; margin-left: 10px; }
.container{ padding: 10px 40px; }
.v-link-active { color: #bbb; }
</style>
<template>
    <div class="container">
        <nav>
            <ul>
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
