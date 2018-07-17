<template>
    <Slider :value="10" :tip-format="format">

    </Slider>
</template>
<script>
    import { Slider } from 'iview';
    export default {
        components: { Slider },
        data () {
            return {

            }
        },
        methods: {
            format (val) {
                return `进度：${val}%`
            }
        }
    }
</script>
