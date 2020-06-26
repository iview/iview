<template>
    <div>
        <Calendar>
            <template  v-slot:default="slotProps">
                <ul class="info-list">
                    <li class="info-item" v-for="(it, index) in newsList[slotProps.date]" :key="index">
                        {{it.label}}
                    </li>
                </ul>
            </template>
        </Calendar>
    </div>
</template>
<script>
    export default {
        name: 'CalendarDemo',
        data(){
            return {
                newsList: {
                    '2020-06-01': [
                        { label: 'name1' }
                    ]
                }
            }
        }
    }
</script>
