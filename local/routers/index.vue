<style>

</style>
<template>
    <div>welcome</div>
    <Checkbox-group :model.sync="fruit">
        <Checkbox value="香蕉"></Checkbox>
        <Checkbox value="苹果"></Checkbox>
        <Checkbox value="西瓜"></Checkbox>
    </Checkbox-group>
    {{ fruit | json }}
    <Button @click="update">update fruit</Button>
</template>
<script>
    import { Checkbox, Icon, Button } from 'iview';
    const CheckboxGroup = Checkbox.Group;

    export default {
        components: { Checkbox, CheckboxGroup, Icon, Button },
        props: {
        
        },
        data () {
            return {
                fruit: ['苹果']
            }        
        },
        methods: {
            update () {
                this.fruit = ['香蕉', '西瓜']
            }
        }
    }
</script>
