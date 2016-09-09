<template>
    <div>
        <Radio :checked.sync="radio">梁灏</Radio>
        {{ radio | json }}
        <div @click="radio = false">单项切换</div>
        <br><br><br>
        <Radio-group :model.sync="radioGroup" size="large" type="button" @on-change="changeGroup">
            <Radio value="梁灏"></Radio>
            <Radio value="段模"></Radio>
            <Radio value="倪斌"></Radio>
        </Radio-group>
        {{ radioGroup | json }}
        <div @click="radioGroup = '梁灏'">多项切换</div>
    </div>
</template>
<script>
    import { Radio } from 'iview';

    const RadioGroup = Radio.Group;

    export default {
        components: {
            Radio,
            RadioGroup
        },
        props: {
        
        },
        data () {
            return {
                radio: true,
                radioGroup: '段模'
            }
        },
        computed: {
        
        },
        methods: {
            changeGroup (data) {
                console.log(data);
            }
        }
    }
</script>