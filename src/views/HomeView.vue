<template>
  <div class="home-container">
    <Home />
    <AboutMe />
    <Footer />
  </div>
</template>

<script>
import HelloWorldCanvas from '../components/HelloWorldCanvas.vue'
import Home from '../components/Home.vue'
import AboutMe from '../components/AboutMe.vue'
import Footer from '../components/Footer.vue'


export default {
  name: 'HomeView',
  components: {
    HelloWorldCanvas,
    Home,
    AboutMe,
    Footer
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