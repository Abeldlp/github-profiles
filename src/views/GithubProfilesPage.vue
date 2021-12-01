<template>
    <GithubIndex/>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import GithubIndex from '@/components/GithubProfiles/GithubIndex.vue'

export default defineComponent({
    name: 'GithubProfilesPage',
    components: {
        GithubIndex
    }
})
</script>
