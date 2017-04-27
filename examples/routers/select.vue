<template>
    <div style="width: 200px;margin: 100px;">
        <Select v-model="fields.pid" filterable placement="top">
            <Option :value="0" label="一级菜单"></Option>
            <Option :value="1" label="二级菜单"></Option>
        </Select>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                fields: {
                    pid: 0
                }
            }
        }
    }
</script>