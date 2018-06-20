export default {
    computed: {
        linkUrl () {
            const type = typeof this.to;
            return type === 'string' ? this.to : null;
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