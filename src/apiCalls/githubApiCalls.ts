import axios from 'axios'
import { store } from '../store/index'

const fetchGithubProfiles = async (profilesNeeded = 0): Promise<boolean | string> => {
    try {
        const apiData = await axios.get('https://api.github.com/users')
        const data = await apiData.data
        return profilesNeeded > 0 ?
            store.dispatch('setGithubProfiles', data.slice(0, profilesNeeded)) :
            store.dispatch('setGithubProfiles', data)
    } catch {
        //notify or log the error
        return 'error'
    }
}

export {
    fetchGithubProfiles
}
