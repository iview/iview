<style>
    body{
        height: 2000px;
    }
    .scroll-box{
        height: 400px;
        overflow: auto;
    }
    .scroll-list{
        height: 2000px;
        background: linear-gradient(to bottom,#3399ff,#f5f5f5);
    }
</style>
<template>
<div>
    <BackTop></BackTop>
    <div class="scroll-box" id="scroll-box">
        <div class="scroll-list">
            <h1>scroll content</h1>
        </div>
        <BackTop listen="scroll-box"></BackTop>
    </div>
</div>
</template>
<script>
    export default {
        data(){
            return {

            }
        },
        mounted(){
            
        }
    }
</script>
