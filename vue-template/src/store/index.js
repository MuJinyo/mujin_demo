import vue from 'vue'
import vuex from 'vuex'
import info from './modules/info'

vue.use(vuex)

export default new Vuex.Store({
	modules:{
		info
	}
})