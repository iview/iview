<template>
    <Row>
        <i-col span="2">
            Current Index
            <p>{{ currentIndex }}</p>
        </i-col>
        <i-col span="2">
            <p>Autoplay</p>
            <Switch :checked.sync="autoplay" size="small"></Switch>
        </i-col>
        <i-col span="4">
            Speed <Slider :value.sync="autoplaySpeed" :min="300" :max="5000"></Slider>
        </i-col>
    </Row>
    <Carousel style="width: 400px"
        :current-index.sync="currentIndex"
        :autoplay="autoplay"
        :autoplay-speed="autoplaySpeed">
        <Carousel-item>
            <Alert type="warning" show-icon>
                警告提示文案
                <template slot="desc">
                    警告的提示描述文案警告的提示描述文案警告的提示描述文案
                </template>
            </Alert>
        </Carousel-item>
        <Carousel-item>test2</Carousel-item>
        <Carousel-item>test3</Carousel-item>
    </Carousel>
</template>
<script>
    export default {
        data () {
            return {
                currentIndex: 0,
                autoplay: true,
                autoplaySpeed: 2000
            }
        }
    }
</script>
