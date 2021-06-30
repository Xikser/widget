import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Player from './components/Views/Player/Player'
import TrackList from './components/Views/TrackList/TrackList'
import Navbar from './components/GlobalComponents/Navbar/Navbar'

createApp(App)
	.component('Navbar', Navbar)
	.component('Player', Player)
	.component('TrackList', TrackList)
	.use(store)
	.use(router)
	.mount('body')
