<template>
    <TransferTree
            :data="data3"
            :target-keys="targetKeys3"
            :list-style="listStyle"
            :operations="['To left','To right']"
            filterable
            @on-change="handleChange3">
        <!-- <div :style="{float: 'right', margin: '5px'}">
            <Button type="ghost" size="small" @click="reloadMockData">Refresh</Button>
        </div> -->
    </TransferTree>
</template>
<script>
    export default {
        data () {
            return {
                data3: this.getMockData(),
                targetKeys3: this.getTargetKeys(),
                listStyle: {
                    width: '250px',
                    height: '300px'
                }
            }
        },
        methods: {
            getMockData () {
                let mockData = [
                    {
                        title: 'parent 1',
                        expand: true,
                        key: 1,
                        children: [
                            {
                                title: 'parent 1-1',
                                expand: true,
                                key: 2,
                                children: [
                                    {
                                        title: 'leaf 1-1-1',
                                        key: 4,
                                        disabled: true
                                    },
                                    {
                                        title: 'leaf 1-1-2',
                                        key: 5,
                                    },
                                    {
                                        title: 'leaf 1-1-3',
                                        key: 6,
                                    }
                                ]
                            },
                            {
                                title: 'parent 1-2',
                                expand: true,
                                key: 3,
                                children: [
                                    {
                                        title: 'leaf 1-2-1',
                                        key: 7,
                                    },
                                    {
                                        title: 'leaf 1-2-2',
                                        key: 8,
                                    }
                                ]
                            }
                        ]
                    }
                ]
                return mockData;
            },
            getTargetKeys () {
                return this.findNodeKeys(this.getMockData()).filter(res => res > 5)
            },
            findNodeKeys (data) {
                const keys = []
                data.forEach(res => {
                    if (res.children && res.children.length) {
                        keys.push(...this.findNodeKeys(res.children))
                    } else {
                        res.key && keys.push(res.key)
                    }
                })
                return keys
            },
            handleChange3 (newTargetKeys) {
                this.targetKeys3 = newTargetKeys;
            },
            render3 (item) {
                return item.label + ' - ' + item.description;
            },
            reloadMockData () {
                this.data3 = this.getMockData();
                this.targetKeys3 = this.getTargetKeys();
            }
        }
    }
</script>
