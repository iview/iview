<template>
    <div>
        <Carousel v-model="v1" dots="outside" @on-change="hc" :autoplay="false">
            <Carousel-item>
                <div class="demo-case-img">
                    <img src="https://file.iviewui.com/dist/84b3cded4163febf9dae090e76129322.png">
                </div>
            </Carousel-item>
            <Carousel-item>
                <div class="demo-case-img">
                    <img src="https://file.iviewui.com/dist/84b3cded4163febf9dae090e76129322.png">
                </div>
            </Carousel-item>
            <Carousel-item>
                <div class="demo-case-img">
                    <img src="https://file.iviewui.com/dist/84b3cded4163febf9dae090e76129322.png">
                </div>
            </Carousel-item>
        </Carousel>
        <Button @click="v1 = 2">change</Button>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                v1: 0
            }
        },
        methods: {
            hc (...args) {
                console.log(args);
            }
        }
    }
</script>
<style lang="less">
    .demo-case-img {
        img{
            width: 500px;
        }
    }
</style>

