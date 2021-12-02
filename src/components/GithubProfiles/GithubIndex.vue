<template>
    <div>
        <div class="flex flex-wrap justify-center items-center">
            <img class="w-20" src="@/assets/logo.svg"/> 
            <h1 class="text-6xl sm:text-6xl md:text-7xl lg:text-8xl mt-4 mb-3" >Where it all started</h1>
        </div>
        <div class="container flex flex-wrap justify-center items-center m-auto">
            <ProfileCardIndex 
                v-for="profile in githubProfiles" 
                :key="profile.id" 
                :profile="profile"
            />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, Ref } from 'vue'
import ProfileCardIndex from './GithubComponents/ProfileCardIndex.vue'
import { fetchAllProfiles } from '@/apiCalls/githubApiCalls'
import { useStore } from 'vuex'
import { GithubProfile } from '@/store/state'

export default defineComponent({
    name: 'GithubIndex',
    components: {
        ProfileCardIndex
    },
    setup(){
        fetchAllProfiles() 
        const store = useStore()

        const githubProfiles: Ref<GithubProfile[]> = ref(store.state.githubProfiles)
        return {
            githubProfiles,
        }
    }
})
</script>
