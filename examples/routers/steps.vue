<style>

</style>
<template>
<div>
    <Steps :current="index">
        <!--<Step title="开始"></Step>-->
        <Step v-for="(item, index) in activitiList" :title="item.approveUserName" :key="index"></Step>
        <!--<Step title="结束"></Step>-->
    </Steps>
    <Button @click="change">change</Button>
    <br><br><br><br>
    <hr>
    <!--<Steps :current="1" size="small">-->
        <!--<Step title="已完成" content="这里是该步骤的描述信息这里是该步骤的描述信息这里是该步骤的描述信息"></Step>-->
        <!--<Step title="进行中" content="这里是该步骤的描述信息"></Step>-->
        <!--<Step title="待进行" content="这里是该步骤的描述信息这里是该步骤的描述信息这里是该步骤的描述信息"></Step>-->
        <!--<Step title="待进行" content="这里是该步骤的描述信息"></Step>-->
    <!--</Steps>-->
    <!--<br>-->
    <!--<Steps :current="2">-->
        <!--<Step title="已完成"></Step>-->
        <!--<Step title="进行中"></Step>-->
        <!--<Step title="待进行"></Step>-->
        <!--<Step title="待进行"></Step>-->
    <!--</Steps>-->
    <!--<br>-->
    <!--<Steps :current="1" size="small">-->
        <!--<Step title="已完成"></Step>-->
        <!--<Step title="进行中"></Step>-->
        <!--<Step title="待进行"></Step>-->
        <!--<Step title="待进行"></Step>-->
    <!--</Steps>-->
    <!--<br>-->
    <!--<Steps :current="1" direction="vertical" size="small">-->
        <!--<Step title="注册" icon="person-add"></Step>-->
        <!--<Step title="上传头像" icon="camera" content="这里是该步骤的描述信息这里是该步骤的描述信息这里是该步骤的描述信息"></Step>-->
        <!--<Step title="验证邮箱" icon="email"></Step>-->
    <!--</Steps>-->
    <!--<Steps :current="1" direction="vertical">-->
        <!--<Step title="注册" icon="person-add"></Step>-->
        <!--<Step title="上传头像" icon="camera" content="这里是该步骤的描述信息这里是该步骤的描述信息这里是该步骤的描述信息"></Step>-->
        <!--<Step title="验证邮箱" icon="email"></Step>-->
    <!--</Steps>-->
    <!--<Steps :current="-1" direction="vertical">-->
        <!--<Step title="注册" icon="person-add"></Step>-->
        <!--<Step title="上传头像" icon="camera" content="这里是该步骤的描述信息这里是该步骤的描述信息这里是该步骤的描述信息"></Step>-->
        <!--<Step title="验证邮箱" status="finish" icon="email"></Step>-->
    <!--</Steps>-->
    <!--<br>-->
    <!--<p>当前正在进行第 {{ current + 1 }} 步</p>-->
    <!--<Steps :current="current">-->
        <!--<Step title="步骤1"></Step>-->
        <!--<Step title="步骤2"></Step>-->
        <!--<Step title="步骤3"></Step>-->
        <!--<Step title="步骤4"></Step>-->
    <!--</Steps>-->
    <!--<br>-->
    <!--<i-button type="primary" @click.native="next">下一步</i-button>-->
    <!--<br><br><br>-->
    <!--<Steps :current="1" direction="vertical" size="small">-->
        <!--<Step title="已完成" content="这里是该步骤的描述信息这里是该步骤的描述信息这里是该步骤的描述信息"></Step>-->
        <!--<Step title="进行中" content="这里是该步骤的描述信息"></Step>-->
        <!--<Step title="待进行" content="这里是该步骤的描述信息这里是该步骤的描述信息这里是该步骤的描述信息"></Step>-->
        <!--<Step title="待进行" content="这里是该步骤的描述信息"></Step>-->
    <!--</Steps>-->
    <!--<br><br>-->
    <!--<Steps :current="1" status="error">-->
        <!--<Step title="已完成" content="这里是该步骤的描述信息"></Step>-->
        <!--<Step title="进行中" content="这里是该步骤的描述信息"></Step>-->
        <!--<Step title="待进行" content="这里是该步骤的描述信息"></Step>-->
        <!--<Step title="待进行" content="这里是该步骤的描述信息"></Step>-->
    <!--</Steps>-->
    <!--<Steps direction="vertical" :current="3">-->
        <!--<Step title="已完成" content="这里是该步骤的描述信息">-->
            <!--<div style="font-size: 16px; color: green">这里是该步骤的描述信息1</div>-->
        <!--</Step>-->
        <!--<Step title="进行中" content="这里是该步骤的描述信息">-->
            <!--<div style="font-size: 24px; color: red">这里是该步骤的描述信息2</div>-->
        <!--</Step>-->
        <!--<Step title="待进行" content="这里是该步骤的描述信息">-->
            <!--<div style="font-size: 46px; color: blue">这里是该步骤的描述信息3</div>-->
        <!--</Step>-->
        <!--<Step title="待进行" content="这里是该步骤的描述信息">-->
            <!--<div style="font-size: 24px; color: green">这里是该步骤的描述信息4</div>-->
        <!--</Step>-->
    <!--</Steps>-->
</div>
</template>
<script>
    export default {
        props: {

        },
        data () {
            return {
                total: 512,
                current: 0,
                index:0,
                activitiList:[
                    {
                        approveUserName:'123',
                        startTime:'1'
                    },{
                        approveUserName:'123',
                        startTime:'2'
                    }
                ],
                changeList:[
                    {
                        approveUserName:'456',
                        startTime:'1'
                    },{
                        approveUserName:'456',
                        startTime:'2'
                    },{
                        approveUserName:'456',
                        startTime:'3'
                    },{
                        approveUserName:'456',
                        startTime:'4'
                    },{
                        approveUserName:'456',
                        startTime:'5'
                    }
                ]
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
            },
            change () {
                this.activitiList = this.activitiList.concat(this.changeList);
            }
        },
        mounted () {
//            this.change();
        }
    }
</script>
