<template>
<div class="home-top-container">
    <img class="loading" src="../assets/loading-spinner.gif" :style="isLoaded ? 'display: none;' : ''" >
    <div class="hello-world-container" :style="isLoaded ? '' : 'display: none;'" >
        <HelloWorldCanvas />
    </div>
    <div class="name-card">
        <h1 class="name"><em>Jake<br>Blackburn</em></h1>
        <h4 class="position">Web Developer and Designer</h4>
        <div class="links">
            <a href="https://github.com/jakeBlackburn" class="github link">github</a>
            <a href="mailto:jakeblackburnn@gmail.com" class="email link">email</a>
            <a href="https://www.linkedin.com/in/jake-blackburn-53a94b246/" class="linkedin link">linkedin</a>
            <a href="http://jake-blackburn-portfolio.herokuapp.com/resume.pdf" class="resume" download>
                <p>Resume</p><img class="download" src="../assets/download.png" alt="download">
            </a>
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
        },
        data() {
            return {
                isLoaded: false,
            }
        },
        methods: {

        },
        mounted() {
            setTimeout(() => {
                this.isLoaded = true
            }, 1800)
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

.loading {
    position: absolute;
    width: 120px;
    height: 120px;
    top: 195px;
    left: 350px;
}

.hello-world-container {
    position: absolute;
    left: 10%;
    top: 0px;
    background: radial-gradient(skyblue, hotpink, black, black);
}


.navbar {
    margin-top: 150px;
    display: flex;
    background-image: linear-gradient(0deg, rgb(30, 25, 40), black);
    height: 120px;
    justify-content: space-around;
    align-items: center;
    font-size: 2.1rem;
    text-shadow: 1px 1px royalblue;
    font-family: Teko;
}

a {
    color: wheat;
    text-decoration: none;
    padding: 10px;
}
a:hover {
    color: hotpink;
    text-shadow: none;
    background-color: rgba(255, 0, 170, 0.1);
    border-radius: 3px;
}

.links {
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.link {
    padding: 10px;
    text-decoration: underline;
}

.link:hover {
    color:aqua;
}

.resume {
    text-decoration: underline;
    display: flex;
    align-items: center;
}

.download {
    margin-left: 5px;
    width: 20px;
}


@media screen and (max-width: 1155px) {
  .hello-world-container {
    display: none;
    position: absolute;
  }

  .loading {
    display: none;
    position: absolute;
  }

  .name-card {
    margin: 100px 0 0 0;
  }

  .navbar {
    margin-top: 50px;
  }
}

</style>