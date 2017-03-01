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
                <li><router-link to="/affix">Affix</router-link></li>
                <li><router-link to="/grid">Grid</router-link></li>
                <li><router-link to="/button">Button</router-link></li>
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
