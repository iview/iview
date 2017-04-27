<template>
    <div>
        <Checkbox-group v-model="fruit">
            <Checkbox v-for="item in tags" :label="item.label" :key="item"></Checkbox>
        </Checkbox-group>
        <div>{{ fruit }}</div>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                social: ['facebook', 'github'],
                fruit: ['苹果'],
                tags: []
            }
        },
        mounted () {
            setTimeout(() => {
                this.tags = [
                    {
                        label: '香蕉'
                    },
                    {
                        label: '苹果'
                    },
                    {
                        label: '西瓜'
                    }
                ]
            }, 1000);
        }
    }
</script>
