<template>
	<section class="player">
		<div class="player__top-content">
			<Navbar></Navbar>
			<TopControls></TopControls>
			<TrackViewer :title="track.title" :artist="track.artist"></TrackViewer>
		</div>
		<div class="player__bottom-content">
			<Volume></Volume>
			<Controls></Controls>
		</div>
	</section>
</template>

<script src="./component.js"></script>
<style src="./style.sass" lang="sass"/>
