<template lang="html">
    <div>
        <Row>
            <Col span="8">
                基本使用
                <AutoComplete :dataSource="dataSource1" v-model="value1"></AutoComplete>
                v-model: {{value1}}
            </Col>
            <Col span="8" offset="2">
                改变 trigger 方式
                <AutoComplete :dataSource="dataSource1" v-model="value2" trigger="change"></AutoComplete>
                v-model: {{value2}}
            </Col>
        </Row><br><br>
        <Row>
            <Col span="8">
                动态修改选项(on-change)
                <AutoComplete placeholder="请输入邮箱地址" :dataSource="dataSource3" v-model="value3" @on-change="handleChange3"></AutoComplete>
                v-model: {{value3}}
            </Col>
            <Col span="8" offset="2">
                异步更新(async + loading)
                <AutoComplete async :loading="loading4" :dataSource="dataSource4" v-model="value4" @on-change="handleChange4"></AutoComplete>
                v-model: {{value4}}
            </Col>
        </Row>
    </div>
</template>

<script>
import fetchJsonp from 'fetch-jsonp'
import debounce from 'lodash.debounce'
export default {
    data () {
        return {
            value1: '',
            dataSource1: ['北京', '上海', '深圳', '广州', '杭州'],

            value2: '',

            dataSource3: [],
            value3: '',

            dataSource4: [],
            value4: '',
            loading4: false
        }
    },
    methods: {
        handleChange3(value) {
            if(value.indexOf('@') > -1) {
                this.dataSource3 = []
            } else {
                this.dataSource3 = ['@163.com', '@qq.com', '@sina.com'].map(domain => value + domain)
            }
        },
        handleChange4 (value) {
            const mockFetchData = ["沙发", "睡衣女夏", "四件套", "手机", "双肩包女", "碎花连衣裙", "手机壳", "水杯", "睡衣", "书包"]
            this.loading4 = true
            this.dataSource4 = []
            setTimeout(() => {
                this.loading4 = false
                this.dataSource4 = mockFetchData
            }, 1000)
        }
    }
}
</script>

<style lang="css">
</style>
