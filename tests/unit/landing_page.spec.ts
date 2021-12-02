import { expect } from 'chai'
import { mount, shallowMount, RouterLinkStub } from '@vue/test-utils'
import LandingPageButton from '@/components/LandingPage/LandingPageComponents/LandingPageButton.vue'
import CompanyLogo from '@/components/LandingPage/LandingPageComponents/CompanyLogo.vue'
import LandingIndex from '@/components/LandingPage/LandingIndex.vue'

describe('LandingPage.vue', () => {

    it('can render child components', () => {
        const wrapper = mount(LandingIndex, {
            stubs: {
                RouterLink: RouterLinkStub
            }
        })
        expect(wrapper.find('span').text()).to.contain('Peaker')
        expect(wrapper.find('#checkout_button').text()).to.contain('Checkout')
    })

    it('can render company logo component', () => {
        const wrapper = shallowMount(CompanyLogo, {
        })
        expect(wrapper.find('span').text()).to.contain('Peaker')
    })

    it('can render landing page button component', () => {
        const wrapper = shallowMount(LandingPageButton, {
            stubs: {
                RouterLink: RouterLinkStub
            }
        })
        expect(wrapper.find('#checkout_button').text()).to.contain('Checkout')
    })
})

