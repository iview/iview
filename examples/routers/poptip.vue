<template>
    <div>
        <Poptip trigger="hover" title="Title" content="content">
            <Button>Hover</Button>
        </Poptip>
        <Poptip title="Title" content="content">
            <Button>Click</Button>
        </Poptip>
        <Poptip trigger="focus" title="Title" content="content">
            <Button>Focus</Button>
        </Poptip>
        <Poptip trigger="focus" title="Title" content="content">
            <Input placeholder="Input focus" />
        </Poptip>
    </div>
</template>
<script>
    export default {

    }
</script>
