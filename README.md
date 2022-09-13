# portfolio-demo

This website is built with vue.js and retrieves its data from a NoSql database hosted on MongoDB Atlas and served with Express. The homepage contains basic details, contact information, etc., as well as a 3D animation rendered with Trois.js. The projects page shows off all my projects, and they can be clicked to reveal more details. 




### Frontend ###
# Vue / Vue Router #
The page is built with Vue.js and Vue router. There are 4 routes: "/", the home route, "/projects" which displays all my projects using CSS Grid, "/projects/:project" which takes a single project in the route parameters to show the specified project in detail, and "/about", which goes into detail about the website itself, mostly reiterating what is written here in the README.md. 

# 3D Animation #
The Landing page includes a 3D animation of the earth spinning, rendered with Trois.js. Trois is a library built on Three.js which makes it simple to render three.js models and animations in a Vue.js environment.
I would have liked to have a loading spinner that exists until the 3D animation is loaded but trois.js does not include the 'LoaderManager' functionality from three.js, so I've gone with the simple but sloppy solution of simply waiting a couple seconds before displaying the 3D animation. 

# Styles #
The site uses raw CSS to style everything. You can find examples of sticky, absolute, and relative position, flexbox, Grid, linear and radial color gradients, and more CSS tricks in the source code. 


# Functionality #
The pages are mostly static, so functionality is not very complicated. The 'projects' and 'projects/:project' pages both retrieve data from the backend, so they both have 'fetch' functions which not only retireve the data using axios, but will display 'loading...' while the data is still on its way.





### BACKEND ###
# Express #
The app is served from a simple Express server, along with the API. The API has 2 routes, '/api/v1/notes', and '/api/v1/projects'. Both only allow GET requests. The projects route simply returns an array of all projects and their data, while the notes route requires the title of the note being requested in req.params and returns that note object. In development, I used the Vue.js live reload dev server (localhost:8080) to do most of the programming, so I had to add a 'access-control-allow-origin' header to allow CORS (cross-origin-resource-sharing) for http://localhost:8080, so that I could edit the site without having to re-build and restart the server.

# MongoDB Atlas # 
The Database is hosted on the cloud by MongoDB Atlas, which means it is a document-oriented NoSQL database. The Database has 2 documents, 'notes' and 'projects'. All the data was put in manually through MongoDB Atlas Dashboard. 







### SCRIPTS ###
## Project setup
to run this project locally, first run "npm install" to install dependencies. Then run "npm run build" to bundle the app into the /dist folder. then you can either run "npm start" to serve the app from /dist with express, or 
"npm run serve" to serve the app directly from /src and /public with the Vue live reload server. With the Vue server, changes will automatically be updated when they are saved. If you are using the Express server, you will have to re-build the app every time changes are made, and restart the server. Consider installing Nodemon as a devDependency so you wont have to restart the server every time. 
