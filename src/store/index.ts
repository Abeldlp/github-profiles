import { createStore } from 'vuex'
import { state, State } from './state'
import { actions } from './actions'
import { mutations } from './mutations'

export const store = createStore<State>({
    state,
    mutations,
    actions
})

