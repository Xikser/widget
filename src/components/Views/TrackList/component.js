import Track from './Track/Track'
import tracks from '../../../data/tracks.json'

export default {
	name: 'Tracklist',
	components: {
		Track,
	},
	data() {
		return {
			tracks: tracks
		}
	},
}
