<template>
    <div class="project-container">
    <p v-if="this.isLoading" class="loading">Loading...</p>
    <img v-if="!this.isLoading" :src="require(`../assets/${this.project.image}`)">
    <div class="content">
        <p v-if="!this.isLoading" class="description">{{this.project.description}}</p>
        <div class="project-details">
            <div class="skills">
                <h4 v-if="!this.isLoading">Skills</h4>
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
    .project-container {
        background: linear-gradient(0deg, rgb(84, 48, 127), rgba(0, 0, 0, 0.3), black);
        position: relative;
        display: flex;
        justify-content: center;
        height: 800px;
        padding-bottom: 100px;
    }

    .loading {
        width: 100%;
        font-size: 3rem;    
        text-align: center;
        color: deeppink
    }

    img {
        width: 100%;
        height: 900px;
        object-fit: cover;
        opacity: 1;
        z-index: -1;
        display: block;
        position: absolute;
    }

    .content {
        position: absolute;
        top: 150px;
        background-color: rgba(0, 0, 0, 0.8);
        border-radius: 8px;
        width: 60%;
    }

    .description {
        text-align: center;
        font-size: 1.5rem;
        padding: 10px 0;
        margin: 25px 5% 10px 5%;
        color: darkorchid;
        border-bottom: 1px solid darkorchid;
    }

    .project-details {
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin: 10px 5% 25px 5%;
    }

    h4 {
        font-size: 2rem;
        text-align: center;
        margin: 10px 0 0 0;
        color: slateblue;
        font-family: Teko;
    } 

    ul {
        font-size: 1.3rem;
        color: hotpink;
    }


    .links {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }

    .link {
        text-align: center;
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

    @media screen and (max-width: 800px) {

        .description {
            font-size: 1rem;
            margin: 25px 10% 10px 10%;
        }

        h4 {
            font-size: 1.5rem;
        }

        ul {
            font-size: 1rem;
        }

        .link {
            font-size: 0.8rem;
        }
    }

    @media screen and (max-width: 500px) {
        .project-container {
            height: 500px;
        }

        img {
            height: 600px;
        }


        .description {
            font-size: 0.7rem;
            margin: 25px 10% 10px 10%;
        }

        .content {
            top: 80px;
        }

        .project-details {
            flex-direction: column;
        }

        h4 {
            font-size: 1rem;
        }

        ul {
            font-size: 0.7rem;
            padding: 0
        }

        .link {
            font-size: 0.6rem;
        }

        .links {
            flex-direction: row;
        }
    }
</style>