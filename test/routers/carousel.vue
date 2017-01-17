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
        <i-col span="4">
            Switch To
            <Button-group>
                <i-button @click="currentIndex = 0">0</i-button>
                <i-button @click="currentIndex = 1">1</i-button>
                <i-button @click="currentIndex = 2">2</i-button>
            </Button-group>
        </i-col>
        <i-col span="4">
            <i-button @click="push">Push</i-button>
            <i-button @click="remove = true">Remove Front</i-button>
        </i-col>
        <i-col span="4">
            <p>Dots</p>
            <Button-group>
                <i-button @click="dots = 'inside'">Inside</i-button>
                <i-button @click="dots = 'outside'">Outside</i-button>
                <i-button @click="dots = 'none'">None</i-button>
            </Button-group>
        </i-col>
        <i-col span="4">
            <p>Trigger</p>
            <Button-group>
                <i-button @click="trigger = 'click'">Click</i-button>
                <i-button @click="trigger = 'hover'">Hover</i-button>
            </Button-group>
        </i-col>
        <i-col span="4">
            Arrow
            <Button-group>
                <i-button @click="arrow = 'hover'">Hover</i-button>
                <i-button @click="arrow = 'always'">Always</i-button>
                <i-button @click="arrow = 'never'">Never</i-button>
            </Button-group>
        </i-col>
    </Row>
    <Carousel style="width: 50%; border: solid 1px #000"
        :current-index.sync="currentIndex"
        :autoplay="autoplay"
        :autoplay-speed="autoplaySpeed"
        :dots="dots"
        :trigger="trigger"
        :arrow="arrow"
        @on-change="slideChange"
        easing="linear">
        <Carousel-item v-if="!remove">
            <Alert type="warning" show-icon>
                警告提示文案
                <template slot="desc">
                    警告的提示描述文案警告的提示描述文案警告的提示描述文案
                </template>
            </Alert>
        </Carousel-item>
        <Carousel-item style="text-align: center">
            <Icon type="checkmark" style="font-size: 5em"></Icon>
        </Carousel-item>
        <Carousel-item>test3</Carousel-item>
        <Carousel-item v-for="item in pushItem" track-by="$index">
            <Icon type="checkmark" style="font-size: 5em"></Icon>{{item}}
        </Carousel-item>
    </Carousel>
    <div>
        <p v-for="item in log">{{item}}</p>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                currentIndex: 0,
                autoplay: true,
                autoplaySpeed: 2000,
                remove: false,
                pushItem: [],
                arrow: 'hover',
                trigger: 'click',
                dots: 'inside',
                log: []
            }
        },
        methods: {
            push () {
                this.pushItem.push('test');
            },
            slideChange (from, to) {
                this.log.push(`From ${from} To ${to}`);
            }
        }
    }
</script>
