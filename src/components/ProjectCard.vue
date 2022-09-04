<template>
<div class="card-container" @click="navigate()">
<img :src="require(`../assets/${project.image}`)">
<h3>{{project.title.replace(/-/g, " ")}}</h3>
<div class="skills">
    <p v-for="skill in project.skills" :key="skill">{{skill}}</p>
</div>

    
</div>

</template>



<script>


export default {
    props: {
        project: Object
    },
    data() {
        return {

        }
    },
    methods: {
        navigate() {
            this.$router.push(`/projects/${this.project.title}`)
        }
    },
    
}


</script>



<style scoped>
.card-container {
    cursor: pointer;
    border: 1px solid rebeccapurple;
    position: relative;
}

img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    opacity: 0.5;
    display: block;
}

h3 {
    position: absolute; 
    top: 50px;
    width: 100%;
    text-align: center;
    font-size: 3.3rem;
    font-family: Teko;
    color: whitesmoke;
    text-shadow: 2px 3px darkorchid;
}

.skills {
    display: flex;
    justify-content: space-around;
    border-top: 1px solid rebeccapurple;
    color: whitesmoke;
}
</style>