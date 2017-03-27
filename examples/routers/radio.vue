<template>
    <div>
        <Radio-group v-model="sex">
            <Radio :label="0">男</Radio>
            <Radio :label="1">女</Radio>
        </Radio-group>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                sex: 0
            }
        }
    }
</script>
