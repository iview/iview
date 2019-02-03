'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _assist = require('../../utils/assist');

exports.default = {
    data: function data() {
        return {
            menu: (0, _assist.findComponentUpward)(this, 'Menu')
        };
    },

    computed: {
        hasParentSubmenu: function hasParentSubmenu() {
            return !!(0, _assist.findComponentUpward)(this, 'Submenu');
        },
        parentSubmenuNum: function parentSubmenuNum() {
            return (0, _assist.findComponentsUpward)(this, 'Submenu').length;
        },
        mode: function mode() {
            return this.menu.mode;
        }
    }
};