<template>
    <div 
        ref="profileCard"
        class="
            flex 
            flex-col 
            justify-center 
            items-center 
            rounded-lg 
            bg-gray-800 
            m-3 
            w-60
            transition-all
            filter drop-shadow-md
        ">
        <img class="w-80 rounded-t-lg" :src="profile.avatar_url" />
        <h1 class="text-lg text-white m-2">
            <span class="font-bold" style="color: #2784FF">{{formatName.firstLetter}}</span>
            {{formatName.restOfName}}
            <span class="font-bold" style="color: #2784FF">-</span>
        </h1>
        <div class="flex mb-5">
            <a class="m-2" target="_blank" :href="githubProfile.html_url" >
                <button class=" p-2 rounded bg-white flex justify-center items-center">
                    <VueFeather type="github" style="height: 15px"/>
                    <span>Jump</span>
                </button>
            </a>
            <DeleteButton class="m-2" :profileId="githubProfile.id" @deleteProfile="removeProfileFromView"/>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, Ref, computed } from 'vue'
import { GithubProfile } from '@/store/state'
import VueFeather from 'vue-feather'
import DeleteButton from './DeleteButton.vue'
import { gsap } from 'gsap'

interface Props {
    profile: GithubProfile
}

export default defineComponent({
    name: 'ProfileCardIndex',
    props: {
        profile: {
            required: true,
            type: Object as () => GithubProfile
        }
    },
    components: {
        VueFeather,
        DeleteButton
    },
    setup(props: Props){
        const githubProfile: Ref<GithubProfile> = ref(props.profile) 
        const profileCard: Ref<HTMLElement|null> = ref(null)

        const formatName = computed(() => {
            return {
                firstLetter: githubProfile.value.login.charAt(0).toUpperCase(),
                restOfName: githubProfile.value.login.slice(1)
            }
        })

        const removeProfileFromView = () => {
            profileCard.value && profileCard.value.setAttribute('id', 'current')
            gsap.to('#current', {
                y: 30,
                opacity: 0,
                duration: 0.3,
                display: 'none' 
            })
        }
        
        return {
            profileCard,
            githubProfile,
            formatName,
            removeProfileFromView
        }
    }
})
</script>
