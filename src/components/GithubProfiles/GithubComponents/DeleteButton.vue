<template>
    <div>
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
            <VueFeather type="trash"/>
            Hide
        </button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import VueFeather from 'vue-feather'

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
        const deleteProfile = ()  => {
            emit('deleteProfile')
        }

        return {
            deleteProfile
        }
    }
})
</script>


