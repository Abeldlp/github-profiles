<template>
    <div class="main_button">
        <router-link to="/github-profiles">
            <button 
                id="checkout_button" 
                class="border-2 m-3 p-3 flex justify-between w-40 rounded bg-white"
            >
                <VueFeather type="github" id="github_logo"/>
                <VueFeather id="arrow_right" type="arrow-right" />
                <span id="button_text">Checkout</span>
            </button>
        </router-link>
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import VueFeather from 'vue-feather';
import { gsap } from 'gsap'

export default defineComponent({
    name: 'LandingPageButton',
    components: {
        VueFeather
    },
    setup(){
        onMounted(() => {
            gsap.from('.main_button', {
                opacity: 0,
                x: -10,
                delay: 0.8
            })

        })
    }
})
</script>

<style scoped>

    #github_logo, #arrow_right {
        color: #2784FF;
    }
    #checkout_button {
        transition: all ease-in-out 0.2s;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    }

    #arrow_right {
        transition: all ease-in-out 0.2s;
        transform: translateX(-16px);
        opacity:0;
    }

    #checkout_button:hover {
        width: 180px;
    }

    #checkout_button:hover #github_logo {
        color: gray;
    }

    #checkout_button:hover #arrow_right {
        transform: translateX(10px);
        opacity:1;
    }

    #checkout_button:hover #button_text {
        color: #2784FF;
    }
</style>
