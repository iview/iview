<template>
<div>
    <Breadcrumb>
        <Breadcrumb-item href="/">Home</Breadcrumb-item>
        <Breadcrumb-item href="/components/breadcrumb">Components</Breadcrumb-item>
        <Breadcrumb-item>Breadcrumb</Breadcrumb-item>
    </Breadcrumb>
    <Breadcrumb>
        <Breadcrumb-item href="/">
            <Icon type="ios-home-outline"></Icon> Home
        </Breadcrumb-item>
        <Breadcrumb-item href="/components/breadcrumb">
            <Icon type="social-buffer-outline"></Icon> Components
        </Breadcrumb-item>
        <Breadcrumb-item>
            <Icon type="pound"></Icon> Breadcrumb
        </Breadcrumb-item>
    </Breadcrumb>
   <Breadcrumb separator=">">
        <Breadcrumb-item href="/">Home</Breadcrumb-item>
        <Breadcrumb-item href="/components/breadcrumb">Components</Breadcrumb-item>
        <Breadcrumb-item>Breadcrumb</Breadcrumb-item>
    </Breadcrumb>
    <Breadcrumb separator="<b class='demo-breadcrumb-separator'>=></b>">
        <Breadcrumb-item href="/">Home4</Breadcrumb-item>
        <Breadcrumb-item href="/components/breadcrumb">Components</Breadcrumb-item>
        <Breadcrumb-item>Breadcrumb</Breadcrumb-item>
    </Breadcrumb>
    <Breadcrumb>
        <Breadcrumb-item href="/">Home4</Breadcrumb-item>
        <Breadcrumb-item href="/components/breadcrumb">Components</Breadcrumb-item>
        <Breadcrumb-item>Breadcrumb</Breadcrumb-item>
    </Breadcrumb>
</div>
</template>
<style>
    .demo-breadcrumb-separator{
        color: #ff5500;
        padding: 0 5px;
    }
</style>
<script>
    export default {

    }
</script>