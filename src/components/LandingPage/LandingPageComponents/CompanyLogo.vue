<template>
    <div>
        <router-link to="/github-profiles">
            <h1>Logo</h1>
        </router-link>
        <p class="border-2 border-red-500">This is a tailwind test</p>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'CompanyLogo',
})
</script>
