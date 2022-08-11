<template>
    <div class="projects-container">
        <h2 class="title">{{this.title}}</h2>
        <img :src="this.project_img" alt="site image" class="img">
        <div class="arrows">
            <img src="../assets/left-arrow.png" alt="left arrow" class="arrow left" @click="isLoading ? null : prevProject()">
            <img src="../assets/right-arrow.png" alt="right arrow" class="arrow right" @click="isLoading ? null : nextProject()">
        </div>
        <div class="text-container">
            
            <ul class="skills-list">
                <li v-for="skill in skills" :key="skill">{{skill}}</li>
            </ul>
            <p class="project-text">{{this.text}}</p>
            <div class="links">
                <a class="demo" :href="this.urls[0]" v-if="this.urls[0] !== ''">View Demo</a>
                <a class="source" :href="this.urls[1]">Source Code</a>
            </div>

        </div>
    </div>
</template>

<script>

import axios from 'axios'

export default {
    name: 'projects',
    data() {
        return {
            projects: [],
            isLoading: true,
        
            project_img: require('../assets/project-image-1.webp'),

            title: 'loading...',
            text: 'loading...',
            skills: ['loading...'],
            urls: [],

            current_project: 1,
            total_projects: 4,
            
        }
    },
    methods: {
        prevProject() {
            if (this.current_project === 1) {
                this.current_project = this.total_projects
                this.changeImg(this.total_projects)
                this.updateProject(this.total_projects)
            } else {
                this.current_project --
                this.changeImg(this.current_project)
                this.updateProject(this.current_project)
            }
        },
        nextProject() {
            if (this.current_project === this.total_projects) {
                this.current_project = 1
                this.changeImg(1)
                this.updateProject(1)
            } else {
                this.current_project ++
                this.changeImg(this.current_project)
                this.updateProject(this.current_project)
            }
        }, 

        updateProject(id) {
            this.title = this.projects[id - 1].title
            this.text = this.projects[id - 1].description
            this.skills = this.projects[id - 1].skills
            this.urls = this.projects[id - 1].urls
        },
        changeImg(id) {
            if (id === 1) {
                this.project_img = require('../assets/project-image-1.webp')
            } else {
                this.project_img = require(`../assets/project-image-${id}.png`)
            }
        },
    }, 
    async created() {
        try {
            const res = await axios.get('http://localhost:3000/api/v1/projects')
            this.projects = res.data.projects
            this.updateProject(1)
            this.isLoading = false
        } catch (err) {
            console.log(err);
        }
    
    }
}
</script>

<style scoped>
    .projects-container {
        background-color: black;
    }

    .title {
        font-size: 5em;
        margin: 0;
        color: whitesmoke;
        text-shadow: 3px 2px darkorchid;
        position: absolute;
        top: 350px;
        left: 25%;
        text-align: center;
        z-index: 1;
    }

    .img {
        width: 100%;
        height: 600px;
        object-fit: cover;
        position: relative;
        opacity: 0.5;
    }

    .arrows {
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: absolute;
        top: 420px;
        width: 94%;
        margin: 0 3%;
    }

    .arrow {
        width: 30px;
        padding: 10px;
        background-color: rgba(200, 200, 255, 0.5);
        border-radius: 10px;
    }

    .arrow:hover {
        background-color: rgba(200, 160, 180, 0.8);
        cursor:pointer;
    }

    .text-container {
        padding: 50px 25px 100px 50px;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        background: linear-gradient(0deg, rgb(84, 48, 127), rgb(30, 25, 40));
    }

    .skills-list {
        max-width: 20%;
        padding: 10px 40px;
        background-color: lightpink;
        color: purple;
        border-radius: 5px;
        font-size: 1.2rem;
    }

    .project-text {
        max-width: 40%;
        text-align: center;
        padding: 30px 50px;
        border-radius: 5px;
        background-color: aliceblue;
        color: hotpink;
        font-size: 1.5rem;
    }

    .links {
        display: flex;
        flex-direction: column;
    }

    a {
        text-decoration: none;
        text-align: center;
        border-radius: 5px;
        height: 25px;
        padding: 10px 10px 5px 10px;
        background-color: rgba(0, 0, 0, 0.4);
        color: wheat;
    }

    a:hover {
        color: hotpink;
        background-color: rgba(65, 105, 225, 0.6);
    }

    .source {
        margin-top: 20px;

    }

</style>