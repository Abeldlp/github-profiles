<template>
  <div>
    <LandingIndex />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LandingIndex from "@/components/LandingPage/LandingIndex.vue";

export default defineComponent({
  name: "LandingPage",
  components: {
    LandingIndex,
  },
});
</script>

