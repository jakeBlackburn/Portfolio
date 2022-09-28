<template>
    <div class="project-container">
        <p v-if="this.isLoading" class="loading">Loading...</p>
      <img v-if="!this.isLoading" :src="require(`../assets/${this.project.image}`)">
      <div class="content">
        <p v-if="!this.isLoading" class="description">{{this.project.description}}</p>
        <div class="project-details">
            <div class="skills">
                <h4>Skills:</h4>
                <ul class="skills" v-if="!this.isLoading">
                    <li v-for="skill in this.project.skills" :key="skill">{{skill}}</li>
                </ul>
            </div>
            <div class="links" v-if="!this.isLoading">
                <a class="link" v-if="this.project.urls[0]" :href="this.project.urls[0]">view demo</a>
                <a class="link" :href="this.project.urls[1]">source code</a>
            </div>
        </div>
      </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'Project',
    data() {
        return {
            project: {},
            title: '',
            isLoading: true
        }
    },
    async created() {
        const { project } = this.$route.params
        const res = await axios.get(`https://jake-blackburn-portfolio.herokuapp.com/api/v1/projects/${project}`)
        this.project = res.data
        this.title = this.project.title.replace(/-/g, " ")
        this.$emit('title', this.title)
        this.isLoading = false
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

    img {
        width: 100%;
        height: 800px;
        object-fit: cover;
        opacity: 0.4;
        display: block;
    }

    .content {
        position: absolute;
        top: 200px;
        color: aliceblue;
    }

    .description {
        width: 54%;
        margin: 0 20% 80px 20%;
        padding: 20px 3%;
        text-align: center;
        font-size: 1.5rem;
        background-color: rgba(0, 0, 0, 0.7);
        border-radius: 8px;
    }

    .project-details {
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin: 0 25%;
        padding: 20px 3%;
        width: 44%;
        border-radius: 8px;
        background-color: rgba(0, 0, 0, 0.7);
    }

    h4 {
        font-size: 2rem;
        margin: 10px 0 0 0;
    } 

    ul {
        font-size: 1.3rem;
    }


    .links {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }

    .link {
        text-shadow: none;
        text-decoration: none;
        color: aliceblue;
        padding: 10px;
        margin: 10px;
        border-radius: 3px;
        background-color: rgba(105, 90, 205, 0.5);
    }

    .link:hover {
        color: white;
        background-color: rgba(255, 105, 180, 0.624);
    }
</style>