<template>
    <div style="margin: 200px">
        <Tabs value="name1">
            <TabPane label="标签一" name="name1">
                <div style="width: 200px;height:300px;overflow: auto;">
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

                }
            }
        }
    }
</script>
