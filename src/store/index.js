import {createStore} from 'vuex'

import getters from './getters'
import mutations from './mutations'
import actions from './actions'
import modules from './modules'

export default createStore({
	state: {
		prevButtonStatus: true,
		nextButtonStatus: false,
	},
	getters,
	mutations,
	actions,
	modules
})
