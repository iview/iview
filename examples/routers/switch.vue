<template>
    <div>
        <i-switch v-model="m1" :true-value="1" :false-value="0">
            <span slot="open">开</span>
            <span slot="close">关</span>
        </i-switch>
        {{ m1 }}
        <div @click="m1 = 0">toggle</div>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                m1: 1
            }
        },
        methods: {
            change (status) {
                console.log(status)
            }
        }
    }
</script>
