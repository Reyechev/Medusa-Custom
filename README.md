# Deploy Project on Git codespace

# Prerequisites
Create new public repository in your Github and name it(i.e medusa-custom)
Fork our project from our Github repository  https://github.com/kings-joy/12x3 by doing import code.

# Environment Configuration
For development, use the .env.development file. For deployment, switch to the .env.deployment file.
Now we use .env.development file as we are developing code on codespace.

# Docker Compose Environment
Use the docker-compose.yml file to set up the Docker environment. This file defines the services, networks, and volumes needed for your application.
We will use PostgreSQL and Redis server here.

# Installation
Now that you have forked our repository and given it your chosen name (e.g., medusa-custom), click the '<> Code' button in your repository. 
A dropdown menu will appear. 
There are two tabs; you can easily locate the 'Codespaces' tab. 
Click on this tab, where you will find a 'Create codespace on master' button. 
Simply click this, and GitHub will launch a codespace for your repository.

If you need to know more about codespaces,please refer this link.
https://docs.github.com/en/codespaces

# Build and start Docker containers
First, we will create docker environment by running this command.
docker-compose up -d

Once you finishing set up, you can check if everything is installed correctly by running this command.
docker ps
You can see postgresql and redis server there.

# Stop and remove Docker containers
docker-compose down

# Run the application
For deploying backend, navigate to the project directory:
cd burrow

Install node and medusa plugin modules.
npm install
npm install @medusajs/medusa-cli -g


Make migrations for database setup.
medusa migrations run.

Additionally, better testing, you can add demo data to your  backend by running the seed command in your backend directory
medusa seed --seed-file=data/seed.json

Finally launch the project.
medusa develop

Now your backend is hosting on localhost:9000/

# Backend Check
You can check if backend is installed correclty by doing this command.
curl localhost:9000/store/products

And the result will be displayed as a Json formats.

# License
This project is licensed under the MIT License.

# Acknowledgments
Git, Docker, Node, TypeScript, PostgreSQL, Medusa.js
