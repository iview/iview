<template>
    <div style="width: 400px;margin:100px;">
        {{ value }}
        <Slider @on-change="change" :step="15"></Slider>
        <Slider :value="40" :tip-format="format"></Slider>
        <Slider :value.sync="value" show-input show-stops range @on-change="change" :step="13"></Slider>
        <!--<Slider :max="10"></Slider>-->
        <!--<Slider :step="13"></Slider>-->
        <!--<Slider :step="13" :max="60"></Slider>-->
        <Icon type="checkmark-circled" size="40" color="#f60"></Icon>
        <p>附近的首付款是东方红看就是</p>
        <div class="ivu-article">
            <a href="http://www.iviewui.com" target="_blank">iView</a>
        </div>
    </div>
</template>
<script>
    import { Slider, Icon } from 'iview';
    export default {
        components: { Slider, Icon },
        data () {
            return {
                value: [20, 50]
            }
        },
        methods: {
            format (val) {
                return null;
                return `进度：${val}%`
            },
            change (data) {
//                console.log(data)
            }
        }
    }
</script>
