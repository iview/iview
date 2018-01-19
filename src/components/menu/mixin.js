import { hasParentSubmenu, findComponentUpward, findComponentsUpward } from '../../utils/assist';
export default {
    computed: {
        hasParentSubmenu () {
            return findComponentUpward(this, 'Submenu');
        },
        parentSubmenuNum () {
            return findComponentsUpward(this, 'Submenu').length;
        }
    }
}