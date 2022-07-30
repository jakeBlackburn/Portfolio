<template>
    <div class="projects-container">
        <img src="../assets/logo.png" alt="site image" class="img-container">
        <div class="arrows">
            <img src="../assets/logo.png" alt="left arrow" class="arrow left" @click="prevProject()">
            <img src="../assets/logo.png" alt="right arrow" class="arrow right" @click="nextProject()">
        </div>
        <div class="text-container">
            <h2>{{this.title}}</h2>
            <p>{{current_project}}</p>
            <ul class="skills-list">
                <li v-for="skill in skills" :key="skill.id">{{skill.title}}</li>
            </ul>
            <p class="project-text">{{this.text}}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'projects',
    data() {
        return {
            current_project: 1,
            title: 'projecttitle',
            text: 'proj text',
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