<template>
    <div>
        <Carousel v-model="v1" dots="outside" @on-change="hc" :autoplay="true">
            <Carousel-item>
                <div class="demo-case-img">
                    <img src="https://file.iviewui.com/dist/84b3cded4163febf9dae090e76129322.png">
                </div>
            </Carousel-item>
            <Carousel-item>
                <div class="demo-case-img">
                    <img src="https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo_top_ca79a146.png">
                </div>
            </Carousel-item>
            <Carousel-item>
                <div class="demo-case-img">
                    <img src="https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2368407448,2365500091&fm=173&app=25&f=JPEG?w=550&h=315&s=BFA878234F5C56431CC4A5CE0100E0B2">
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

