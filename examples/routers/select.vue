<template>
    <Select v-model="fields.pid" filterable>
        <Option :value="0" label="一级菜单"></Option>
        <Option :value="1" label="二级菜单"></Option>
    </Select>
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