<!--<template>-->
    <!--<div>-->
        <!--<Transfer-->
            <!--:data="data1"-->
            <!--filterable-->
            <!--:target-keys="targetKeys1"-->
            <!--:render-format="render1"-->
            <!--@on-change="handleChange1"></Transfer>-->
    <!--</div>-->
<!--</template>-->
<!--<script>-->
    <!--export default {-->
        <!--data () {-->
            <!--return {-->
                <!--data1: this.getMockData(),-->
                <!--targetKeys1: this.getTargetKeys()-->
            <!--}-->
        <!--},-->
        <!--methods: {-->
            <!--getMockData () {-->
                <!--let mockData = [];-->
                <!--for (let i = 1; i <= 20; i++) {-->
                    <!--mockData.push({-->
                        <!--key: i.toString(),-->
                        <!--label: '内容' + i,-->
                        <!--description: '内容' + i + '的描述信息',-->
                        <!--disabled: Math.random() * 3 < 1-->
                    <!--});-->
                <!--}-->
                <!--return mockData;-->
            <!--},-->
            <!--getTargetKeys () {-->
                <!--return this.getMockData()-->
                    <!--.filter(() => Math.random() * 2 > 1)-->
                    <!--.map(item => item.key);-->
            <!--},-->
            <!--render1 (item) {-->
                <!--return item.label;-->
            <!--},-->
            <!--handleChange1 (newTargetKeys, direction, moveKeys) {-->
                <!--console.log(newTargetKeys);-->
                <!--console.log(direction);-->
                <!--console.log(moveKeys);-->
                <!--this.targetKeys1 = newTargetKeys;-->
            <!--}-->
        <!--}-->
    <!--}-->
<!--</script>-->


<!--<template>-->
    <!--<Transfer-->
        <!--:data="data3"-->
        <!--:target-keys="targetKeys3"-->
        <!--:list-style="listStyle"-->
        <!--:render-format="render3"-->
        <!--:operations="['向左移动','向右移动']"-->
        <!--filterable-->
        <!--@on-change="handleChange3">-->
        <!--<div :style="{float: 'right', margin: '5px'}">-->
            <!--<Button type="ghost" size="small" @click.native="reloadMockData">刷新</Button>-->
        <!--</div>-->
    <!--</Transfer>-->
<!--</template>-->
<!--<script>-->
    <!--export default {-->
        <!--data () {-->
            <!--return {-->
                <!--data3: this.getMockData(),-->
                <!--targetKeys3: this.getTargetKeys(),-->
                <!--listStyle: {-->
                    <!--width: '250px',-->
                    <!--height: '300px'-->
                <!--}-->
            <!--}-->
        <!--},-->
        <!--methods: {-->
            <!--getMockData () {-->
                <!--let mockData = [];-->
                <!--for (let i = 1; i <= 20; i++) {-->
                    <!--mockData.push({-->
                        <!--key: i.toString(),-->
                        <!--label: '内容' + i,-->
                        <!--description: '内容' + i + '的描述信息',-->
                        <!--disabled: Math.random() * 3 < 1-->
                    <!--});-->
                <!--}-->
                <!--return mockData;-->
            <!--},-->
            <!--getTargetKeys () {-->
                <!--return this.getMockData()-->
                    <!--.filter(() => Math.random() * 2 > 1)-->
                    <!--.map(item => item.key);-->
            <!--},-->
            <!--handleChange3 (newTargetKeys) {-->
                <!--this.targetKeys3 = newTargetKeys;-->
            <!--},-->
            <!--render3 (item) {-->
                <!--return item.label + ' - ' + item.description;-->
            <!--},-->
            <!--reloadMockData () {-->
                <!--this.data3 = this.getMockData();-->
                <!--this.targetKeys3 = this.getTargetKeys();-->
            <!--}-->
        <!--}-->
    <!--}-->
<!--</script>-->

<!--<template>-->
    <!--<Transfer-->
            <!--:data="data4"-->
            <!--:target-keys="targetKeys4"-->
            <!--:render-format="render4"-->
            <!--@on-change="handleChange4"></Transfer>-->
<!--</template>-->
<!--<script>-->
    <!--export default {-->
        <!--data () {-->
            <!--return {-->
                <!--data4: this.getMockData(),-->
                <!--targetKeys4: this.getTargetKeys()-->
            <!--}-->
        <!--},-->
        <!--methods: {-->
            <!--getMockData () {-->
                <!--let mockData = [];-->
                <!--for (let i = 1; i <= 20; i++) {-->
                    <!--mockData.push({-->
                        <!--key: i.toString(),-->
                        <!--label: '内容' + i,-->
                        <!--description: '内容' + i + '的描述信息',-->
                        <!--disabled: Math.random() * 3 < 1-->
                    <!--});-->
                <!--}-->
                <!--return mockData;-->
            <!--},-->
            <!--getTargetKeys () {-->
                <!--return this.getMockData()-->
                    <!--.filter(() => Math.random() * 2 > 1)-->
                    <!--.map(item => item.key);-->
            <!--},-->
            <!--handleChange4 (newTargetKeys) {-->
                <!--this.targetKeys4 = newTargetKeys;-->
            <!--},-->
            <!--render4 (item) {-->
                <!--return item.label + ' - ' + item.description;-->
            <!--}-->
        <!--}-->
    <!--}-->
<!--</script>-->


<template>
    <div>
        <Transfer
                :data="data1"
                filterable
                :target-keys="targetKeys1"
                :render-format="render1"
                @on-change="handleChange1"></Transfer>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                data1: this.getMockData(),
                targetKeys1: this.getTargetKeys()
            }
        },
        created(){
            console.log('--created--');
            this.fetch();
        },
        methods: {
            fetch() {
                const _this = this;
                setTimeout(function() {
                    console.log('--1');
                    // _this.data1 = null;
                    _this.data1 = _this.getMockData1();
                    console.log('-fetch-', _this.data1);

                }, 1500);
            },
            getMockData () {
                let mockData = [];
                for (let i = 1; i <= 20; i++) {
                    mockData.push({
                        key: i.toString(),
                        label: '内容' + i,
                        description: '内容' + i + '的描述信息',
                        disabled: Math.random() * 3 < 1
                    });
                }
                return mockData;
            },
            getMockData1 () {
                let mockData = [];
                for (let i = 1; i <= 20; i++) {
                    mockData.push({
                        key: i.toString(),
                        label: '内容11111' + i,
                        description: '内容11111 ' + i + ' 1111的描述信息',
                        // disabled: Math.random() * 3 < 1
                    });
                }
                return mockData;
            },
            getTargetKeys () {
                return this.getMockData()
                    .filter(() => Math.random() * 2 > 1)
                    .map(item => item.key);
            },
            render1 (item) {
                return item.label;
            },
            handleChange1 (newTargetKeys, direction, moveKeys) {
                console.log(newTargetKeys);
                console.log(direction);
                console.log(moveKeys);
                this.targetKeys1 = newTargetKeys;
            }
        }
    }
</script>