<template>
  <div class="projects-container">
    <Header :currPage="'projects'" :pages="['about']"/>
    <Projects /> 
    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Projects from '../components/Projects.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'ProjectsView',
  components: {
    Header,
    Projects,
    Footer
  },
}
</script>