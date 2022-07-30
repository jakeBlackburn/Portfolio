<template>
<div class="header-container">
    <router-link to='/' class="home-link">Back To Home</router-link>
    <div class="title">{{currPage.toUpperCase()}}</div>
    <div class="links">
        <router-link class="link" v-for="page in pages" :key="page" :to="page">{{page}}</router-link>
    </div>
</div>
</template>

<script>


export default {
    name: "Header",
    props: {
        currPage: String,
        pages: Array
    },
}
</script>

<style scoped>

.header-container {
    height: 150px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 5%;

}

.links {
    display: flex;
    justify-content: space-evenly;
}

.link {
    padding: 0 10%;
}


</style>