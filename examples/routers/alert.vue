<template>
    <div>
        <Alert>
            An info prompt
            <template slot="desc">Content of prompt. Content of prompt. Content of prompt. Content of prompt. </template>
        </Alert>
        <Alert type="success">
            A success prompt
            <template slot="desc">Content of prompt. Content of prompt. Content of prompt. Content of prompt. </template>
        </Alert>
        <Alert type="warning">
            A warning prompt
            <template slot="desc">
            Content of prompt. Content of prompt. Content of prompt.
        </template>
        </Alert>
        <Alert type="error">
            An error prompt
            <span slot="desc">
            Custom error description copywriting. <Icon type="help-circled" size="14"></Icon>
        </span>
        </Alert>
        <Alert type="info" show-icon closable>消息提示文案</Alert>
        <Alert type="success" show-icon>成功提示文案</Alert>
        <Alert type="warning" show-icon>警告提示文案</Alert>
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
            <Icon type="ios-bulb-outline" slot="icon"></Icon>
            <template slot="desc">自定义图标文案自定义图标文案自定义图标文案自定义图标文案自定义图标文案</template>
        </Alert>
        <Alert banner type="warning">Notice: notification contents...</Alert>
        <Alert banner closable type="warning">Notice: notification contents...</Alert>
        <Alert closable>An info prompt</Alert>
        <Alert type="success" show-icon closable>
            A success prompt
            <span slot="desc">Content of prompt. Content of prompt. Content of prompt. Content of prompt. </span>
        </Alert>
        <Alert type="warning" closable>
            Custom closing content
            <span slot="close">No longer prompt</span>
        </Alert>
    </div>
</template>
<script>
    import { Alert, Icon } from 'iview';
    export default {
        components: { Alert, Icon }
    }
</script>
