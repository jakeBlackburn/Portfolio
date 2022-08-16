<template>
   <div class="container">
        <Header :currPage="'about'" :pages="['projects']"/>
        <p class="overview">This website is built with vue.js and retrieves its data from a NoSql database hosted on MongoDB Atlas and served with Express. The homepage contains basic details, contact information, etc., as well as a 3D animation rendered with three.js. The projects page shows off all my projects in detail, and soon I plan to add a notes page housing all my personal notes on each of my projects, the technologies I learn, and my overall understanding of computer science. (the following info is taken from the README)</p>
        <div class="about-container">
            <div class="section frontend">
                <h2 class="title">FRONTEND</h2>
                <h4 class="subtitle">Styles</h4>
                <p class="text">The site uses raw CSS to style everything. You can find examples of sticky, absolute, and relative position, flexbox, linear and radial color gradients, and more CSS tricks in the source code.</p>
                <h4 class="subtitle">3D Animation</h4>
                <p class="text">The Landing page includes a 3D animation of the earth spinning, rendered with Trois.js. Trois is a library built on Three.js which makes it simple to render three.js models and animations in a Vue.js environment. I would have liked to have a loading spinner that exists until the 3D animation is loaded but trois.js does not include the 'LoaderManager' functionality from three.js, so I've gone with the simple solution of waiting a couple seconds before displaying the 3D animation.</p>
                <h4 class="subtitle">Functionality</h4>
                <p class="text">The pages are mostly static, so functionality is not very complicated. The 'projects' and 'notes' pages both retrieve data from the backend, so they both have 'fetch' functions which not only retireve the data using axios, but will display 'loading...' while the data is still on its way.</p>
            </div>
            <div class="section backend">
                <h2 class="title">BACKEND</h2>
                <h4 class="subtitle">Express</h4>
                <p class="text">The app is served from a simple Express server, along with the API. The API has 2 routes, '/api/v1/notes', and '/api/v1/projects'. Both only allow GET requests. The projects route simply returns an array of all projects and their data, while the notes route requires the title of the note being requested in req.params and returns that note object. In development, I used the Vue.js live reload dev server (localhost:8080) to do most of the programming, so I had to add a 'access-control-allow-origin' header to allow CORS (cross-origin-resource-sharing) for http://localhost:8080, so that I could edit the site without having to re-build and restart the server.</p>
                <h4 class="subtitle">MongoDB Atlas</h4>
                <p class="text">The Database is hosted on the cloud by MongoDB Atlas, which means it is a document-oriented NoSQL database. The Database has 2 documents, 'notes' and 'projects'. All the data was put in manually through MongoDB Atlas Dashboard. </p>
            </div>
        </div>
        <Footer />

    </div>
</template>

<script>
import Header from '../components/Header.vue'
import HelloWorldCanvas from '../components/HelloWorldCanvas.vue'
import Footer from '../components/Footer.vue'
export default {
    name: 'AboutView',
    components: {
        Header,
        HelloWorldCanvas,
        Footer
    }
}
</script>


<style scoped>

.container {
    background-color: rgb(80, 80, 120);

}

.overview {
    text-align: center;
    margin: 100px;
    color: wheat;
    text-shadow: 1px 1px purple;
    font-family: Teko;
    font-size: 1.5rem;
    padding: 0 10%;
}

.about-container {
    display: flex;
    justify-content: space-around;
    padding-bottom: 200px;
    border-bottom: 1px solid darkmagenta;
}

.section {
    width: 30%;
    padding: 30px;
    background-color: aliceblue;
    border-radius: 5px;
}

.title {
    text-align: center;
    font-family: Teko;
    color: slateblue;
    margin: 15px;
    font-size: 2rem;
}

.subtitle {
    margin: 0 0 0 50px;
    color: darkorchid;
    font-size: 1.2rem;
}

.text {
    color: hotpink
}
</style>