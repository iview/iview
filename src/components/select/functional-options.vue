
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
        },
        functional: true,
        render(h, {props, parent}) {
            // In order to response data changes,i do this hack. #4372
            if(props.slotOptions.length > 0) {
                for(let i in props.slotOptions) {
                    if(props.slotOptions[i].key !== parent.$slots.default[i].key) {
                        props.slotUpdateHook();
                        break;
                    }
                }
            }
            if(props.slotOptions && parent.$slots.default && props.slotOptions.length !== parent.$slots.default.length) props.slotUpdateHook();
            return props.options;
        }
    };
</script>
