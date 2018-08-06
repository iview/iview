export default {
    methods: {
        handleEscape(e) {
            this.dispatch('ColorPicker', 'on-escape-keydown', e);
        },
    },
};
