import axios from 'axios'
import { store } from '../store/index'

const fetchAllProfiles = async (): Promise<boolean | string> => {
    try {
        const apiData = await axios.get('https://api.github.com/users')
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
