<template>
    <div class="about-container">
        <p class="overview">This website is built with vue.js and retrieves its data from a NoSql database hosted on MongoDB Atlas and served with Express. The homepage contains basic details, contact information, etc., as well as a 3D animation rendered with three.js. The projects page shows off all my projects in detail. (the following info is taken from the README)</p>
        <div class="section frontend">
            <h2 class="title">FRONTEND</h2>
            <h4 class="subtitle">Styles</h4>
            <p class="text">The site uses raw CSS to style everything. You can find examples of sticky, absolute, and relative position, flexbox, linear and radial color gradients, and more CSS tricks in the source code.</p>
            <h4 class="subtitle">3D Animation</h4>
            <p class="text">The Landing page includes a 3D animation of the earth spinning, rendered with Trois.js. Trois is a library built on Three.js which makes it simple to render three.js models and animations in a Vue.js environment. I would have liked to have a loading spinner that exists until the 3D animation is loaded but trois.js does not include the 'LoaderManager' functionality from three.js, so I've gone with the simple but sub-optimal solution of waiting a couple seconds before displaying the 3D animation.</p>
            <h4 class="subtitle">Functionality</h4>
            <p class="text">The pages are mostly static, so functionality is not very complicated. The 'projects' page retrieves data from the backend, so it includes a 'fetching' function which not only retireves the data using axios, but displays 'loading...' while the data is still on its way.</p>
        </div>
        <div class="section backend">
            <h2 class="title">BACKEND</h2>
            <h4 class="subtitle">Express</h4>
            <p class="text">The app is served from a simple Express server, along with the API. The API has 2 routes, '/api/v1/projects', and '/api/v1/projects/:project'. Both only allow GET requests. the former simply returns an array of all projects and their data, the latter only retrieves data on one project, specified in req.params. In development, I used the Vue.js live reload dev server on localhost:8080 to do most of the programming, so I had to add a 'access-control-allow-origin' header to allow CORS (cross-origin-resource-sharing) for http://localhost:8080, so that I could edit the site without having to re-build and restart the server.</p>
            <h4 class="subtitle">MongoDB Atlas</h4>
            <p class="text">The Database is hosted on the cloud by MongoDB Atlas, which means it is a document-oriented NoSQL database. The Database has 1 documents, 'projects'. All the data was put in manually through MongoDB Atlas Dashboard.</p>
        </div>
    </div>
</template>

<style scoped>
.container {
    background-color: rgb(30, 25, 40);
}

.overview {
    text-align: center;
    margin: 100px;
    color: slateblue;
    font-family: Teko;
    font-size: 1.5rem;
    padding: 0 10%;
}

.about-container {
    background: linear-gradient(0deg, rgb(84, 48, 127), black);
    padding: 0 15% 200px 15%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.section {
    width: 80%;
    padding: 30px;
    background-color: rgba(0, 0, 0, 0.4);
    border-radius: 5px;
}

.frontend {
    margin-bottom: 50px;
}

.title {
    text-align: center;
    font-family: Teko;
    color: slateblue;
    margin: 15px 0;
    font-size: 2rem;
    width: 100%;
}

.subtitle {
    margin: 0 0 0 100px;
    color: darkorchid;
    font-size: 1.2rem;
}

.text {
    color: hotpink;
}


@media screen and (max-width: 800px) {
    .overview {
        margin: 60px;
        padding: 0;
    }
}


@media screen and (max-width: 550px) {
    .overview {
        margin: 20px 0;
        font-size: 1rem;
    }

    .about-container {
        flex-direction: column;
        align-items: center;
        padding-bottom: 0;
    }

    .section {
        width: 85%;
        margin-bottom: 30px;
    }

    .text {
        font-size: 0.8rem;
    }

    .subtitle {
        text-align: center;
        margin: 0;
    }
    
}
</style>