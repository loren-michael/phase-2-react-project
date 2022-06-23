# Recipe Manager

# Project Description

I built this project to make it easier to find and organize recipes to assist with meal planning. By building my own database of recipes I have limited the database to only the recipes I like, and can customize the information that is provided. I am able to filter by meal type, search for recipes by name, and mark recipes I like as "favorite".


# How To Run

In order to run this project, you will need to clone it to your system and run a json server for the recipe database.

In your terminal, navigate to the directory where you'd like to install, and type: git clone git@github.com:loren-michael/phase-2-react-project.git

Once the project is cloned you will need to start your json server. Do this by typing the following into your terminal: json-server --watch db.json

If you need to install the json server, please install by typing this into your terminal: npm install -g json-server

Then, to start up the app, type into your terminal: npm start

Your browser should open to the Recipe Manager with recipe cards displayed for you to interact with.

Once running, you can filter recipes either filter by selecting a meal type from a drop-down menu, search for a recipe using the text box, or click on a recipe card's image or title to see the details of that recipe. You can also go to the Add Recipe form to input a new recipe that will then be displayed when returned to the home page.


# Functionality

At its current iteration, the functionality of this project is limited yet powerful. Here are some of the features included:
   - Search through recipes to find the recipe you're looking for.
   - Filter recipes by meal type (breakfast, lunch, dinner, etc.)
   - Add comments to a recipe to keep track of your notes.
   - Set recipes as "favorite"
   - Add recipes using a detailed controlled form, including functionality to add as many lines for ingredients and instructions as you may need.

# Future Plans

In the future I would like to add functionality that allows the user to filter recipes using an ingredient search.