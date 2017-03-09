<template>
 <div>  
    <i-button @click.native="start">Start</i-button>
    <i-button @click.native="finish">Finish</i-button>
    <i-button @click.native="error">Error</i-button>
    <i-button @click.native="destroy">destroy</i-button>
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
            },
            destroy () {
                this.$Loading.destroy();
            }
        }
    }
</script>