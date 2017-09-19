// used for Modal & $Spin
import { getScrollBarSize } from '../../utils/assist';
export default {
    methods: {
        checkScrollBar () {
            let fullWindowWidth = window.innerWidth;
            if (!fullWindowWidth) { // workaround for missing window.innerWidth in IE8
                const documentElementRect = document.documentElement.getBoundingClientRect();
                fullWindowWidth = documentElementRect.right - Math.abs(documentElementRect.left);
            }
            this.bodyIsOverflowing = document.body.clientWidth < fullWindowWidth;
            if (this.bodyIsOverflowing) {
                this.scrollBarWidth = getScrollBarSize();
            }
        },
        setScrollBar () {
            if (this.bodyIsOverflowing && this.scrollBarWidth !== undefined) {
                document.body.style.paddingRight = `${this.scrollBarWidth}px`;
            }
        },
        resetScrollBar () {
            document.body.style.paddingRight = '';
        },
        addScrollEffect () {
            this.checkScrollBar();
            this.setScrollBar();
            document.body.style.overflow = 'hidden';
        },
        removeScrollEffect() {
            document.body.style.overflow = '';
            this.resetScrollBar();
        }
    }
};