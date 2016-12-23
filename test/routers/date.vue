<template>
    <date-picker readonly confirm format="MM/dd/yy" :open="open" :value="value3" @on-change="handleChange" type="date" @on-open-change="c" @on-clear="clear" @on-ok="ok">
        <a href="javascript:void(0)" @click="handleClick">
            <Icon type="ios-calendar-outline"></Icon>
            <template v-if="value3 === ''">选择日期</template>
            <template v-else>{{ value3 }}</template>
        </a>
    </date-picker>
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
