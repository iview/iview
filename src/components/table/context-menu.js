export default {
    // For catch DropdownItem 'on-click' event.
    //  see: @/components/dropdown/dropdown-item.vue:39
    name: 'Dropdown',
    props: {
        row: Object,
        render: Function,
        index: Number
    },
    render (h) {
        const params = {
            row: this.row,
            index: this.index
        };
        return this.render(h, params);
    }
};
