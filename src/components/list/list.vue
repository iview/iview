<template>
    <div :class="wrapClasses">
        <slot></slot>
    </div>
</template>
<script>
    import Icon from '../icon';
    import {oneOf} from '../../utils/assist';

    const prefixCls = 'ivu-list';

    export default {
        name: 'List',
        components: {Icon},
        props: {
            size: {
                type: String,
                default: ''
            }
        },
        data () {
            return {
                closed: false,
                desc: false
            };
        },
        computed: {
            wrapClasses () {
                return [
                    `${prefixCls}`,
                    {
                        [`${prefixCls}--${this.size}`]: this.size
                    }
                ];
            }
        }
    };
</script>
