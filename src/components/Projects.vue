<template>
    <div class="projects-container">
        <p class="loading" v-if="this.isLoading">loading...</p>
        <p class="projects-overview" v-if="!this.isLoading">Lorem ipsum thigng naj Lorem ipsum thigng naj Lorem ipsum thigng naj Lorem ipsum thigng naj Lorem ipsum thigng naj Lorem ipsum thigng naj Lorem ipsum thigng naj. Select a project to read its description in detail.</p>
        <div class="grid">  
            <ProjectCard v-for="project in projects" :key="project._id" :project="project"/>
        </div>
    </div>
</template>

<script>
import ProjectCard from './ProjectCard.vue'
import axios from 'axios'

export default {
    name: 'projects',
    components: {
        ProjectCard
    },
    data() {
        return {
            projects: [],
            isLoading: true,            
        }
    },
    async mounted() {
        try {
            const res = await axios.get('https://jake-blackburn-portfolio.herokuapp.com/api/v1/projects')
            this.projects = res.data.projects
            this.isLoading = false
        } catch (err) {
            console.log(err);
        }
    
    }
}
</script>

<style scoped>

    .loading {
        width: 100%;
        font-size: 3rem;    
        text-align: center;
        color: deeppink
    }


    .projects-container {
        background-color: black;
    }

    

    .projects-overview {
        margin: 50px 10% 75px 10%;
        color: aliceblue;
        text-shadow: 1px 1px deeppink;
        font-size: 1.5rem;
        text-align: center;
    }

    .grid {
        padding: 30px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 30px;
        margin: 0 10px 100px 10px;
    }

</style>