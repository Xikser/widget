<template>
	<main>
		<Player
				@clicked="handleTrackListStatus"
				@next="nextTrack"
				@prev="prevTrack"
				:track="currentTrack[0]"
				v-if="!tracklistViewStatus"
		></Player>
		<TrackList
				@clicked="handleTrackListStatus"
				@changeTrack="change"
				v-else
		></TrackList>
	</main>
</template>

<script>
import tracks from './data/tracks.json'
import {watchEffect} from "vue";

export default {
	name: 'App',
	data() {
		return {
			tracklistViewStatus: false,
			currentTrackID: 1,
			currentTrack: Object,
			tracksList: tracks,
		}
	},
	created() {
		this.currentTrack = this.tracksList.filter(track => track.id === this.currentTrackID)
	},
	methods: {
		handleTrackListStatus() {
			this.tracklistViewStatus = !this.tracklistViewStatus
		},
		change(element) {
			this.currentTrackID = element.id
			this.currentTrack = this.tracksList.filter(track => track.id === this.currentTrackID)
			this.tracklistViewStatus = !this.tracklistViewStatus
		},
		nextTrack() {
			this.currentTrackID += 1

			watchEffect(() => {
				this.currentTrack = this.tracksList.filter(track => track.id === this.currentTrackID)
				this.$store.state.nextButtonStatus = this.currentTrackID >= this.tracksList.length

				if (this.currentTrackID > 1) {
					this.$store.state.prevButtonStatus = false
				}
			})
		},
		prevTrack() {
			this.currentTrackID -= 1

			watchEffect(() => {
				this.currentTrack = this.tracksList.filter(track => track.id === this.currentTrackID)
				this.$store.state.prevButtonStatus = this.currentTrackID <= 1;

				if (this.currentTrackID < this.tracksList.length) {
					this.$store.state.nextButtonStatus = false
				}
			})
		}
	}
}
</script>

<style lang="sass">
@import './assets/sass/variables'

html
	font-size: 10px
	scroll-behavior: smooth

*, *::before, *::after
	margin: 0
	box-sizing: border-box

body
	overflow-x: hidden
	background: white
	width: 100%
	color: $color--light
	font-family: $font--default

button:disabled
	background: gray !important

main
	position: relative
	width: 100%
	min-height: 100vh
	margin: auto
	display: flex
	align-items: center
	justify-content: center
	background-image: url("./assets/images/bg.jpg")
	background-size: cover
	background-repeat: no-repeat
	background-position: center center

button
	outline: none
	border: 0
	background: transparent

i
	color: $color--dark

a
	text-decoration: none
	color: $color--dark

ol, ul, li
	list-style: none
</style>
