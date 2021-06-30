<template>
	<main>
		<Player></Player>
		<TrackList></TrackList>
	</main>
</template>

<script>
export default {
	name: 'App',
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
