import Timeline from '../Timeline/Timeline'

export default {
	name: 'Controls',
	components: {
		Timeline,
	},
	data() {
		return {
			play: false,
		}
	},
	methods: {
		handleClick() {
			this.play = !this.play
		},
		nextTrack() {
			this.$parent.$emit('next')
		},
		prevTrack() {
			this.$parent.$emit('prev')
		}
	}
}
