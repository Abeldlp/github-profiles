import { expect } from 'chai'
import { fetchGithubProfiles } from '../../src/apiCalls/githubApiCalls'

describe('ApiCalls', () => {
    it('can fetch github profiles', () => {
        const data = fetchGithubProfiles(1)
        expect(data).to.not.null
    })
})
