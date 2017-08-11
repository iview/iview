<template>
    <div>
        <Radio true-value="true" false-value="false" v-model="testValue">test</Radio> {{ testValue }}
        <Radio-group v-model="date.sex">
            <div v-if="show">
                <Radio label="male" true-value="true" false-value="false"></Radio>
                <Radio label="female" true-value="true" false-value="false"></Radio>
            </div>
        </Radio-group>
        {{ date }}
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
                show: false,
                testValue: null
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
