<template>
	<section class="tracklist">
		<div class="tracklist__header">
			<a class="tracklist__button">
				<img src="../../../assets/images/arrow.svg" alt="arrow" @click="handleClick">
			</a>

			<h2>Playlist</h2>
		</div>

		<div class="tracklist__content">
			<ul class="tracklist__list">
				<li
					class="tracklist__list-item"
					v-for="track in tracks"
					:key="track.id"
				>
					<Track
						:track="track"
					/>
				</li>
			</ul>

		</div>
	</section>
</template>

<script src="./component.js"></script>
<style src="./style.sass" lang="sass"/>
