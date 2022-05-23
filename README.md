# Recipe Manager

# Project Description

I built this project to make it easier to find and organize recipes to assist with meal planning. By building my own database of recipes I have limited the database to only the recipes I like, and can customize the information that is provided. I am able to filter by meal type and also search for recipes by name. 


# How To Run

In order to run this project, you will need to clone it to your system and run a json server for the recipe database.

In your terminal, navigate to the directory where you'd like to install, and type: git clone git@github.com:loren-michael/phase-2-react-project.git

Once the project is cloned you will need to start your json server. Do this by typing the following into your terminal: json-server --watch db.json

If you need to install the json server, please install by typing this into your terminal: npm install -g json-server

Then, to start up the app, type into your terminal: npm start

Your browser should open to the Recipe Manager with a list of recipes there for you to interact with.


# Functionality

At its current iteration, the functionality of this project is limited yet powerful. The Recipe Manager has ways for you to Add A Recipe using a detailed form, filter the list of recipes by the type of meal (dinner, lunch, breakfast), search through the recipes, and add comments to each of the recipes so you can keep track of any notes you have.

# Future Plans

In the future I would like to add functionality that allows the user to filter recipes by ingredient.