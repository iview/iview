<template>
<div>
    <Steps :current="1" size="small">
        <Step title="已完成" content="这里是该步骤的描述信息这里是该步骤的描述信息这里是该步骤的描述信息"></Step>
        <Step title="进行中" content="这里是该步骤的描述信息"></Step>
        <Step title="待进行" content="这里是该步骤的描述信息这里是该步骤的描述信息这里是该步骤的描述信息"></Step>
        <Step title="待进行" content="这里是该步骤的描述信息"></Step>
    </Steps>
    <br>
    <Steps :current="2">
        <Step title="已完成"></Step>
        <Step title="进行中"></Step>
        <Step title="待进行"></Step>
        <Step title="待进行"></Step>
    </Steps>
    <br>
    <Steps :current="1" size="small">
        <Step title="已完成"></Step>
        <Step title="进行中"></Step>
        <Step title="待进行"></Step>
        <Step title="待进行"></Step>
    </Steps>
    <br>
    <Steps :current="1" direction="vertical" size="small">
        <Step title="注册" icon="person-add"></Step>
        <Step title="上传头像" icon="camera" content="这里是该步骤的描述信息这里是该步骤的描述信息这里是该步骤的描述信息"></Step>
        <Step title="验证邮箱" icon="email"></Step>
    </Steps>
    <Steps :current="1" direction="vertical">
        <Step title="注册" icon="person-add"></Step>
        <Step title="上传头像" icon="camera" content="这里是该步骤的描述信息这里是该步骤的描述信息这里是该步骤的描述信息"></Step>
        <Step title="验证邮箱" icon="email"></Step>
    </Steps>
    <Steps :current="-1" direction="vertical">
        <Step title="注册" icon="person-add"></Step>
        <Step title="上传头像" icon="camera" content="这里是该步骤的描述信息这里是该步骤的描述信息这里是该步骤的描述信息"></Step>
        <Step title="验证邮箱" status="finish" icon="email"></Step>
    </Steps>
    <br>
    <p>当前正在进行第 {{ current + 1 }} 步</p>
    <Steps :current="current">
        <Step title="步骤1"></Step>
        <Step title="步骤2"></Step>
        <Step title="步骤3"></Step>
        <Step title="步骤4"></Step>
    </Steps>
    <br>
    <Button type="primary" @click.native="next">下一步</Button>
    <br><br><br>
    <Steps :current="1" direction="vertical" size="small">
        <Step title="已完成" content="这里是该步骤的描述信息这里是该步骤的描述信息这里是该步骤的描述信息"></Step>
        <Step title="进行中" content="这里是该步骤的描述信息"></Step>
        <Step title="待进行" content="这里是该步骤的描述信息这里是该步骤的描述信息这里是该步骤的描述信息"></Step>
        <Step title="待进行" content="这里是该步骤的描述信息"></Step>
    </Steps>
    <br><br>
    <Steps :current="1" status="error">
        <Step title="已完成" content="这里是该步骤的描述信息"></Step>
        <Step title="进行中" content="这里是该步骤的描述信息"></Step>
        <Step title="待进行" content="这里是该步骤的描述信息"></Step>
        <Step title="待进行" content="这里是该步骤的描述信息"></Step>
    </Steps>
</div>
</template>
<script>
    import { Steps, Button } from 'iview';

    const Step = Steps.Step;

    export default {
        components: {
            Steps,
            Step,
            Button
        },
        props: {

        },
        data () {
            return {
                total: 512,
                current: 0
            }
        },
        computed: {

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
