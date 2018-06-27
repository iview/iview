<template>
    <div>
        <p>
            Name: {{ value }}
    </p>
        <p>
            <Button @click="handleRender">Custom content</Button>
        </p>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                value: ''
            }
        },
        methods: {
            handleRender () {
                this.$Modal.confirm({
                    title: '真不错呀',
                    render: (h) => {
                        return h('Input', {
                            props: {
                                value: this.value,
                                autofocus: true,
                                placeholder: 'Please enter your name...'
                            },
                            on: {
                                input: (val) => {
                                    this.value = val;
                                }
                            }
                        })
                    }
                })
            }
        }
    }
</script>
