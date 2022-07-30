<template>
    <div class="about-me-container">
        <div class="intro">
            <img src="../assets/logo.png" alt="fire-img" class="fire-animation">
            <div class="text-container">
                <h2 class="title">About Me</h2> 
                <p class="text">
                    My experience in programming began in a high school electronics class where I became fascinated with these incredibly useful and complex
                    machines we call computers. This drove me to learn python on my own and since then I’ve been immersed in the world of computer science. In
                    college I began to learn web development on the side. As I was doing career research to decide on a major, I realized I wasn’t far off from getting
                    a web development job as a self taught engineer. This motivated me to take it seriously and devote most of my free time to learning as much as
                    I could, building projects utilizing various technologies, and becoming a more efficient and thoughtful programmer overall. I’m looking to apply
                    what I’ve learned to a job where I can learn more, talk with talented developers, and write some useful code!
                </p>
            </div>
            <img src="../assets/logo.png" alt="headshot" class="headshot">
        </div>
        <div class="skills-container">
            <h4 class="skills-title">Skills</h4>
            <dl>
                <dt>Programming</dt>
                <dd>Node.js, Javascript, Typescript, Python</dd>
                <dt>Frontend</dt>
                <dd>HTML, CSS, Vue.js, React, Angular, Styled Components</dd>
                <dt>Backend</dt>
                <dd>Express, Rest API, SQL</dd>
                <dt>DevOps</dt>
                <dd>Git, Github, AWS, Docker, Kubernetes</dd>
            </dl>
        </div>
        <div class="experience-container">
            <div class="education-container">
                <h4 class="education-title">Education</h4>
                <p class="education-text"> edu text</p>
                <router-link to="/notes">View Notes</router-link>
            </div>
            <div class="projects-container">
                <h4 class="projects-title">Projects</h4>
                <p class="projects-text">proj text</p>
                <router-link to='/projects'>see projects page</router-link>
                <dl>
                    <dt>Blue Sky</dt>
                    <dd>blue sky description</dd>
                    <dt>napa</dt>
                    <dd>napa desc</dd>
                    <dt>pure eats</dt>
                    <dd>pure desc</dd>
                    <dt>portfolio (this website)</dt>
                    <dd>
                        portfolio desc 
                        <router-link to="/about">see about page</router-link>
                    </dd>
                </dl>
            </div>
        </div>

    </div>
</template>