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
    }
}
</script>

<style scoped>
.header-container {
    height: 120px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 5%;
    background: linear-gradient(0deg, black, slateblue);
    color: wheat;
}

.home-link {
    text-align: center;
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
    text-align: center;
    font-size: 3rem;
    letter-spacing: 5px;
    font-family: Teko;
}

.links {
    display: flex;
    justify-content: space-evenly;
    margin-left: 10px;
}

.link {
    padding: 10%;
    border-radius: 3px;
    text-decoration: none;
    color: honeydew;
    font-size: 1.1rem;
}

.link:hover {
    color: violet;
    background-color: rgba(255, 105, 180, 0.1);
}

@media screen and (max-width: 850px) {
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
        font-size: 0.7rem;
    }
}

@media screen and (max-width: 400px) { 
    .title {
        font-size: 1.5rem;
    }

    .links {
        flex-direction: column;
        align-items: center;
        align-self: flex-start;
        margin-top: 10px;
    }

    .link {
        margin: 5px 0;
    }
    
}
</style>