export default {
  mounted () {
    this.$overflowScrollingList = document.querySelectorAll('.vux-fix-safari-overflow-scrolling')
  },
  methods: {
    fixSafariOverflowScrolling (type) {
      if (!this.$overflowScrollingList.length) return
      // if (!/iphone/i.test(navigator.userAgent)) return
      for (let i = 0; i < this.$overflowScrollingList.length; i++) {
        this.$overflowScrollingList[i].style.webkitOverflowScrolling = type
      }
    }
  }
}
