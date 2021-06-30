export default {
	name: 'Hamburger',
	methods: {
		handleClick () {
			this.$parent.$emit('clicked')
		}
	}
}
