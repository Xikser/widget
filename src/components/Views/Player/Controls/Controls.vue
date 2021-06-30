<template>
	<div class="controls">
		<div class="controls__content">
			<div class="controls__tile">
				<a href="#" class="controls__button controls__link" target="_blank">
					<i class="fas fa-share-alt"></i>
				</a>
			</div>

			<div class="controls__tile">
				<button class="controls__button prev" @click="prevTrack" :disabled="this.$store.state.prevButtonStatus">
					<i class="fas fa-step-backward"></i>
				</button>

				<button class="controls__button play" v-if="!play" @click="handleClick">
					<i class="fas fa-play"></i>

					<Timeline></Timeline>
				</button>

				<button class="controls__button pause" v-else @click="handleClick">
					<i class="fas fa-pause"></i>

					<Timeline></Timeline>
				</button>

				<button class="controls__button next" @click="nextTrack" :disabled="this.$store.state.nextButtonStatus">
					<i class="fas fa-step-forward"></i>
				</button>
			</div>

			<div class="controls__tile">
				<button class="controls__button favourite">
					<i class="fas fa-heart"></i>
				</button>
			</div>
		</div>
	</div>
</template>

<script src="./component.js"></script>
<style src="./style.sass" lang="sass"/>
