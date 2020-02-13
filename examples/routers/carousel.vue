<template>
    <div>
        <!--#6076-->
        <Carousel loop @on-change="onChange">
            <CarouselItem>
                <div class="demo-carousel">111111111111</div>
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
    </div>
</template>
<script>
    export default {
        data () {
            return {

            }
        },
        methods: {
            onChange(oldIndex,newIndex){
                console.log(oldIndex,newIndex,'------')
            }
        },
        mounted () {

        }
    }
</script>
<style>
    .demo-carousel{
        height: 100px;
    }
</style>
<!--<style>-->
<!--    .demo-carousel{-->
<!--        height: 200px;-->
<!--        line-height: 200px;-->
<!--        text-align: center;-->
<!--        font-size: 20px;-->
<!--    }-->
<!--</style>-->
<!--<template>-->
<!--    <div>-->
<!--        <Carousel v-model="value1" loop @on-change="handleChange" @on-click="handlerClick">-->
<!--            <CarouselItem v-for="it in 4" :key="it">-->
<!--                <div class="demo-carousel">-->
<!--                    {{it}}<Button @click="handlerIndexClick(it)">点击事件</Button>-->
<!--                </div>-->
<!--            </CarouselItem>-->
<!--        </Carousel>-->
<!--        <Button @click="value1 = 2">change</Button>-->
<!--    </div>-->
<!--</template>-->
<!--<script>-->
<!--    export default {-->
<!--        data () {-->
<!--            return {-->
<!--                value1: 0-->
<!--            }-->
<!--        },-->
<!--        methods: {-->
<!--            handleChange (old, newval) {-->
<!--                console.log(old, newval,'-&#45;&#45;on-change');-->
<!--            },-->
<!--            handlerClick(index){-->
<!--                console.log(index,'&#45;&#45;&#45;&#45;&#45;&#45;on-click');-->
<!--            },-->
<!--            handlerIndexClick(it){-->
<!--                console.log(it,'&#45;&#45;&#45;&#45;&#45;&#45;it')-->
<!--            }-->
<!--        },-->
<!--    }-->
<!--</script>-->
