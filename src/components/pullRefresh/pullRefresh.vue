<template>
    <div class="pullrefesh" >
        <div class='loading' ref="Downrefresh" v-show="downRefresh">
            <Icon type="load-c" size=16 class="demo-spin-icon-load"></Icon>
            <div style="font-size:12px;">松开刷新</div>
        </div>
        <div class="pullRefresh" ref="pullRefresh">
            <slot></slot>
            <div class="loadingData" v-show="dataLoding">
                <Icon type="load-c" size=18 class="demo-spin-icon-load"></Icon>
                <div>loading</div>
            </div>
            <div class="withoutData" v-if="dataLoaded">
                没有数据了...
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'pullRefresh',
    props: ['dataLoaded', 'id', 'scrollTop', 'downRefresh', 'dataLoding'],
    computed: {
        showData() {
            return this.data
        }
    },
    methods: {
        /** 设置滚动条高度
         * @argument */
        setScroolTop() {
            const Vm = this
            let pullRefresh = Vm.$refs.pullRefresh
            if (Vm.scrollTop) {
                // pullRefresh.scrollTo(0, Vm.scrollTop)
                pullRefresh.scrollTop = Vm.scrollTop
            }
        }
    },
    created() {
        const Vm = this
        let startClientY = null
        let y = null
        setTimeout(() => {
            let pullRefresh = Vm.$refs.pullRefresh
            let Downrefresh = Vm.$refs.Downrefresh
            this.setScroolTop()
            let scrool = () => {
                let pullRefresh = Vm.$refs.pullRefresh
                let [scrollTop, offsetHeight, scrollHeight] = [pullRefresh.scrollTop, pullRefresh.offsetHeight, pullRefresh.scrollHeight]
                this.$emit('getScrollTop', scrollTop)
                if (scrollHeight - offsetHeight === scrollTop) {
                    this.$emit('fetchData')
                }
            }
            let touStart = (e) => {
                if (pullRefresh.scrollTop <= 0) {
                    if (e.changedTouches.length === 1) { // 判断只有一根手指在屏幕上
                        startClientY = e.changedTouches[0].clientY
                    }
                }
            }
            let touMove = (e) => {
                if (pullRefresh.scrollTop <= 0) {
                    if (e.changedTouches.length === 1) {
                        y = e.changedTouches[0].clientY - startClientY
                        if (y < 160 && y > -160) {
                            pullRefresh.style.transform = 'translateY(' + y / 2 + 'px)'
                            Downrefresh.style.transform = 'translateY(' + y / 2 + 'px)'
                        }
                    }
                }
            }
            let touEnd = (e) => {
                pullRefresh.style.transform = 'translateY(0px)'
                Downrefresh.style.transform = 'translateY(0px)'
                if (pullRefresh.scrollTop <= 0) {
                    if (e.changedTouches.length === 1) {
                        if (y > 160 && y > -160) {
                            y = null
                            this.$emit('refresh')
                        }
                    }
                }
            }
            if (Vm.downRefresh) {
                pullRefresh.addEventListener('touchstart', touStart)
                pullRefresh.addEventListener('touchmove', touMove)
                pullRefresh.addEventListener('touchend', touEnd)
            }
            pullRefresh.addEventListener('scroll', scrool)
        }, 0)
    }
}
</script>

<style lang="less" scoped>
.pullRefresh {
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 2;
    // background-color: #fff;
    overflow-x: hidden;
    overflow-y: scroll;
    transition: all .1s linear;
    -webkit-overflow-scrolling: touch;
    .withoutData {
        height: 45px;
        line-height: 45px;
        text-align: center;
    }
    .loadingData {
        height: 45px;
        text-align: center;
    }
    .demo-spin-icon-load{
        animation: ani-demo-spin 1s linear infinite;
    }
    @keyframes ani-demo-spin {
        from { transform: rotate(0deg);}
        50%  { transform: rotate(180deg);}
        to   { transform: rotate(360deg);}
    }
}

.test {
    width: 100%;
    height: 45px;
    border: 1px solid #000;
}

.pullrefesh {
    height: 100%;
    overflow-x: hidden;
    overflow-y: scroll;
    .loading {
        position: absolute;
        text-align: center;
        width: 100%;
        z-index: 1;
        margin-top: -36px;
    }
}
</style>
