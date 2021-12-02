import { expect } from 'chai'
import { fetchAllProfiles } from '../../src/apiCalls/githubApiCalls'

describe('ApiCalls', () => {
    it('can fetch github profiles', () => {
        const data = fetchAllProfiles()
        expect(data).to.not.null
    })
})
