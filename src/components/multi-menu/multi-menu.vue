<!--
@Author: chenhuachao <chc>
@Date:   2018-01-25T17:12:44+08:00
@Email:  chenhuachaoxyz@gmail.com
@Filename: multi-menu.vue
@Last modified by:   chc
@Last modified time: 2018-01-26T15:18:16+08:00
@License: MIT
@Copyright: 2018
-->
<script>
import Menu from '../menu';
let getObject = (list, obj) => {
    let ans = {};
    for(let i = 0;i < list.length; i++) {
        if(obj.hasOwnProperty(list[i])) {
            ans[list[i]] = obj[list[i]];
        }
    }
    return ans;
};
export default {
    name: 'MultiMenu',
    props: {
        data: {
            type: Array,
            default: [],
        },
        config: {
            type: Object,
            default: {},
        }
    },
    components: {
        'Menu': Menu,
        'SubMenu': Menu.Sub,
        'MenuGroup': Menu.Group,
        'MenuItem': Menu.Item,
    },
    methods: {
        getChildren(h, data) {
            let list = [];
            if (data && data.length) {
                for (let i = 0;i < data.length; i++) {
                    if (data[i].groups) {
                        list.push(this.getMenuGroup(h, data[i]));
                    } else if (data[i].children) {
                        list.push(this.getSubMenu(h, data[i]));
                    } else {
                        list.push(this.getMenuItem(h, data[i]));
                    }
                }
            }
            return list;
        },
        getTemplate(h, data) {
            let child = [];
            if (data.icon) {
                child.push(h('Icon', {
                    props: {
                        type: data.icon,
                    }
                }));
            }
            child.push(data.title ? data.title : '');
            return h('template', {
                slot: 'title'
            }, child, child.length - 1);
        },
        getMenuGroup(h, data) {
            let props = getObject(['title'], data);
            let child = [];
            child.push(...this.getChildren(h, data.groups));
            return h('MenuGroup', {
                props: props,
            }, child);
        },
        getMenuItem(h, data) {
            let props = getObject(['name'], data);
            let child = [];
            child.push(data.title ? data.title : '');
            return h('MenuItem', {
                props: props,
            }, child);
        },
        getSubMenu(h, data) {
            let props = getObject(['name'], data);
            let child = [];
            if (data.icon || data.title) {
                child.push(this.getTemplate(h, data));
            }
            child.push(...this.getChildren(h, data.children));
            return h('SubMenu', {
                props: props,
            }, child);
        },
        getMenu(h, data) {
            let list = data;
            let child = [];
            child.push(...this.getChildren(h, list));
            return h('Menu', {
                props: this.config,
                on: {
                    'on-select': (name) => {
                        this.$emit('on-select', name);
                    },
                    'on-open-change': (name) => {
                        this.$emit('on-open-change', name);
                    }
                }
            }, child);
        },
    },
    render: function (h) {
        let ans = this.getMenu(h, this.data);
        return ans;
    },
};
</script>
