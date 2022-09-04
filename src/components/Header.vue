<template>
<div class="header-container">
    <router-link to='/' class="home-link">Back To Home</router-link>
    <div class="title">{{currPage.toUpperCase()}}</div>
    <div class="links">
        <router-link class="link" v-for="page in pages" :key="page" :to="`/${page}`">{{page}}</router-link>
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
    height: 120px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 5%;
    background: linear-gradient(90deg, black, slateblue);
    color: wheat;
    border-bottom: 1px solid pink;
}

.home-link {
    text-decoration: none;
    color: aquamarine;
    font-size: 1rem;
    padding: 10px;
    border-radius: 4px;
}

.home-link:hover {
    color: violet;
    background-color: rgba(255, 105, 180, 0.1);
    
}

.title {
    font-size: 4rem;
    letter-spacing: 5px;
    font-family: Teko;
}

.links {
    display: flex;
    justify-content: space-evenly;
}

.link {
    padding: 10%;
    border-radius: 3px;
    text-decoration: none;
    color: honeydew;
    margin: 10px;
    font-size: 1.1rem;
}

.link:hover {
    color: violet;
    background-color: rgba(255, 105, 180, 0.1);
}

@media screen and (max-width: 600px) {
    .header-container {
        height: 90px;
    }

    .home-link {
        font-size: 0.7rem;
    }

    .title {
        font-size: 2rem;
    }

    .link {
        font-size: 0.8rem;
    }
}


</style>