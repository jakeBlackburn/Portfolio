<template>
    <div class="about-me-container">
        <div class="intro">
            <img src="../assets/fire.png" alt="fire-img" class="fire-animation">
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
       
        <div class="experience-container">
            <div class="skills-container">
                <h4 class="title">Skills</h4>
                <dl>
                    <dt>Programming:</dt>
                    <dd>Node.js, Javascript, Typescript, Python, Data Structures and Algorithms</dd>
                    <dt>Frontend:</dt>
                    <dd>HTML, CSS, Webpack, Vue.js, React, Angular, Styled Components</dd>
                    <dt>Backend:</dt>
                    <dd>Express, Rest API, SQL</dd>
                    <dt>DevOps:</dt>
                    <dd>Git, Github, Docker</dd>
                </dl>
            </div>
            <div class="education-container">
                <h4 class="title">Education</h4>
                <dl>
                    <dt>High School:</dt>
                    <dd>    
                        In high school I took an Electronics course for 3 years in total and even became certified as a DC electronics technician (I would have gotten my AC cert. as well if not for covid). The second year of this course involved computer electronics: transistors, logic gates, memory units, ALUs, all of which we built from scratch, and I even learned a bit about CPU design. This class, while it didn’t directly translate to programming expertise, got me fascinated with the higher level design of computers and programming languages, and is the reason I remain interested in computer science to this day. 
                        I also took AP CS my senior year where I learned the basics of programming and a lot of general information about how computers and the internet work. My senior year was entirely online and asynchronous, so I also improved my self-study habits and became accustomed to solving problems without supervision. 
                    </dd>
                    <dt>College (William and Mary):</dt>
                    <dd>
                        In college I first took a data analysis class in python where I gained better programming habits, learned how to analyze and visualize data with code, and worked on a team to creatively analyze real world data and present our findings to the class. I then took an Intro to data structures and algorithms class where I learned about big O notation, got some practice with common algorithms, and came to better appreciate how clean, efficient algorithms are designed. 
                    </dd>
                    <dt>self-teaching:</dt>
                    <dd>
                        Over the past year I have completed many online tutorials and hours of research and reading on my own. All my notes on projects, tutorials, and various topics can be found on the Notes page
                    </dd>
                </dl>
                <router-link to="/notes">View Notes</router-link>
            </div>
            <div class="projects-container">
                <h4 class="title">Projects</h4>
                <p class="projects-text">All my projects are listed below. A more comprehensive description of each project can be found on the Projects page or in the readme for each project which can be found on my github.</p>
                <router-link to='/projects'>see projects page</router-link>
                <dl>
                    <dt>Blue Sky</dt>
                    <dd>Basic one page app made with React, Webpack and Express made for a local restaurant in my hometown. Supports online ordering through a third party service.</dd>
                    <dt>Napa Thai</dt>
                    <dd>Basic one page app made with Angular, Typescript and Express made for a local restaurant in my hometown. Supports online ordering through a third party service.</dd>
                    <dt>Pure Eats</dt>
                    <dd>Basic one page app made with Vue.js made for a local restaurant in my hometown. Supports online ordering through a third party service.</dd>
                    <dt>portfolio (this website)</dt>
                    <dd>
                        <router-link to="/about">see about page</router-link>
                    </dd>
                </dl>
            </div>
        </div>

    </div>
</template>

<style scoped>
.about-me-container {
    background-color: rgb(30, 25, 40);
}

.intro {
    position: relative;
}

.text-container {
    width: 60%;
    text-align: center;
    margin: 0 20%;
}

.fire-animation {
    position: absolute;
    top: 20px;
    left: 20px;
    width: 150px
}

.headshot {
    height: 300px;
    width: 200px;
    position: absolute;
    top: 20px;
    right: 20px;
}

.experience-container {
    background: linear-gradient(0deg, rgb(50, 25, 80), rgb(30, 25, 40));
    display: flex;
    justify-content: space-between;
    padding: 100px 3% 0 3%;
    color: pink;
}

.skills-container {
    width: 20%;
}

.education-container {
    width: 44%;
    display: flex;
    flex-direction: column;
}

.projects-container {
    width: 30%;
    display: flex;
    flex-direction: column;

}


.title {
    font-size: 1.5rem;
    color: white;
    text-align: center;
}   

dt {
    color: wheat;
}

a {
    text-decoration: none;
    color: skyblue;
    text-align: center;
    width: 100%
}

a:hover {
    color: crimson;
}


</style>