<template>
    <div>
        <Checkbox v-model="single" @on-change="s">Checkbox</Checkbox>
        {{ single }}
        <div @click="single = !single">single-change</div>
        <br>
        {{ social }}
        <Checkbox-group v-model="social" @on-change="s">
            <Checkbox label="twitter">
                <Icon type="social-twitter"></Icon>
                <span>Twitter</span>
            </Checkbox>
            <Checkbox label="facebook">
                <Icon type="social-facebook"></Icon>
                <span>Facebook</span>
            </Checkbox>
            <Checkbox label="github">
                <Icon type="social-github"></Icon>
                <span>Github</span>
            </Checkbox>
            <Checkbox label="snapchat">
                <Icon type="social-snapchat"></Icon>
                <span>Snapchat</span>
            </Checkbox>
        </Checkbox-group>
        <br>
        <div @click="c">修改1</div>
        {{ fruit }}
        <Checkbox-group v-model="fruit">
            <Checkbox label="香蕉"></Checkbox>
            <Checkbox label="苹果"></Checkbox>
            <Checkbox label="西瓜"></Checkbox>
        </Checkbox-group>
        <br><br>
        <div style="border-bottom: 1px solid #e9e9e9;padding-bottom:6px;margin-bottom:6px;">
            <Checkbox
                    :indeterminate="indeterminate"
                    v-model="checkAll"
                    @click.prevent.native="handleCheckAll">全选</Checkbox>
        </div>
        <Checkbox-group v-model="checkAllGroup" @on-change="checkAllGroupChange">
            <Checkbox label="香蕉"></Checkbox>
            <Checkbox label="苹果"></Checkbox>
            <Checkbox label="西瓜"></Checkbox>
        </Checkbox-group>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                social: ['facebook', 'github'],
                fruit: ['苹果'],
                single: false,
                indeterminate: true,
                checkAll: false,
                checkAllGroup: ['香蕉', '西瓜']
            }
        },
        methods: {
            c () {
                this.social.splice(0, 1)
            },
            s (d) {
                console.log(d)
            },
            handleCheckAll () {
                if (this.indeterminate) {
                    this.checkAll = false;
                } else {
                    this.checkAll = !this.checkAll;
                }
                this.indeterminate = false;

                if (this.checkAll) {
                    this.checkAllGroup = ['香蕉', '苹果', '西瓜'];
                } else {
                    this.checkAllGroup = [];
                }
            },
            checkAllGroupChange (data) {
                if (data.length === 3) {
                    this.indeterminate = false;
                    this.checkAll = true;
                } else if (data.length > 0) {
                    this.indeterminate = true;
                    this.checkAll = false;
                } else {
                    this.indeterminate = false;
                    this.checkAll = false;
                }
            }
        }
    }
</script>
