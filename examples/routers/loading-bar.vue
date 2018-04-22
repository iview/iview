<template>
    <div>
        <i-button @click.native="start">Start</i-button>
        <i-button @click.native="finish">Finish</i-button>
        <i-button @click.native="error">Error</i-button>
    </div>
</template>
<script>
    export default {
        methods: {
            start () {
                this.$Loading.start();
            },
            finish () {
                this.$Loading.finish();
            },
            error () {
                this.$Loading.error();
            }
        },
        created () {
            this.$Loading.config({
                color: '#5cb85c',
                failedColor: '#f0ad4e',
                height: 5
            });
        }
    }
</script>
