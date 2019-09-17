<template>
    <div style="border: 1px solid #ccc;">
        <Steps :current="1">
            <Step title="已完成">
                <div slot="content">
                    这里是该步骤的描述信息
                </div>
            </Step>
            <Step title="进行中" content="这里是该步骤的描述信息"></Step>
            <Step title="待进行" content="这里是该步骤的描述信息"></Step>
            <Step title="待进行" content="这里是该步骤的描述信息"></Step>
        </Steps>
        <Divider></Divider>
        <Steps :current="2" size="small">
            <Step title="已完成"></Step>
            <Step title="进行中"></Step>
            <Step title="待进行"></Step>
            <Step title="待进行"></Step>
        </Steps>
        <Divider></Divider>
        <Steps :current="1">
            <Step title="注册">
                <Icon type="md-alarm" slot="icon" />
            </Step>
            <Step title="上传头像" icon="ios-camera"></Step>
            <Step title="验证邮箱" icon="ios-mail"></Step>
        </Steps>
        <Divider></Divider>
        <p>当前正在进行第 {{ current + 1 }} 步</p>
        <Steps :current="current">
            <Step title="步骤1"></Step>
            <Step title="步骤2"></Step>
            <Step title="步骤3"></Step>
            <Step title="步骤4"></Step>
        </Steps>
        <Button type="primary" @click="next">Next step</Button>
        <Divider></Divider>
        <Steps :current="2" direction="vertical">
            <Step title="已完成" content="这里是该步骤的描述信息"></Step>
            <Step title="已完成" content="这里是该步骤的描述信息"></Step>
            <Step title="进行中" content="这里是该步骤的描述信息"></Step>
            <Step title="待进行" content="这里是该步骤的描述信息"></Step>
        </Steps>
        <Divider></Divider>
        <Steps :current="1" status="error">
            <Step title="已完成" content="这里是该步骤的描述信息"></Step>
            <Step title="进行中" content="这里是该步骤的描述信息"></Step>
            <Step title="待进行" content="这里是该步骤的描述信息"></Step>
            <Step title="待进行" content="这里是该步骤的描述信息"></Step>
        </Steps>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                current: 0
            }
        },
        methods: {
            next () {
                if (this.current == 3) {
                    this.current = 0;
                } else {
                    this.current += 1;
                }
            }
        }
    }
</script>
