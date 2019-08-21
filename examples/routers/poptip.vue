<template>
    <div style="margin: 200px">
        <Tabs value="name1">
            <TabPane label="标签一" name="name1">
                <!-- <div style="width: 200px;height:300px;overflow: auto;">
                    <Poptip title="提示标题" content="标签一的内容" placement="left" transfer >
                        <Button id="aaa">左边</Button>
                    </Poptip>
                    <Poptip title="提示标题" content="标签一的内容" placement="right" transfer>
                        <Button id="aaa">右边</Button>
                    </Poptip>
                    <Poptip title="提示标题" content="标签一的内容" placement="top" transfer>
                        <Button id="aaa">上边</Button>
                    </Poptip>
                    <Poptip title="提示标题" content="标签一的内容" placement="bottom" transfer>
                        <Button id="aaa">下边</Button>
                    </Poptip>
                </div> -->
                <div>
                    <Poptip title="提示标题" content="标签一的内容">
                        <Button id="aaa">点击显示</Button>
                        <div slot="content">
                            <Button @click='loadData(15)'>15条数据</Button>
                            <Button @click='loadData(10)'>10条数据</Button>
                            <Button @click='loadData(5)'>5条数据</Button>
                            <Button @click='loadData(3)'>3条数据</Button>
                            <Table :columns='columns1' :data='data1'>
                            </Table>
                        </div>
                    </Poptip>
                </div>
            </TabPane>
            <TabPane label="标签二" name="name2">标签二的内容</TabPane>
        </Tabs>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                options: {

                },
                columns1:[
                    {
                        title: 'Data1',
                        key: 'data1',
                        width: 100,
                    },
                    {
                        title: 'Data2',
                        key: 'data2',
                        width: 100
                    },
                    {
                        title: 'Data3',
                        key: 'data3',
                        width: 100
                    },
                    {
                        title: 'Data4',
                        key: 'data4',
                        width: 100
                    }
                ],
                data1:[],
            }
        },
        created(){
            this.loadData(5);
        },
        methods:{
            loadData(num){
                let data = [];
                for (let i=0; i<num; i++) {
                    data.push({
                        data1:Math.random()*1000000,
                        data2:Math.random()*100000000,
                        data3:Math.random()*10000000000,
                        data4:Math.random()*1000000000000,
                    })
                }
                this.data1 = data
            },
        }
    }
</script>
