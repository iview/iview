<template>
    <div>
        <Panel title="small & shadow" shadow>
            内容
        </Panel>
        <Panel title="large & shadow" shadow size="large">
            内容
        </Panel>
        <Panel shadow noHeaderBorder>
            <span slot="header">header</span>
        </Panel>

    </div>
</template>
<script>
    export default {
        data() {
            return {
                panels: [1, 2, 3]
            }
        },
        methods: {
            test(index) {
                this.panels.splice(index, 1)
            }
        }
    }
</script>
