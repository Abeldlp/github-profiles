<template>
    <div 
        ref="profileCard"
        id="card_template"
        class="
            flex 
            flex-col 
            justify-center 
            items-center 
            rounded-lg 
            m-3 
            w-60
            "
        >
        <div id="profile_image" :style="imageStyle"></div>
        <h1 id="target" class="text-lg text-white m-2">
            <span class="font-bold" style="color: #2784FF">{{formatName.firstLetter}}</span>
            {{formatName.restOfName}}
            <span class="font-bold" style="color: #2784FF">-</span>
        </h1>
        <div id="target" class="flex mb-5">
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

        const imageStyle = ref({
            height: '250px',
            width: '100%',
            background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 50%, #213C5A 100%), url(' + githubProfile.value.avatar_url + ')',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: '8px'

        })

        const formatName = computed(() => {
            return {
                firstLetter: githubProfile.value.login.charAt(0).toUpperCase(),
                restOfName: githubProfile.value.login.slice(1)
            }
        })

        const removeProfileFromView = () => {
            profileCard.value && profileCard.value.setAttribute('id', 'current')
            gsap.to('#current >#target', {
                opacity: 0,
                duration: 0
            })
            gsap.to('#current', {
                scale: 0.5,
                opacity: 0,
                y: 120,
                /* x:45, */
                borderRadius: '+=100%',
                duration: 0.1,
            })
        }
        
        return {
            imageStyle,
            profileCard,
            githubProfile,
            formatName,
            removeProfileFromView
        }
    }
})
</script>
<style scoped>

#card_template {
    background: linear-gradient(to top, #09203f 0%, #537895 100%);
    overflow: hidden;
}

#profile_image {
    transition: all ease-in-out 0.5s;
}

#card_template:hover #profile_image {
    transform: scale(1.05);
}
</style>
