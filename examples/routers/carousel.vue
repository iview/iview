<style>
    .demo-carousel{
        height: 200px;
        line-height: 200px;
        text-align: center;
        color: #fff;
        font-size: 20px;
        background: #506b9e;
    }
</style>
<template>
    <div style="width: 400px;">
        <Carousel v-model="value1" loop arrow="always" @on-change="handleChange">
            <CarouselItem>
                <div class="demo-carousel">1</div>
            </CarouselItem>
            <CarouselItem>
                <div class="demo-carousel">2</div>
            </CarouselItem>
            <CarouselItem>
                <div class="demo-carousel">3</div>
            </CarouselItem>
            <CarouselItem>
                <div class="demo-carousel">4</div>
            </CarouselItem>
        </Carousel>
        <Button @click="value1 = 2">change</Button>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                value1: 0
            }
        },
        methods: {
            handleChange (old, newval) {
                console.log(old, newval);
            }
        }
    }
</script>
