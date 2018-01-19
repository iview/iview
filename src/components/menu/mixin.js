import { findComponentsUpward } from '../../utils/assist';
export default {
    computed: {
        parentSubmenuNum () {
            return findComponentsUpward(this, 'Submenu').length;
        }
    }
}