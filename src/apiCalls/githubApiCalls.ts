import axios from 'axios'
import { store } from '../store/index'

const fetchAllProfiles = async (endpoint: string): Promise<boolean | string> => {
    try {
        const apiData = await axios.get(endpoint)
        const data = await apiData.data
        return store.dispatch('setGithubProfiles', data.slice(0, 10))
    } catch {
        //notify or log the error
        return 'error occured'
    }
}

export {
    fetchAllProfiles
}
