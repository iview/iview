<template>
    <div v-if="showSizer || showElevator" :class="optsClasses">
        <div v-if="showSizer" :class="sizerClasses">
            <i-select v-model="currentPageSize" :size="size" :placement="placement" :transfer="transfer" @on-change="changeSize">
                <i-option v-for="item in pageSizeOpts" :key="item" :value="item" style="text-align:center;">{{ item }} {{ t('i.page.page') }}</i-option>
            </i-select>
        </div>
        <div v-if="showElevator" :class="ElevatorClasses">
            {{ t('i.page.goto') }}
            <input
              type="text"
              :value="_current"
              autocomplete="off"
              spellcheck="false"
              @keyup.enter="changePage"
            >
            {{ t('i.page.p') }}
        </div>
    </div>
</template>
<script>
    import iSelect from '../../components/select/select.vue';
    import iOption from '../../components/select/option.vue';
    import Locale from '../../mixins/locale';

    const prefixCls = 'ivu-page';

    function isValueNumber (value) {
        return (/^[1-9][0-9]*$/).test(value + '');
    }

    export default {
        name: 'PageOption',
        mixins: [ Locale ],
        components: { iSelect, iOption },
        props: {
            pageSizeOpts: Array,
            showSizer: Boolean,
            showElevator: Boolean,
            current: Number,
            _current: Number,
            pageSize: Number,
            allPages: Number,
            isSmall: Boolean,
            placement: String,
            transfer: Boolean
        },
        data () {
            return {
                currentPageSize: this.pageSize
            };
        },
        watch: {
            pageSize (val) {
                this.currentPageSize = val;
            }
        },
        computed: {
            size () {
                return this.isSmall ? 'small' : 'default';
            },
            optsClasses () {
                return [
                    `${prefixCls}-options`
                ];
            },
            sizerClasses () {
                return [
                    `${prefixCls}-options-sizer`
                ];
            },
            ElevatorClasses () {
                return [
                    `${prefixCls}-options-elevator`
                ];
            }
        },
        methods: {
            changeSize () {
                this.$emit('on-size', this.currentPageSize);
            },
            changePage (event) {
                let val = event.target.value.trim();
                let page = 0;

                if (isValueNumber(val)) {
                    val = Number(val);
                    if (val != this.current) {
                        const allPages = this.allPages;

                        if (val > allPages) {
                            page = allPages;
                        } else {
                            page = val;
                        }
                    }
                } else {
                    page = 1;
                }

                if (page) {
                    this.$emit('on-page', page);
                    event.target.value = page;
                }
            }
        }
    };
</script>
