<template>
    {{ fruit |json}}
    <Checkbox-group :model.sync="fruit" @on-change="changed">
        <Checkbox value="a"></Checkbox>
        <Checkbox value="b"></Checkbox>
        <Checkbox value="c"></Checkbox>
    </Checkbox-group>
    <i-button @click="change">change</i-button>
</template>
<script>
    export default {
        data () {
            return {
                fruit: ['b']
            }
        },
        methods: {
            change () {
                this.fruit.splice(0, 1);
//                this.fruit = ['a']
            },
            changed (s) {
                console.log(s)
            }
        }
    }
</script>
