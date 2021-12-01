<template>
    <div>
        <ProfileCardIndex/>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ProfileCardIndex from './GithubComponents/ProfileCardIndex.vue'

export default defineComponent({
    name: 'GithubIndex',
    components: {
        ProfileCardIndex
    }
})
</script>
