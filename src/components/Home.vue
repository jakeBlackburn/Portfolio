<template>
<div class="home-top-container">
    <div class="name-card">
        <h1 class="name"><em>Jake<br>Blackburn</em></h1>
        <h4 class="position">Web Developer and Designer</h4>
        <div class="links">
            <a href="https://github.com/jakeBlackburn" class="github link">github</a>
            <a href="mailto:jakeblackburnn@gmail.com" class="email link">email</a>
            <a href="https://www.linkedin.com/in/jake-blackburn-53a94b246/" class="linkedin link">linkedin</a>
        </div>
    </div>
    <img src="../assets/hello-world.png" alt="hello world image" class="hello-world">
    <div class="navbar">
        <router-link to="/projects" class="projects route">projects</router-link>
        <router-link to="/notes" class="notes route">notes</router-link>
        <router-link to="/about" class="about route">about this website</router-link>
    </div>

</div>


</template>

<style scoped>


.name-card {
    height: 400px;
    display: flex;
    width: 50%;
    flex-direction: column;
    justify-content: center;
    margin-left: 10%;
}

.name {
    font-size: 4rem;
    line-height: 90%;
    color: rgb(134, 43, 226);
    text-shadow: 2px 2px rgb(194, 0, 39);
    margin: 0;
}

.position {
    color: rgb(255, 107, 131);
}


.hello-world {
    height: 200px;
    width: 300px;
    position: absolute;
    right: 10%;
    top: 50px;

}

.navbar {
    display: flex;
    /* background-color: rgb(20, 20, 30); */
    background-image: linear-gradient(0deg, rgb(30, 25, 40), black);
    height: 120px;
    justify-content: space-around;
    align-items: center;
    font-size: 1.8rem;
    text-shadow: 1px 1px royalblue;
}

a {
    color: wheat;
    text-decoration: none;
}
a:hover {
    color: royalblue;
    text-shadow: none;
}

.link {
    padding: 10px;
    text-decoration: underline;
}





</style>