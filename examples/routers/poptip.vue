<template>
    <div style="margin: 200px">
        <Tabs value="name1">
            <TabPane label="标签一" name="name1">
                <div style="overflow: auto;width: 200px;height:300px">
                    <Poptip title="提示标题" content="标签一的内容" placement="right" transfer :options="options">
                        <Button id="aaa">右边</Button>
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
                    modifiers: {
                        preventOverflow: {
                            boundariesElement: 'body',
                        }
                    }
                }
            }
        }
    }
</script>
