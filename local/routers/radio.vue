<template>
    <div>
        <Alert show-icon>
            成功的提示
        </Alert>
        <Alert closable show-icon>
            成功的提示
            <span slot="desc">这里是成功的内容</span>
        </Alert>
        <Alert type="warning" closable show-icon>
            成功的提示
            <span slot="desc">这里是成功的内容</span>
        </Alert>
        <Alert type="success" closable show-icon>
            成功的提示
            <span slot="desc">这里是成功的内容</span>
        </Alert>
        <Alert type="error" closable show-icon @on-close="closed">
            成功的提示
            <span slot="desc">这里是成功的内容</span>
        </Alert>
    </div>
</template>
<script>
    import { Radio, Alert, Icon } from 'iview';

    const RadioGroup = Radio.Group;

    export default {
        components: {
            Radio,
            RadioGroup,
            Alert,
            Icon
        },
        props: {
        
        },
        data () {
            return {
                radio: true,
                radioGroup: '段模'
            }
        },
        computed: {
        
        },
        methods: {
            changeGroup (data) {
                console.log(data);
            },
            closed (data) {
                console.log(data)
            }
        }
    }
</script>