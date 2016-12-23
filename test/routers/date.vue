<template>
    <date-picker :open="true" type="date" placeholder="选择日期" style="width: 200px"><span></span></date-picker>
</template>
<script>
    export default {
        data () {
            return {
                open: false,
                value3: ''
            }
        },
        methods: {
            handleClick () {
                this.open = !this.open;
            },
            handleChange (date) {
                this.value3 = date;
            },
            c (s) {
                console.log(s)
            },
            clear (s) {
                console.log(s)
            },
            ok (s) {
                console.log(s)
            }
        }
    }
</script>
