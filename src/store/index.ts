import { createStore } from 'vuex'
import { State, GithubProfile } from './state'

export const store = createStore<State>({
    state: {
        githubProfiles: []
    },
    mutations: {
        UPDATE_GITHUB_PROFILES(state: State, payload: GithubProfile[]) {
            state.githubProfiles = payload
        }
    },
    actions: {
        setGithubProfiles(context, payload: GithubProfile[]) {
            const profiles = context.state.githubProfiles
            profiles.push(...payload)
            context.commit('UPDATE_GITHUB_PROFILES', profiles)
        },
        removeGithubProfile(context, payload: { id: number }) {
            const profiles = context.state.githubProfiles
            const selectedProfile = profiles.findIndex((profile: GithubProfile) => profile.id === payload.id)
            profiles.splice(selectedProfile, 1)
            context.commit('UPDATE_GITHUB_PROFILES', profiles)
        }
    }
})

