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
    </Row>
    <Row>
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
        <i-col span="4">
            Height
            <i-button @click="height = 'auto'">Auto</i-button>
            <i-button @click="height = 80">Manual</i-button>
            <Slider v-if="height !== 'auto'" :value.sync="height" :min="50" :max="200"></Slider>
        </i-col>
    </Row>
    <Carousel style="width: 50%; border: solid 1px #000; margin-top: 20px;"
        :current-index.sync="currentIndex"
        :autoplay="autoplay"
        :autoplay-speed="autoplaySpeed"
        :dots="dots"
        :trigger="trigger"
        :arrow="arrow"
        :height="height"
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
        <Carousel-item>
            <div style="height: 150px; background: #f50; position: relative">
                <p style="position: absolute; width: 100%; color: #fff; top: 50%; height: 20px; line-height: 20px; margin-top: -10px; text-align: center">test font 定高测试</p>
            </div>
        </Carousel-item>
        <Carousel-item>
            <div style="height: 100%; min-height: 20px; background: #f50; position: relative;">
                <p style="position: absolute; width: 100%; color: #fff; top: 50%; height: 20px; line-height: 20px; margin-top: -10px; text-align: center">test font 居中测试</p>
            </div>
        </Carousel-item>
        <Carousel-item>
            <Card style="width:350px">
                <p slot="title">
                    <Icon type="ios-film-outline"></Icon>
                    经典电影
                </p>
                <a href="#" slot="extra">
                    <Icon type="ios-loop-strong"></Icon>
                    换一换
                </a>
                <ul>

                </ul>
            </Card>
        </Carousel-item>
        <Carousel-item style="text-align: center">
            <Icon type="checkmark" style="font-size: 5em"></Icon>
        </Carousel-item>
        <Carousel-item>test3</Carousel-item>
        <Carousel-item v-for="item in pushItem" track-by="$index">
            <Icon type="checkmark" style="font-size: 5em"></Icon>{{item}}
        </Carousel-item>
    </Carousel>
    <div style="max-height: 200px; overflow: scroll">
        <p v-for="item in log" track-by="$index">{{item}}</p>
    </div>

    <Card style="width:350px">
        <p slot="title">
            <Icon type="ios-film-outline"></Icon>
            经典电影
        </p>
        <Carousel>
            <Carousel-item v-if="!remove">
                <Alert type="warning" show-icon>
                    警告提示文案
                    <template slot="desc">
                        警告的提示描述文案警告的提示描述文案警告的提示描述文案
                    </template>
                </Alert>
            </Carousel-item>
            <Carousel-item>
                <div style="height: 100%; min-height: 20px; background: #f50; position: relative;">
                    <p style="position: absolute; width: 100%; color: #fff; top: 50%; height: 20px; line-height: 20px; margin-top: -10px; text-align: center">test font 定高测试</p>
                </div>
            </Carousel-item>
            <Carousel-item style="text-align: center">
                <Icon type="checkmark" style="font-size: 5em"></Icon>
            </Carousel-item>
        </Carousel>
    </Card>
    <Tabs>
        <Tab-pane label="标签一">
            <Carousel>
                <Carousel-item v-if="!remove">
                    <Alert type="warning" show-icon>
                        警告提示文案
                        <template slot="desc">
                            警告的提示描述文案警告的提示描述文案警告的提示描述文案
                        </template>
                    </Alert>
                </Carousel-item>
                <Carousel-item>
                    <div style="height: 100%; min-height: 20px; background: #f50; position: relative;">
                        <p style="position: absolute; width: 100%; color: #fff; top: 50%; height: 20px; line-height: 20px; margin-top: -10px; text-align: center">test font 定高测试</p>
                    </div>
                </Carousel-item>
                <Carousel-item style="text-align: center">
                    <Icon type="checkmark" style="font-size: 5em"></Icon>
                </Carousel-item>
            </Carousel>
        </Tab-pane>
        <Tab-pane label="标签二" disabled>标签二的内容</Tab-pane>
        <Tab-pane label="标签三">
            <Carousel>
                <Carousel-item v-if="!remove">
                    <Alert type="warning" show-icon>
                        警告提示文案
                        <template slot="desc">
                            警告的提示描述文案警告的提示描述文案警告的提示描述文案
                        </template>
                    </Alert>
                </Carousel-item>
                <Carousel-item>
                    <div style="height: 100%; min-height: 20px; background: #f50; position: relative;">
                        <p style="position: absolute; width: 100%; color: #fff; top: 50%; height: 20px; line-height: 20px; margin-top: -10px; text-align: center">test font 定高测试</p>
                    </div>
                </Carousel-item>
                <Carousel-item style="text-align: center">
                    <Icon type="checkmark" style="font-size: 5em"></Icon>
                </Carousel-item>
            </Carousel>
        </Tab-pane>
    </Tabs>
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
                height: 'auto',
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
