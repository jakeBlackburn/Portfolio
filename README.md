# portfolio-demo

This website is built with vue.js and retrieves its data from a NoSql database hosted on MongoDB Atlas and served with Express. The homepage contains basic details, contact information, etc., as well as a 3D animation rendered with Trois.js. The projects page shows off all my projects in detail, and the notes page houses all my personal notes on each of my projects, the technologies I learn, and my overall understanding of computer science.

### Frontend ###

# 3D Animation #
The Landing page includes a 3D animation of the earth spinning, rendered with Trois.js. Trois is a library built on Three.js which makes it simple to render three.js models and animations in a Vue.js environment.
I would have liked to have a loading spinner that exists until the 3D animation is loaded but trois.js does not include the 'LoaderManager' functionality from three.js, so I've gone with the simple but sloppy solution of simply waiting a couple seconds before displaying the 3D animation. 

# Styles #
The site uses raw CSS to style everything. You can find examples of sticky, absolute, and relative position, flexbox, linear and radial color gradients, and more CSS tricks in the source code. 


# Functionality #
The pages are mostly static, so functionality is not very complicated. The 'projects' and 'notes' pages both retrieve data from the backend, so they both have 'fetch' functions which not only retireve the data using axios, but will display 'loading...' while the data is still on its way.





### BACKEND ###

# Express #
The app is served from a simple Express server, along with the API. The API has 2 routes, '/api/v1/notes', and '/api/v1/projects'. Both only allow GET requests. The projects route simply returns an array of all projects and their data, while the notes route requires the title of the note being requested in req.params and returns that note object. In development, I used the Vue.js live reload dev server (localhost:8080) to do most of the programming, so I had to add a 'access-control-allow-origin' header to allow CORS (cross-origin-resource-sharing) for http://localhost:8080, so that I could edit the site without having to re-build and restart the server.

# MongoDB Atlas # 
The Database is hosted on the cloud by MongoDB Atlas, which means it is a document-oriented NoSQL database. The Database has 2 documents, 'notes' and 'projects'. All the data was put in manually through MongoDB Atlas Dashboard. 





### SCRIPTS ###
## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```