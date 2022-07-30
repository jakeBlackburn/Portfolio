<template>
  <div class="home-container">
    <Home />
    <AboutMe />
  </div>
</template>

<script>
import HelloWorldCanvas from '../components/HelloWorldCanvas.vue'
import Home from '../components/Home.vue'
import AboutMe from '../components/AboutMe.vue'


export default {
  name: 'HomeView',
  components: {
    HelloWorldCanvas,
    Home,
    AboutMe
  }
}
</script>

<style scoped>
.home-container {
  display: flex;
  flex-direction: column;
}

a {
  padding: 20px;
  background-color:black;
  color: wheat;
}
</style>