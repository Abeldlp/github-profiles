
export interface GithubProfile {
    id: number,
    login: string,
    avatar_url: string
}

export interface State {
    githubProfiles: GithubProfile[]
}

const state = {
    githubProfiles: []
}

export {
    state,
}

