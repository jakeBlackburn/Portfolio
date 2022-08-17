<template>
    <div class="about-me-container">
        <div class="introduction">
            <div class="text-container">
                <div class="fire-animation">
                    <img src="../assets/fire.gif" alt="fire-img" class="fire">
                </div>
                <h2 class="text-title">About Me</h2> 
                <p class="text">
                    My experience in programming began in a high school electronics class where I became fascinated with these incredibly useful and complex
                    machines we call computers. This drove me to learn python on my own and since then I’ve been immersed in the world of computer science. In
                    college I began to learn web development on the side. Eventually I realized I wasn’t far off from getting
                    a web development job as a self taught engineer. This motivated me to take it seriously and devote most of my free time to learning as much as
                    I could, building projects utilizing various technologies, and becoming a more efficient and thoughtful programmer overall. I’m looking to apply
                    what I’ve learned to a job where I can learn more, talk with talented developers, and write some useful code!
                </p>
            </div>

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
                        In high school I took an Electronics course for 3 years in total and even became certified as an electronics technician. The second year of this course involved computer electronics: transistors, logic gates, memory units, ALUs, all of which we built from scratch, and I even learned a bit about CPU design. This class, while it didn’t directly translate to programming expertise, got me fascinated with the higher level design of computers and programming languages, and is the reason I remain interested in computer science to this day. 
                        I also took AP CS my senior year where I learned the basics of programming and a lot of general information about how computers and the internet work. My senior year was entirely online and asynchronous, so I also improved my self-study habits and became accustomed to solving problems without supervision. 
                    </dd>
                    <dt>College (William and Mary):</dt>
                    <dd>
                        In college I first took a data analysis class in python where I gained better programming habits, learned how to analyze and visualize data with code, and worked on a team to creatively analyze real world data and present our findings to the class. I then took an Intro to data structures and algorithms class where I learned about big O notation, got some practice with common algorithms, and came to better appreciate how clean, efficient algorithms are designed. 
                    </dd>
                    <dt>self-teaching:</dt>
                    <dd>
                        Over the past year I have completed many online tutorials and hours of research and reading on my own. I plan to add a 'notes' page to this site, which will house all my writing about the topics I've learned, tutorials and projects I've done, and books I've read.
                    </dd>
                </dl>
                <!-- <router-link to="/notes">View Notes Page</router-link> -->
            </div>
            <div class="projects-container">
                <h4 class="title">Projects</h4>
                <p class="projects-text">All my projects are listed below. A more comprehensive description of each project can be found on the Projects page or in the readme for each project which can be found on my github.</p>
                <router-link to='/projects'>View Projects Page</router-link>
                <dl>
                    <dt>Blue Sky</dt>
                    <dd>Basic one page app made with React, Webpack and Express made for a local restaurant in my hometown. Supports online ordering through a third party service.</dd>
                    <dt>Napa Thai</dt>
                    <dd>Basic one page app made with Angular, Typescript and Express made for a local restaurant in my hometown. Supports online ordering through a third party service.</dd>
                    <dt>Pure Eats</dt>
                    <dd>Basic one page app made with Vue.js made for a local restaurant in my hometown. Supports online ordering through a third party service.</dd>
                    <dt>portfolio (this website)</dt>
                    <dd>Vue.js application with multiple routes. Consumes an API built with express and MongoDB Atlas to get the data and text for the projects and notes page. This is my portfolio so it includes a stylish landing page with a 3D animation rendered with three.js, a projects page showing off all the websites I've built, and a notes page to catalogue and showcase what I've learned as well as to help me review and internalize my skills and knowledge</dd>
              
                </dl>
            </div>
        </div>

    </div>
</template>

<style scoped>
.about-me-container {
    background-color: rgb(30, 25, 40);
}

.introduction {
    margin-top: 80px;
    display: flex;
    justify-content: center;
}

.text-title {
    font-size: 4rem;
    margin: 20px 0 0 0;
    font-family: Teko;
    color: wheat;
    text-shadow: 3px 3px black;
    z-index: 1;
    position: absolute;
    top: 50px;
    width: 100%;
    text-align: center;
}

.text {
    margin: 30px
}

.text-container {
    padding: 150px 10px 10px 10px;
    background-color: black;
    border-radius: 10px;
    color: rgb(170, 170, 190);
    width: 50%;
    text-align: center;
    position: relative;
}

.fire-animation {
    width: 100%;
    height: 150px;
    position: absolute;
    top: 0px;
    z-index: 0;
}

.fire {
    width: 150px;
    height: 150px;
}

.headshot {
    height: 300px;
    width: 200px;
}

.experience-container {
    background: linear-gradient(0deg, rgb(84, 48, 127), rgb(30, 25, 40));
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 150px 3% 0px 3%;
    color: pink;
}

.skills-container {
    width: 18%;  
    background-color: rgb(215, 255, 235);
    border-radius: 8px;
    padding: 25px;
    margin: 2%;
    position: sticky;
    top: 150px
}

.education-container {
    width: 42%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: lightcyan;
    border-radius: 8px;
    padding: 25px;
    margin: 2%;
    position: sticky;
    top: 60px
}

.projects-container {
    width: 28%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 8px;
    background-color: aliceblue;
    padding: 25px;
    margin: 2%;
}

.projects-text {
    color: hotpink;
    text-align: center;
}


.title {
    font-size: 1.5rem;
    color: steelblue;
    text-align: center;
    margin: 0;
    font-family: Teko;
}   

dt {
    color: slateblue;
    font-size: 0.9rem;
    text-align: center;
    font-weight: bold;
    margin: 10px 0 5px 0;
}

dd {
    color: slategray;
    font-size: 0.8rem;
    margin: 0
}

a {
    text-decoration: none;
    color: dodgerblue;
    text-align: center;
    width: 50%;
    padding: 10px;
}

a:hover {
    color: hotpink;
    border-radius: 3px;
    background-color: rgba(127, 255, 212, 0.2);
}

@media screen and (max-width: 1155px) {
    .text-container {
        width: auto;
        margin: 0 50px;
    }

   .experience-container {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 75px 3% 100px 3%;
   }

   .education-container {
    position: static;
    width: 70%;
    padding: 25px 50px;

   }

   .skills-container {
    position: static;
    width: 40%;
    padding: 25px 75px;
   }

   .projects-container {
    width: 55%;
    padding: 25px 50px;

   }


}

@media screen and (max-width: 570px) {
    .text-container {
        width: 85%;
        margin: 0;
        padding-top: 100px;
    }

    .text-title {
        font-size: 3rem;
        top: 20px
    }

    .text {
        margin: 15px;
        font-size: 0.8rem;
    }

    .fire {
        width: 100px;
        height: 100px;
    }

    .skills-container {
        width: 35%;
        padding: 25px 50px;
        margin-bottom: 25px;
    }

    .education-container {
        margin-bottom: 25px;
        padding: 25px;
    }

    .projects-container {
        
        width: 70%;
        padding: 25px;
    }

    .projects-text {
        font-size: 0.8rem;
    }


}


</style>