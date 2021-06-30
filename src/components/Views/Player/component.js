import Controls from './Controls/Controls'
import Volume from './Volume/Volume'
import TopControls from './TopControls/TopControls'
import TrackViewer from './TrackViewer/TrackViewer'

export default {
	name: 'Player',
	props: {
		track: {
			type: Object,
		},
	},
	components: {
		Controls,
		Volume,
		TopControls,
		TrackViewer,
	},
}
