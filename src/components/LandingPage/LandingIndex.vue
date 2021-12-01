<template>
    <div>
        <CompanyLogo/>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CompanyLogo from './LandingPageComponents/CompanyLogo.vue'

export default defineComponent({
    name: 'LandingIndex',
    components: {
        CompanyLogo
    }
})
</script>
