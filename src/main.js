import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Player from './components/Views/Player/Player'
import PlayList from './components/Views/TrackList/TrackList'

createApp(App)
	.component('Player', Player)
	.component('PlayList', PlayList)
	.use(store)
	.use(router)
	.mount('body')
