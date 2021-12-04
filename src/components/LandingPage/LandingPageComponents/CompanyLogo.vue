<template>
    <div class="flex flex-wrap justify-center items-center">
        <img src="@/assets/logo.svg" id="logo" alt="company_logo" class="h-40 m-5"/>
        <h1 class="text-5xl" id="logo_text">
            Github Profile 
            <span style="color: #2784FF" class="font-bold">Peaker</span>
        </h1>
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import { gsap } from 'gsap'

export default defineComponent({
    name: 'CompanyLogo',
    setup(){
        onMounted(() => {
            gsap.from('#logo', {
                scale: 0,
                ease: 'elastic',
                delay: 0.5 
            })

            gsap.from('#logo_text', {
                x: 30,
                opacity: 0,
                delay: 0.8
            })
            
        })
    }
})
</script>
