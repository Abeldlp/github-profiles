<template>
    <div>
        <router-link to="/github-profiles">
            <button 
                id="checkout_button" 
                class="border-2 m-3 p-3 flex justify-between w-40 rounded"
            >
                <VueFeather type="github" style="color: #2784FF"/>
                <span>Checkout</span>
            </button>
        </router-link>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import VueFeather from 'vue-feather';

export default defineComponent({
    name: 'LandingPageButton',
    components: {
        VueFeather
    }
})
</script>

<style scoped>
    #checkout_button {
        transition: all ease-in-out 0.2s;
    }

    #checkout_button:hover {
        width: 200px;
    }
</style>
