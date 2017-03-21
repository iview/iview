<template>
    <div>
        <Alert show-icon banner closable>消息提示文案</Alert>
        <Alert type="success" show-icon>成功提示文案</Alert>
        <Alert type="warning" show-icon banner>警告提示文案</Alert>
        <Alert type="error" show-icon>错误提示文案</Alert>
        <Alert show-icon>
            消息提示文案
            <template slot="desc">消息提示的描述文案消息提示的描述文案消息提示的描述文案消息提示的描述文案消息提示的描述文案</template>
        </Alert>
        <Alert type="success" show-icon>
            成功提示文案
            <span slot="desc">成功的提示描述文案成功的提示描述文案成功的提示描述文案成功的提示描述文案成功的提示描述文案</span>
        </Alert>
        <Alert type="warning" show-icon>
            警告提示文案
            <template slot="desc">
                警告的提示描述文案警告的提示描述文案警告的提示描述文案
            </template>
        </Alert>
        <Alert type="error" show-icon>
            错误提示文案
            <span slot="desc">
            自定义错误描述文案。
        </span>
        </Alert>
        <Alert show-icon closable>
            自定义图标
            <Icon type="ios-lightbulb-outline" slot="icon"></Icon>
            <template slot="desc">自定义图标文案自定义图标文案自定义图标文案自定义图标文案自定义图标文案</template>
        </Alert>
    </div>
</template>
<script>
    import { Alert, Icon } from 'iview';
    export default {
        components: { Alert, Icon }
    }
</script>
