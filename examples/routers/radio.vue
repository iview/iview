<template>
    <div>
        <Radio-group v-model="phone">
            <Row>
                <i-col span="8">
                    <Radio label="apple">
                        <Icon type="social-apple"></Icon>
                        <span>Apple</span>
                    </Radio>
                </i-col>
                <i-col span="8">
                    <Radio label="android">
                        <Icon type="social-android"></Icon>
                        <span>Android</span>
                    </Radio>
                </i-col>
                <i-col span="8">
                    <Radio label="windows">
                        <Icon type="social-windows"></Icon>
                        <span>Windows</span>
                    </Radio>
                </i-col>
            </Row>
        </Radio-group>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                phone: 'apple',
                animal: '爪哇犀牛'
            }
        }
    }
</script>
