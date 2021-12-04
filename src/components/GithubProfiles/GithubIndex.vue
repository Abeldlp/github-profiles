<template>
    <div>
        <div id="profile_header" class="flex flex-wrap justify-center items-center">
            <img class="w-20 m-3" src="@/assets/logo.svg"/> 
            <h1 class="text-6xl sm:text-6xl md:text-7xl lg:text-8xl mt-4 mb-3" >Where it <i style="color: #2784FF">all</i> started</h1>
        </div>
        <div v-show="localPageLoading" class="loading_ring">
            <RingLoader id="loading_ring" color="#2784FF"/>
        </div>
        <div v-show="!localPageLoading" id="card_container" >
            <div v-if="positiveResponse" id="github_card_container" class="container flex flex-wrap justify-center items-center m-auto">
                <ProfileCardIndex 
                    class="profile_card_index"
                    v-for="profile in githubProfiles" 
                    :key="profile.id" 
                    :profile="profile"
                />
            </div>
            <ErrorComponent v-else id="error_section"/>
        </div>
    </div>
</template>

<script lang="ts">
import ErrorComponent from './GithubComponents/ErrorComponent.vue'
import ProfileCardIndex from './GithubComponents/ProfileCardIndex.vue'
import RingLoader from 'vue-spinner/src/RingLoader.vue'
import { GithubProfile } from '@/store/state'
import { defineComponent, ref, Ref, onMounted } from 'vue'
import { fetchAllProfiles } from '@/apiCalls/githubApiCalls'
import { gsap } from 'gsap'
import { useStore } from 'vuex'

export default defineComponent({
    name: 'GithubIndex',
    components: {
        ProfileCardIndex,
        RingLoader,
        ErrorComponent
    },
    setup(){
        const store = useStore()
        const localPageLoading: Ref<boolean> = ref(true)
        const positiveResponse: Ref<boolean> = ref(true)
        const githubProfiles: Ref<GithubProfile[]> = ref(store.state.githubProfiles)

        const loadPage = (): void => {
            fetchAllProfiles()
                .then(( res ) => {
                    if( res === 'error') {
                        positiveResponse.value = false
                        transitionToContent()
                    } else {
                        transitionToContent()
                    }
                })
        }

        const transitionToContent = (): void => {
                gsap.to('#loading_ring', {
                    opacity: 0,
                    scale: -1,
                    duration: 0.5,
                })

            setTimeout(() => {
                localPageLoading.value = false
                setTimeout(() => {
                    gsap.from('#github_card_container > .profile_card_index', {
                        opacity: 0,
                        y: 50,
                        duration: 0.05,
                        stagger: 0.02,
                        overwrite: 'auto'
                    })

                })
            }, 1000)
        }

        onMounted(() => {
            gsap.from('#profile_header', {
                opacity: 0,
                y: 30
            })
        })

        loadPage()

        return {
            localPageLoading,
            githubProfiles,
            positiveResponse
        }
    }
})
</script>

<style scoped>
    .loading_ring {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    #error_section {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

</style>
