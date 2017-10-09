# ExpressVueWebpackTemplate

# About

An express server template that uses webpack to precompile vue components. Vuetify (vue material design) is also installed.

# Installation

Install by running the following in root:

```npm i```

Install nodemon to be able to live reload both the server and the frontend:

```sudo npm i -g nodemon```

Run your server with the follwing:

```sudo nodemon -e js,pug,css --exec 'npm run start'```

Open a new terminal tab and run your webpacker using the following:

```sudo nodemon -e vue --exec 'npm run build'```

You should be able to access your app at http://localhost:80