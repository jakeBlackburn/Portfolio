<template>
      <Header :currPage="this.title" :pages="['about', 'projects']"/>
      <p v-if="this.isLoading" class="loading">Loading...</p>
      <img v-if="!this.isLoading" :src="require(`../assets/${this.project.image}`)">
      <div class="content">
        <p v-if="!this.isLoading" class="description">{{this.project.description}}</p>
        <div class="project-details" v-if="!this.isLoading">
            <h4>Skills:</h4>
            <ul class="skills">
                <li v-for="skill in this.project.skills" :key="skill">{{skill}}</li>
            </ul>
            <div class="links" v-if="!this.isLoading">
                <a class="link" v-if="this.project.urls[0]" :href="this.project.urls[0]">view demo</a>
                <a class="link" :href="this.project.urls[1]">source code</a>
            </div>
        </div>
      </div>
      <Footer />
</template>


<script>
import axios from 'axios'
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
export default {
    data() {
        return {
            project: {},
            title: '',
            isLoading: true
        }
    },
    components: {
      Header ,
      Footer 
    },
    async created() {
        const { project } = this.$route.params
        const res = await axios.get(`https://jake-blackburn-portfolio.herokuapp.com/api/v1/projects/${project}`)
        this.project = res.data.project
        this.title = this.project.title.replace(/-/g, " ")
        this.isLoading = false
        console.log(this.isLoading, this.project)
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
    }

    .description {
        width: 54%;
        margin: 0 20% 80px 20%;
        padding: 20px 3%;
        text-align: center;
        font-size: 1.5rem;
        color: wheat;
        text-shadow: 1px 1px darkorchid;
        background-color: rgba(0, 0, 0, 0.7);
        border-radius: 8px;
    }

    .project-details {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 25%;
        padding: 20px 3%;
        width: 44%;
        border-radius: 8px;
        background-color: rgba(0, 0, 0, 0.7);
        color: wheat;
        text-shadow: 1px 1px deeppink;
    }

    h4 {
        font-size: 2rem;
        margin-right: 30px;
    }

    ul {
        margin-right: 20%;
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
        color: wheat;
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