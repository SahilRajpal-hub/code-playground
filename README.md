# Code-Playground

## Overview

This project is backend of code-playground app and intended for intern application for codedam. [Live Now](https://code-playground-frontend-61qbvzp46-sahilrajpal-hub.vercel.app/). This provides an ide environment in browser without any prior installation of any software. This will even work in mobile devices.

## Local Installation -:

(git, mongo and node must be installed in your system)

### Ubuntu

1. Open Terminal and navigate to the directory where you wanna download.
2. RUN `mkdir playground`. (for a seprate directory)
3. RUN `git clone https://github.com/SahilRajpal-hub/code-playground.git`.
4. RUN `cd code-playground`.
5. RUN `npm install`.
6. Create a .env file and add `MONGO_URI=<your-mongo-uri>`.
7. RUN `npm start` , this will run development server.

### Windows

1. Open git bash and navigate to your project directory.
2. RUN `mkdir playground`. (for a seprate directory)
3. RUN `git clone https://github.com/SahilRajpal-hub/code-playground.git`.
4. RUN `cd code-playground`.
5. RUN `npm install`.
6. Create a .env file and add `MONGO_URI=<your-mongo-uri>`.
7. RUN `npm start` , this will run development server.

## APIs Endpoint

### [BASE_URL]/api/v1/snippet -> GET => To get the code files

### [BASE_URL]/api/v1/snippet -> POST => To save the code files

### [BASE_URL]/api/v1/execute/cpp -> POST => To execute the cpp code

### [BASE_URL]/api/v1/execute/java -> POST => To execute the java code

### [BASE_URL]/api/v1/execute/py -> POST => To execute the py code
