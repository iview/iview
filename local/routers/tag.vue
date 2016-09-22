<template>
    <div>
        <Button @click="start">start</Button>
        <Button @click="destroy">destroy</Button>
        <Button @click="finish">finish</Button>
        <Button @click="error">error</Button>
        <Button @click="update">update</Button>
    </div>
</template>
<script>
    import { Tag, LoadingBar, Button } from 'iview';
    export default {
        components: {
            Tag,
            Button
        },
        props: {
        
        },
        data () {
            return {
            
            }
        },
        computed: {
        
        },
        methods: {
            start () {
                LoadingBar.start();
            },
            destroy () {
                LoadingBar.destroy();
            },
            finish () {
                LoadingBar.finish();
            },
            error () {
                LoadingBar.error();
            },
            update () {
                LoadingBar.update(50);
            }
        },
        ready () {
            LoadingBar.start();
            setTimeout(function () {
                LoadingBar.finish();
            }, 2000)
        }
    }
</script>