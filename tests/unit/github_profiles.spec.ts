
import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import DeleteButton from '@/components/GithubProfiles/GithubComponents/DeleteButton.vue'
import ProfileCardIndex from '@/components/GithubProfiles/GithubComponents/ProfileCardIndex.vue'

const githubProfiles = [
    {
        id: 1,
        login: 'Test',
        avatar_url: 'test',
    }
]

describe('GithubProfiles', () => {

    it('can render profile card', () => {
        const wrapper = shallowMount(ProfileCardIndex, {
            propsData: {
                profile: githubProfiles[0]
            }
        })
        expect(wrapper.find('button').text()).to.contain('Jump')
    })

    it('can render delete button component', () => {
        const wrapper = shallowMount(DeleteButton, {
            propsData: {
                profileId: 1,
            }
        })
        expect(wrapper.find('button').text()).to.contain('Hide')
    })
})
