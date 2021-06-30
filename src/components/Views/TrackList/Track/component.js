export default {
	name: 'Track',
	props: {
		track: {
			type: Object,
			required: true
		}
	},
	methods: {
		handleClick() {
			this.$parent.$emit('changeTrack', this.track)
		}
	}
}
