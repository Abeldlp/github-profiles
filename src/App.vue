<template>
    <BackgroundParticles id="particles"/>
    <router-view/>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BackgroundParticles from './components/GlobalComponents/BackgroundParticles.vue'

export default defineComponent({
    components: {
        BackgroundParticles
    }
})
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

#particles {
    z-index: -100;
}

</style>
