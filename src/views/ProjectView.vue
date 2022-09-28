<template>
<div class="project-container">
    <Header :currPage="this.title" :pages="['about', 'projects']"/>
    <Project @title="getTitle" />
    <Footer />
</div>
</template>


<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import Project from '../components/Project.vue'

export default {
    name: 'ProjectView',
    components: {
      Header,
      Project,
      Footer 
    },
    data() {
        return {
            title: 'loading...'
        }
    },
    methods: {
        getTitle(title) {
            this.title = title
        }
    }
}
</script>
