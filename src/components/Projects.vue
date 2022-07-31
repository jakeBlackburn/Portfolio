<template>
    <div class="projects-container">
        <h2>{{this.title}}</h2>
        <img src="../assets/napa-thai.png" alt="site image" class="img-container">
        <div class="arrows">
            <img src="../assets/left-arrow.png" alt="left arrow" class="arrow left" @click="prevProject()">
            <img src="../assets/right-arrow.png" alt="right arrow" class="arrow right" @click="nextProject()">
        </div>
        <div class="text-container">
            
            <p>{{current_project}}</p>
            <ul class="skills-list">
                <li v-for="skill in skills" :key="skill.id">{{skill.title}}</li>
            </ul>
            <p class="project-text">{{this.text}}</p>
            <a href="google.com">view demo</a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'projects',
    data() {
        return {
            current_project: 1,
            title: 'Title',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            skills: [{title: 'skill 1', id: 1}, {title: 'skill 2', id: 2}]
        }
    },
    methods: {
        prevProject() {
            if (this.current_project === 1) {
                this.current_project = 4
            } else {
                this.current_project --
            }
        },
        nextProject() {
            if (this.current_project === 4) {
                this.current_project = 1
            } else {
                this.current_project ++
            }
        }
    }
}
</script>

<style scoped>
    .projects-container {
        background-color: white;
    }

    .img-container {
        width: 100%;
        height: 610px;
        object-fit: cover;
        position: relative;
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
        background-color: white;
        border-radius: 10px;
    }

    .text-container {
        border-top: 3px solid black;
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