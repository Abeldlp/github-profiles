<template>
    <div>
        <button 
            class="
                border-2 
                p-2 
                rounded 
                hover:bg-blue-500 
                hover:text-white 
                transition-all
                flex
                justify-between
                items-center
                bg-white
                m-auto
            "
            @click="reloadCards"
        >
            <p>Bring them back</p>
            <VueFeather type="heart"  style="height: 15px; padding-left: 5px;"/>
        </button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import VueFeather from 'vue-feather'

export default defineComponent({
    name: 'ReloadCardButton',
    components: {
        VueFeather
    },
    setup(props, {emit}){
        const reloadCards = (): void => {
            emit('reloadCards')
        }

        return {
            reloadCards
        }
    }

})
</script>

