<template>
    <div>
        <router-link to="/github-profiles">
            <button 
                id="checkout_button" 
                class="border-2 m-3 p-3 flex justify-between w-40 rounded"
            >
                <h1>Logo</h1> 
                <span>Checkout</span>
            </button>
        </router-link>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'LandingPageButton',
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
