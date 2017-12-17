<template>

    <div style="width:800px;">
        <Form inline>
            <FormItem>
                <Input v-model="value1" size="large" placeholder="large size"></Input>
            </FormItem>
            <FormItem>
                <InputTag v-model="tagsArray" size="large" @on-change="callbackMethod" ></InputTag>
            </FormItem>  
        </Form>
        <Form inline>
            <FormItem>
                <Input v-model="value1"  placeholder="default size"></Input>
            </FormItem>
            <FormItem>
                <InputNumber :precision="1" :max="10" :min="1" :step="0.1" v-model="value3"></InputNumber>
            </FormItem>
            <FormItem>
                <InputTag v-model="tagsArray"  readOnly ></InputTag>
            </FormItem>

            <FormItem>
                <InputTag v-model="tagsArray"  disabled ></InputTag>
            </FormItem>  

        </Form>
        <div style="width:400px; float: left;">
            <Input v-model="value2" placeholder="default size"></Input>
            <br />
            <Input v-model="value1" size="large" placeholder="large size"></Input>
            <br>
            <br>
            
        </div>
         <div style="width:400px; float: left;">
            <InputTag v-model="tagsArray" addKeyboard="tab" @on-change="callbackMethod" ></InputTag>
            <br />
            <InputTag v-model="tagsArray" placeholder="large size" size="large" @on-change="callbackMethod" ></InputTag>
        </div>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                value1: '',
                value2: '',
                value3: 1,
                tab: 'tab',
                tagsArray: ['Jerry', 'Kramer', 'Elaine', 'George']
            }
        },
        methods: {
            callbackMethod () {
                console.info(arguments)
            }
        }
    }
</script>
