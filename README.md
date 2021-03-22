# E-Commerce-Back-End--ORM

## Description
This e-commerce back end application uses Express.js API and Sequelize to interact with a MySQL database.

## Table of contents
* [Installation]()

* [Usage]()

* [Tests]()

* [Demo]()

* [Tools and Technologies]()

## Installation

To install necessary dependencies, run the following command:

npm i

It will install express, sequelize, mysq12, and dotenv.

Express to create our server side.

Sequelize and mysq12 creates a connection between your MySQL database and this application.

dotenv will protect your credentials, check .env.EXAMPLE to see what you need on your .env file.

## Usage
Before running to start, create your database on MySQL first. Then, use the file .env.EXAMPLE to create your .env with your database name, user name, and password. Next, run on your command line npm run seed to seed data to your database so that you can test your routes.

There are four mpdels in this repo that create the following tables:
* Category
* Product
* Tag
* Product Tag

The relationship between these tables have been created as following:

Product belongs to Category, and Category has many Product models, as a category can have multiple products, but a product can only belong to one category.

Product belongs to many Tag models, and Tag belongs to many Product models.

Finally, to be able to test your back end routes with Postman, Insomnia Core or similar application, run on your command line ( npm start ) to start your local server.

## Tests
Use postman, Insomnia Core or similar application to test the GET, POST, PUT and DELETE routes for this back end application.

## Demo
Take a look at the functionality of this project. [Click Here](https://drive.google.com/file/d/1PK24hbQWrbwbrW0bN9g-ctyhIIgjlFKY/view)
[Click Here](https://drive.google.com/file/d/12Gy64GjhNNhJGdfGrf8C1zFKm4P5zu07/view, )


## Tools and Technologies:
* **Languages:** JAVASCRIPT
* **DataBase System:** MySQL
* **Server Environment:** NodeJS
* **Version Control:** Git
* **Editor:** Visual Studio Code
* **Operating System:** Windows 10

