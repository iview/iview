<template>
    <Scroll :on-reach-edge="loadData">
        <section v-for="item in list">
            <div class="city">
                <p>{{ item }}</p>
            </div>
        </section>
    </Scroll>
</template>
<script>
    export default {
        data () {
            return {
                list: [1,2,3,4,5,6,7,8,9,10]
            }
        },
        methods: {
            loadData (dir) {
                return new Promise(resolve => {
                    setTimeout(() => {
                        if (dir > 0) {
                            const first = this.list[0];
                            for (let i = 1; i < 11; i++) {
                                this.list.unshift(first - i);
                            }
                        } else {
                            const last = this.list[this.list.length - 1];
                            for (let i = 1; i < 11; i++) {
                                this.list.push(last + i);
                            }
                        }
                        resolve();
                    }, 500);
                });
            }
        }
    }
</script>
<style>
    section {
        margin: 20px;
    }
    section > div {
        width: 300px;
        padding: 15px;
        margin: 5px;
        background-color: #ddf;
        border: 1px solid #446;
        border-radius: 5px;
        margin: 0 auto;
    }

    .ivu-scroll-container {
        height: 500px;
    }
</style>
