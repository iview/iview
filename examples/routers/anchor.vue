<template>
	<div class="anchor-wrapper">
		<div class="link-wrapper">
            <Button @click="changeCon">修改为Window</Button>
            <Button @click="andLink">添加一个连接</Button>
			<Anchor :bounds="100" @on-change="handleChange" @on-select="handleSelect" :style="{right: '100px'}" :affix="true" :offset-top="30" :scroll-offset="100" :container="scrollCon" show-ink>
				<AnchorLink v-if="(link - 1) % 30 === 0" v-for="link in 300" :key="`link${link}`" :href="`#title-${link}`" :title="`title-${link}`">
                    <AnchorLink :scroll-offset="20" v-if="link === 61" href="#title-child-69" title="title-child-69"/>
                </AnchorLink>
                <AnchorLink :scroll-offset="200" href="#lishi" title="李氏专跳"/>
                <AnchorLink v-if="showNewLink" href="#new-link" title="这是动态添加的连接"/>
			</Anchor>
		</div>
		<div v-if="con === 'div'" ref="listWrapper" id="listWrapper" class="list-wrapper">
            <div style="height: 100px;"></div>
            <template v-for="i in 300">
                <h1 v-if="(i - 1) % 30 === 0" :key="`h1${i}`" :id="`title-${i}`">{{ `title-${i}` }}</h1>
                <h1 v-if="i === 69" :key="`h1${i}`" :id="`title-child-${i}`">{{ `title-${i}` }}</h1>
                <h1 v-if="i === 75" :key="`h1${i}`" :id="`title-child-${i}`">{{ `title-${i}` }}</h1>
                <p v-else :key="`p${i}`">{{ `content-row-index-${i}` }}</p>
                <Collapse v-if="i === 3" v-model="value1" :key="`collapse-${i}`">
                    <Panel name="1">
                        史蒂夫·乔布斯
                        <p v-for="index in 50" :key="`ppp-${index}`" slot="content">{{ index }}</p>
                    </Panel>
                    <Panel name="2">
                        斯蒂夫·盖瑞·沃兹尼亚克
                        <p slot="content">斯蒂夫·盖瑞·沃兹尼亚克（Stephen Gary Wozniak），美国电脑工程师，曾与史蒂夫·乔布斯合伙创立苹果电脑（今之苹果公司）。斯蒂夫·盖瑞·沃兹尼亚克曾就读于美国科罗拉多大学，后转学入美国著名高等学府加州大学伯克利分校（UC Berkeley）并获得电机工程及计算机（EECS）本科学位（1987年）。</p>
                    </Panel>
                    <Panel name="3">
                        乔纳森·伊夫
                        <p slot="content">乔纳森·伊夫是一位工业设计师，现任Apple公司设计师兼资深副总裁，英国爵士。他曾参与设计了iPod，iMac，iPhone，iPad等众多苹果产品。除了乔布斯，他是对苹果那些著名的产品最有影响力的人。</p>
                    </Panel>
                </Collapse>
            </template>
            <h1 id="lishi">李氏专跳</h1>
            <p v-for="i in 100" :key="`chinese-${i}`">这是信息司大是大非胜多负少的{{i}}</p>
            <!-- <h1 id="new-link">这是新添加的哦哦哦哦哦 哦 </h1>
            <p v-for="i in 50" :key="`new-${i}`">这是信息司大是大非胜多负少的{{i}}</p> -->
        </div>
        <div v-else>
            <template v-for="i in 300">
                <h1 v-if="(i - 1) % 30 === 0" :key="`h1${i}`" :id="`title-${i}`">{{ `title-${i}` }}</h1>
                <h1 v-if="i === 69" :key="`h1${i}`" :id="`title-child-${i}`">{{ `title-${i}` }}</h1>
                <h1 v-if="i === 75" :key="`h1${i}`" :id="`title-child-${i}`">{{ `title-${i}` }}</h1>
                <p v-else :key="`p${i}`">{{ `content-row-index-${i}` }}</p>
                <Collapse v-if="i === 3" v-model="value1" :key="`collapse-${i}`">
                    <Panel name="1">
                        史蒂夫·乔布斯
                        <p v-for="index in 50" :key="`ppp-${index}`" slot="content">{{ index }}</p>
                    </Panel>
                    <Panel name="2">
                        斯蒂夫·盖瑞·沃兹尼亚克
                        <p slot="content">斯蒂夫·盖瑞·沃兹尼亚克（Stephen Gary Wozniak），美国电脑工程师，曾与史蒂夫·乔布斯合伙创立苹果电脑（今之苹果公司）。斯蒂夫·盖瑞·沃兹尼亚克曾就读于美国科罗拉多大学，后转学入美国著名高等学府加州大学伯克利分校（UC Berkeley）并获得电机工程及计算机（EECS）本科学位（1987年）。</p>
                    </Panel>
                    <Panel name="3">
                        乔纳森·伊夫
                        <p slot="content">乔纳森·伊夫是一位工业设计师，现任Apple公司设计师兼资深副总裁，英国爵士。他曾参与设计了iPod，iMac，iPhone，iPad等众多苹果产品。除了乔布斯，他是对苹果那些著名的产品最有影响力的人。</p>
                    </Panel>
                </Collapse>
            </template>
            <h1 id="new-link">这是新添加的哦哦哦哦哦 哦 </h1>
            <p v-for="i in 50" :key="`new-${i}`">这是信息司大是大非胜多负少的{{i}}</p>
            <h1 id="lishi">李氏专跳</h1>
            <p v-for="i in 50" :key="`chinese-${i}`">这是信息司大是大非胜多负少的{{i}}</p>
        </div>

	</div>
</template>
<script>
export default {
    data () {
        return {
            container: null,
            value1: '1',
            scrollCon: '',
            con: 'div',
            showNewLink: false
        }
    },
    methods: {
        changeCon () {
            this.con = 'window';
            this.scrollCon = undefined;
        },
        handleChange (newHref, oldHref) {
            console.log(`${oldHref} => ${newHref}`)
        },
        handleSelect (href) {
            console.log(`select ${href}`)
        },
        andLink () {
            this.showNewLink = true;
        }
    },
    mounted () {
        this.scrollCon = this.$refs.listWrapper
    }
}
</script>
<style lang="less">
.anchor-wrapper{
	.link-wrapper{
		position: absolute;
        top: 200px;
		right: 100px;
		width: 200px;
	}
    .list-wrapper{
        height: 600px;
        overflow: auto;
    }
}
</style>
