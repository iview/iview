<template>
    <i-button @click="toggleClose">closable</i-button>

    <div style="margin:20px;width:400px">
        <Tabs type="line" :closable="closable" 3399ff>
            <Tab-pane label="Tab 1">Tab1 content</Tab-pane>
            <Tab-pane label="Tab 2" icon="ionic">Tab2 content</Tab-pane>
            <Tab-pane label="Tab 3" disabled>Tab3 content</Tab-pane>
            <Tab-pane label="Tab 4">Tab4 content</Tab-pane>
            <Tab-pane label="Tab 5">Tab5 content</Tab-pane>
            <Tab-pane label="Tab 6" icon="ionic">Tab6 content</Tab-pane>
            <Tab-pane label="Tab 7" disabled>Tab7 content</Tab-pane>
            <Tab-pane label="Tab 888888888">Tab8 content</Tab-pane>
        </Tabs>
    </div>
</template>
<script>
    export default {
        props: {

        },
        data () {
            return {
                closable: true
            }
        },
        computed: {

        },
        methods: {
            toggleClose () {
                this.closable = !this.closable;
            }
        }
    }
</script>