<template>
<div class="background">
   <span v-for="(particle, index) in particleCount" :key="index" :style="buildRandomStyle()">.</span>
</div>
</template>

<script lang="ts">
import { defineComponent, Ref, ref } from 'vue'

interface Style {
    color: string, 
    fontSize: string,
    top: string, 
    left: string, 
    animationDuration: string ,
    animationDelay: string,
    transformOrigin: string,
    boxShadow: string 
}

export default defineComponent({
    name: 'BackgroundParticles',
    setup(){
        const particleCount: Ref<number> = ref(30)

        const possibleColors: Ref<string[]> = ref([
            '#2789ff',
            '#11206f',
            '#0052cc'
        ])

        const possibleNVim: Ref<string[]> = ref(['2vmim', '-2vmim'])
        const randomNvim = (): number => Math.floor(Math.random() * (1000 - 100) + 100) / 1000
        const randomNumberTo = (num: number): number => Math.floor(Math.random() * num)
        const randomizeAbsolute = (num: number): number => num *= Math.round(Math.random()) ? 1 : -1

        const buildRandomStyle = (): Style => {
            return {
                color: possibleColors.value[Math.floor(Math.random() * 3)], 
                fontSize: randomNumberTo(100) + 50 + 'px',
                top: randomNumberTo(100) + '%', 
                left: randomNumberTo(100) + '%', 
                animationDuration: randomNumberTo(400) + 50 + 's',
                animationDelay: -Math.abs(randomNumberTo(400)) + 's',
                transformOrigin: buildRandomOrigin(),
                boxShadow: buildRandomShadow()
            }
        }

        const buildRandomOrigin = (): string => {
            return randomizeAbsolute(randomNumberTo(25)) + 'vw ' + randomizeAbsolute(randomNumberTo(25)) + 'vh'
        }

        const buildRandomShadow = (): string => {
            return possibleNVim.value[randomNumberTo(2)] + ' 0 ' + randomNvim() + ' currentColor'
        }

        console.log(buildRandomStyle())

        return {
            particleCount,
            buildRandomStyle,
        }
    }
})
</script>

<style scoped>

@keyframes move {
    100% {
        transform: translate3d(0, 0, 1px) rotate(360deg);
    }
}

.background {
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    background: #ffffff;
    overflow: hidden;
}

.background span {
    width: 1vmin;
    height: 1vmin;
    border-radius: 1vmin;
    backface-visibility: hidden;
    position: absolute;
    animation: move;
    animation-duration: 12;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
}

</style>

