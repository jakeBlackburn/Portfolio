<template>
     <div class="projects-container">
      <Header :currPage="'projects'" :pages="['notes', 'about']"/>
      <Projects /> 
    </div>
</template>

<script>
import Header from '../components/Header.vue'
import Projects from '../components/Projects.vue'
export default {
  name: 'ProjectsView',
  components: {
    Header,
    Projects
  },
}

</script>