<template>
    <i-select :model.sync="model9" style="width:200px">
        <i-option value="beijing" label="北京市">
            <span>北京</span>
            <span style="float:right;color:#ccc">Beiing</span>
        </i-option>
        <i-option value="shanghai" label="上海市">
            <span>上海</span>
            <span style="float:right;color:#ccc">ShangHai</span>
        </i-option>
        <i-option value="shenzhen" label="深圳市">
            <span>深圳</span>
            <span style="float:right;color:#ccc">ShenZhen</span>
        </i-option>
    </i-select>
</template>
<script>
    export default {
        data () {
            return {
                model9: 'shanghai'
            }
        }
    }
</script>
