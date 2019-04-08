
<script>
    const returnArrayFn = () => [];

    export default {
        props: {
            options: {
                type: Array,
                default: returnArrayFn
            },
            slotOptions: {
                type: Array,
                default: returnArrayFn
            },
            slotUpdateHook: {
                type: Function,
                default: () => {}
            },
            maxTagCount: {
                type: Number,
                default: null
            },
            showMore: {
                type: Boolean,
                default: false
            }
        },
        functional: true,
        render(h, {props, parent}){
            // to detect changes in the $slot children/options we do this hack
            // so we can trigger the parents computed properties and have everything reactive
            // although $slot.default is not
            if (props.slotOptions !== parent.$slots.default) props.slotUpdateHook();
            if (!props.showMore && props.maxTagCount && props.maxTagCount > 0 && props.options.length > props.maxTagCount) {
                return props.options.slice(0, props.maxTagCount);
            }
            return props.options;
        }
    };
</script>
