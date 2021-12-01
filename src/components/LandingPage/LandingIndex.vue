<template>
    <div class="h-screen flex flex-col justify-center items-center">
        <CompanyLogo/>
        <LandinPageButton/>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CompanyLogo from './LandingPageComponents/CompanyLogo.vue'
import LandinPageButton from './LandingPageComponents/LandingPageButton.vue'

export default defineComponent({
    name: 'LandingIndex',
    components: {
        CompanyLogo,
        LandinPageButton
    },
})
</script>
