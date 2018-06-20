export default {
    computed: {
        linkUrl () {

        }
    },
    methods: {
        handleClick () {
            const isRoute = this.$router;
            if (isRoute) {
                this.replace ? this.$router.replace(this.to) : this.$router.push(this.to);
            } else {
                window.location.href = this.to;
            }
        }
    }
}