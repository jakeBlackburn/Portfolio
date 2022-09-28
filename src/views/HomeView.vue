<template>
  <div class="home-container">
    <Home />
    <AboutMe />   
  </div>
</template>

<script>
import Home from '../components/Home.vue'
import AboutMe from '../components/AboutMe.vue'

export default {
  name: 'HomeView',
  components: {
    Home,
    AboutMe,
  }
}
</script>

<style scoped>
.home-container {
  display: flex;
  flex-direction: column;
}
</style>