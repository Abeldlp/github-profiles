<template>
    <div>
        <button 
            id="delete_button"
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
import { defineComponent } from 'vue'
import VueFeather from 'vue-feather'
import { useStore } from 'vuex'

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

        const deleteProfile = (): void  => {
            setTimeout(() => {
                store.dispatch('removeGithubProfile', { id: props.profileId })
            }, 500)
            emit('deleteProfile')
        }

        return {
            deleteProfile
        }
    }
})
</script>


