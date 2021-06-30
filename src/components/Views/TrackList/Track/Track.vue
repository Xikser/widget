<template>
	<div class="track" @click="handleClick">
		<div class="track__info">
			<div class="track__info-box">
				<p class="track__length">{{ track.length }}</p>
				<span>|</span>
				<p class="track__artist">{{ track.artist }}</p>
			</div>

			<div class="track__info-box">
				<p class="track__title">{{ track.title }}</p>
			</div>
		</div>

		<div class="track__icons">
			<i class="fas fa-share-alt"></i>
			<i class="fas fa-heart"></i>
		</div>

		<div class="placeholder"></div>
	</div>
</template>

<script src="./component.js"></script>
<style src="./style.sass" lang="sass"/>
