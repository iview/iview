<style>
    .demo-breadcrumb-separator{
        color: #ff5500;
        padding: 0 5px;
    }
</style>
<template>
<div>
    <Breadcrumb separator="<b class='demo-breadcrumb-separator'>=></b>">
        <Breadcrumb-item href="/">Home4</Breadcrumb-item>
        <Breadcrumb-item href="/checkbox" replace>Components</Breadcrumb-item>
        <Breadcrumb-item>Breadcrumb</Breadcrumb-item>
    </Breadcrumb>
    <Breadcrumb separator="">
        <Breadcrumb-item href="/">
            <template>Home</template>
            <template slot="separator">
                <b style="color: #ff5500;">-></b>
            </template>
        </Breadcrumb-item>
        <Breadcrumb-item href="/components/breadcrumb">
            <template>Breadcrumb</template>
            <template slot="separator">
                <b style="color: #ff5500;">-></b>
            </template>
        </Breadcrumb-item>
        <Breadcrumb-item>Breadcrumb</Breadcrumb-item>
    </Breadcrumb>
</div>
</template>
<script>
    export default {

    }
</script>