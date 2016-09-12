<template>
    <div>
        <Collapse active-key="2">
            <Panel key="1">
                Header1
                <Collapse active-key="2" slot="content">
                    <Panel key="1">
                        inHeader1
                        <p slot="content">inContent1</p>
                    </Panel>
                    <Panel key="2">
                        inHeader2
                        <p slot="content">inContent2</p>
                    </Panel>
                    <Panel key="3">
                        inHeader3
                        <p slot="content">inContent3</p>
                    </Panel>
                </Collapse>
            </Panel>
            <Panel key="2">
                Header2
                <p slot="content">A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.</p>
            </Panel>
            <Panel key="3">
                Header3
                <p slot="content">A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.</p>
            </Panel>
        </Collapse>
        <Button @click="activeKey = '2'">换</Button>
    </div>
</template>
<script>
    import { Radio, Alert, Icon, Collapse, Button } from 'iview';

    const RadioGroup = Radio.Group;
    const Panel = Collapse.Panel;

    export default {
        components: {
            Radio,
            RadioGroup,
            Alert,
            Icon,
            Collapse,
            Panel,
            Button
        },
        props: {
        
        },
        data () {
            return {
                radio: true,
                radioGroup: '段模',
                activeKey: [1,2]
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