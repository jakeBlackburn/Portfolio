<template>
    <div class="projects-container">
        <h2 class="title">{{this.title}}</h2>
        <img :src="this.project_img" alt="site image" class="img">
        <div class="arrows">
            <img src="../assets/left-arrow.png" alt="left arrow" class="arrow left" @click="prevProject()">
            <img src="../assets/right-arrow.png" alt="right arrow" class="arrow right" @click="nextProject()">
        </div>
        <div class="text-container">
            
            <ul class="skills-list">
                <li v-for="skill in skills" :key="skill">{{skill}}</li>
            </ul>
            <p class="project-text">{{this.text}}</p>
            <a :href="this.url">view demo</a>
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
        
            project_img: require('../assets/project-image-1.webp'),

            title: '',
            text: '',
            skills: [],
            url: '',

            project: {},

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
            this.project = this.projects[id - 1]
            this.title = this.projects[id - 1].title
            this.text = this.projects[id - 1].description
            this.skills = this.projects[id - 1].skills
            this.url = this.projects[id - 1].url
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
    }

    .img {
        width: 100%;
        height: 600px;
        object-fit: cover;
        position: relative;
        opacity: 0.5;
    }

    h2 {
        position: absolute;
        top: 350px;
        left: 25%;
        font-size: 3rem;
        text-align: center;
        z-index: 1;
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
        border-top: 3px solid black;
        padding: 50px 0;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }

    .skills-list {
        max-width: 30%;
    }

    .project-text {
        max-width: 50%;
    }

    a {
        text-decoration: none;
        color: wheat;
        border: 3px solid rosybrown;
        background-color: black;
        border-radius: 5px;
        height: 25px;
        padding: 10px;
    }

    a:hover {
        color: black;
        background-color: wheat;
    }
</style>