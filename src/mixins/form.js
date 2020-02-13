export default {
    inject: {
        FormInstance: {
            default: ''
        }
    },
    computed: {
        itemDisabled () {
            let state = this.disabled;
            if (!state && this.FormInstance) state = this.FormInstance.disabled;
            return state;
        }
    }
};