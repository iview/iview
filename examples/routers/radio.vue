<template>
    <div>
        <Radio-group v-model="date.sex">
            <div v-if="show">
                <Radio label="male"></Radio>
                <Radio label="female"></Radio>
            </div>
        </Radio-group>
        <Button @click="handleChange">change</Button>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                date: {
                    sex: 'male'
                },
                show: false
            }
        },
        methods: {
            handleChange () {
//                this.date.sex = 'male form';
                this.show = true;
            }
        }
    }
</script>
