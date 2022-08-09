<template>
<div class="home-top-container">
    <div class="hello-world-container">
        <HelloWorldCanvas class="hello-world" />
    </div>
    <h3 class="hello"><em>HELLO!</em></h3>
    <div class="name-card">
        <h1 class="name"><em>Jake<br>Blackburn</em></h1>
        <h4 class="position">Web Developer and Designer</h4>
        <div class="links">
            <a href="https://github.com/jakeBlackburn" class="github link">github</a>
            <a href="mailto:jakeblackburnn@gmail.com" class="email link">email</a>
            <a href="https://www.linkedin.com/in/jake-blackburn-53a94b246/" class="linkedin link">linkedin</a>
        </div>
    </div>
    <div class="navbar">
        <router-link to="/projects" class="projects route">projects</router-link>
        <router-link to="/notes" class="notes route">notes</router-link>
        <router-link to="/about" class="about route">about this website</router-link>
    </div>

</div>

</template>


<script>
    import HelloWorldCanvas from './HelloWorldCanvas'
    export default {
        components: {
            HelloWorldCanvas
        }
    }

</script>



<style scoped>


.name-card {
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 100px 0  0 50%;
    text-align: center;
}

.name {
    font-size: 6rem;
    line-height: 90%;
    color: rgb(0, 140, 255);
    text-shadow: 2px 3px hotpink;
    margin: 0;
    font-family: Teko;
    text-align: left;
    
}

.position {
    color: rgb(255, 100, 130);
}


.hello-world-container {
    position: absolute;
    left: 10%;
    top: 0px;
    background: radial-gradient(skyblue, hotpink, black, black);
}

.hello {
    font-size: 7rem;
    color: hotpink;
    text-shadow: 4px 5px black;
    font-family: Teko;
    position: absolute;
    left: 310px;
    top: 60px;
}

.navbar {
    margin-top: 150px;
    display: flex;
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
    padding: 10px;
}
a:hover {
    color: royalblue;
    text-shadow: none;
    background-color: rgba(255, 0, 170, 0.1);
    border-radius: 3px;
}

.link {
    padding: 10px;
    text-decoration: underline;
}





</style>