<template>
    <div>
        <component :is="listWrapper"
                   :on-reach-bottom="loadData">
            <section v-for="item in list">
                <div class="city">
                    <p>{{ item }}</p>
                </div>
            </section>
        </component>
    </div>
</template>
<script>
import { Scroll } from '../../src/index';
export default {
    data() {
        return {
            list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            loadFinished: false,
        };
    },
    computed: {
        listWrapper() {
            return this.loadFinished ? 'div' : Scroll;
        },
    },
    methods: {
        loadData(dir) {
            return new Promise((resolve) => {
                this.loadFinished = false;
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
                    this.loadFinished = true;
                    resolve();
                }, 500);
            });
        },
    },
};
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
