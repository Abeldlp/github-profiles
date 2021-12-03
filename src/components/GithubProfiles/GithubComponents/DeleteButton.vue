<template>
    <div ref="deleteButton">
        <button 
            @click="deleteProfile"
            class="
                flex 
                justify-center 
                items-center 
                bg-red-400
                p-2
                rounded
                text-white
            ">
            <VueFeather type="trash" style="height: 15px"/>
            Hide
        </button>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, Ref } from 'vue'
import VueFeather from 'vue-feather'
import { useStore } from 'vuex'
import { gsap } from 'gsap'


interface Props {
    profileId: number
}

export default defineComponent({
    name: 'DeleteButton',
    components: {
        VueFeather
    },
    props: {
        profileId: {
            required: true,
            type: Number 
        }
    },
    setup(props: Props, {emit}){
        const store = useStore()
        const deleteButton : Ref<HTMLElement|null> = ref(null)

        const deleteProfile = (): void  => {
            deleteButton.value && deleteButton.value.setAttribute('id', 'delete_button')
            gsap.to('#delete_button', {
                scale: 0,
                rounded: 100
            })
            setTimeout(() => {
                store.dispatch('removeGithubProfile', { id: props.profileId })
            }, 300)
            emit('deleteProfile')
        }

        return {
            deleteProfile,
            deleteButton
        }
    }
})
</script>


