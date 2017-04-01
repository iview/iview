<template>
    <div style="width: 300px;">
        <i-input v-model="value11" icon="ios-clock-outline">
            <span slot="prepend">http://</span>
        </i-input>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                value11: '',
                value12: '',
                value13: '',
                select1: 'http',
                select2: 'com',
                select3: 'day'
            }
        }
    }
</script>
