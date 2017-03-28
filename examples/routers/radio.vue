<template>
    <div>
        <Radio-group v-model="date.sex">
            <Radio label="male form"></Radio>
            <Radio label="female"></Radio>
        </Radio-group>
        <Button @click="handleChange">change</Button>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                date: {
                    sex: ''
                }
            }
        },
        methods: {
            handleChange () {
                this.date.sex = 'male form';
            }
        }
    }
</script>
