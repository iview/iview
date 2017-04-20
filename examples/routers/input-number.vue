<template>
    <div>
        <Input-number
            :max="10"
            :min="-1"
            @on-change="e.push('onChange')"
            @on-focus="e.push('onFocus')"
            @on-blur="e.push('onBlur')"
            @on-enter="e.push('onEnter')"
            v-model="v1">
        </Input-number>
        {{ v1 }}
        <ul style="margin: 20px 0; padding: 3px; border: solid 1px #000;">
            <li v-for="item in e">{{ item }}</li>
        </ul>
        <div @click="c">change v1</div>
        <Input-number disabled :max="10" :min="1" :step="1.2" v-model="v2"></Input-number>
    </div>
</template>
<script>
    export default {
        props: {},
        data () {
            return {
                v1: 1,
                v2: 1,
                e: []
            };
        },
        computed: {},
        methods: {
            c () {
                this.v1 = 5;
            }
        }
    };
</script>