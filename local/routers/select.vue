<template>
    <div>
        <!--<br><br><br><br><br><br><br><br><br><br><br>-->
        {{ city | json }}<br>
        <Button @click="city = 'hangzhou'">切换城市</Button>
        <br>
        <i-select :model.sync="city" style="width:200px" @on-change="change">
            <i-option-group label="热门城市">
                <i-option value="beijing">北京市</i-option>
                <i-option value="shanghai" disabled label="上海市">上海市2</i-option>
                <i-option value="shenzhen">深圳市</i-option>
            </i-option-group>
            <i-option-group label="二线城市">
                <i-option value="nanjing">南京市</i-option>
                <i-option value="hangzhou">杭州市</i-option>
            </i-option-group>
            <i-option value="heilongjiang" disabled>黑龙江市</i-option>
            <i-option-group label="热门城市">
                <i-option value="beijing">北京市</i-option>
                <i-option value="shanghai" disabled label="上海市">上海市2</i-option>
                <i-option value="shenzhen">深圳市</i-option>
            </i-option-group>
            <i-option-group label="二线城市">
                <i-option value="nanjing">南京市</i-option>
                <i-option value="hangzhou">杭州市</i-option>
            </i-option-group>
            <i-option value="heilongjiang" disabled>黑龙江市</i-option>
            <i-option-group label="热门城市">
                <i-option value="beijing">北京市</i-option>
                <i-option value="shanghai" disabled label="上海市">上海市2</i-option>
                <i-option value="shenzhen">深圳市</i-option>
            </i-option-group>
            <i-option-group label="二线城市">
                <i-option value="nanjing">南京市</i-option>
                <i-option value="hangzhou">杭州市</i-option>
            </i-option-group>
            <i-option value="heilongjiang" disabled>黑龙江市</i-option>
        </i-select>

        <i-select :model.sync="focus" style="width:200px" @on-change="change" clearable filterable label-in-value>
            <i-option value="beijing">北京市</i-option>
            <i-option value="shanghai" label="上海市">上海市</i-option>
            <i-option value="shenzhen" disabled>深圳市</i-option>
            <i-option value="guangzhou" label="广州市">广州市2</i-option>
            <i-option value="shijiazhuang" disabled>石家庄市</i-option>
            <i-option value="a">a市</i-option>
            <i-option value="b">b市</i-option>
            <i-option value="c">c市</i-option>
            <i-option value="d">d市</i-option>
            <i-option value="e">e市</i-option>
        </i-select>

        <i-select :model.sync="focus2" style="width:300px" @on-change="change" clearable multiple>
            <i-option value="beijing">北京市</i-option>
            <i-option value="shanghai">上海市</i-option>
            <i-option value="shenzhen" disabled>深圳市</i-option>
            <i-option value="guangzhou">广州市</i-option>
            <i-option value="shijiazhuang">石家庄市</i-option>
            <i-option value="a">a市</i-option>
            <i-option value="b">b市</i-option>
            <i-option value="c">c市</i-option>
            <i-option value="d">d市</i-option>
            <i-option value="e">e市</i-option>
        </i-select>

        <br><br><br><br><br><br><br><br><br><br><br><br>
    </div>
</template>
<script>
    import { iSelect, iOption, iOptionGroup, Button } from 'iview';

    export default {
        components: {
            iSelect,
            iOption,
            iOptionGroup,
            Button
        },
        props: {
        
        },
        data () {
            return {
                city: '',
                focus: '',
                focus2: ['beijing', 'guangzhou', 'b']
//                focus2: []
            }
        },
        computed: {
        
        },
        methods: {
            change (data) {
                console.log(data)
            }
        }
    }
</script>