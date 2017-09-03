<template>
    <div>
        <i-switch v-model="m1" :before-change="beforeChange">
            <span slot="open">开</span>
            <span slot="close">关</span>
        </i-switch>
        {{ m1 }}
        <div @click="m1 = !m1">toggle</div>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                m1: false
            }
        },
        methods: {
            change (status) {
                console.log(status)
            },
            beforeChange (currentValue) {
                return currentValue ? true : new Promise((resolve) => {
                    setTimeout(function () {
                        resolve(true);
                    }, 1000);
                });
            }
        }
    }
</script>
