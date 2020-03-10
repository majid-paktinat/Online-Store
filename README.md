# Online-Store Project

## Application Requirements

* Must use a Node and Express server

* Must be backed by a MySQL database and an ORM (not necessarily Sequelize)

* Must utilize both GET and POST routes for retrieving and adding new data

* Must be deployed using Heroku (with data)

* Must utilize at least one new third-party API

* Must have a polished UI

* Must follow MVC paradigm

* Must meet good quality coding standards (indentation, scoping, naming)

* Must use Handlebars.js


## Presentation Requirements

Use this [project presentation template](https://docs.google.com/presentation/d/1_u8TKy5zW5UlrVQVnyDEZ0unGI2tjQPDEpA0FNuBKAw/edit?usp=sharing) to address the following: 

* Elevator pitch: a one minute description of your application

* Concept: What is your user story? What was your motivation for development?

* Process: What were the technologies used? How were tasks and roles broken down and assigned? What challenges did you encounter? What were your successes?

* Directions for Future Development


## ------------------------------------------------------------------------------------------

# Node-Express-Handlebars

### Overview

I have created a burger logger with MySQL, Node, Express, Handlebars and a homemade ORM (yum!), by following the MVC design pattern and used Node and MySQL to query and route data in the app, and Handlebars to generate the HTML.


#### App Setup

1. Create a GitHub repo called `online-store` and clone it to your computer.

2. Make a package.json file by running `npm init` from the command line.

3. Install the Express npm package: `npm install express`, `npm install mysql`, `npm install express-handlebars`, `npm install dotenv` and `npm install path`  

4. Create a server.js file.

7. Require the following npm packages inside of the server.js file:
   * express


#### Config Setup

1. Inside the project:`online-store` directory, create a folder named `config`

2. Create a `connection.js` file inside `config` directory.

   * Inside the `connection.js` file, setup the code to connect Node to MySQL.

   * Export the connection.

3. Create an `orm.js` file inside `config` directory.

   * Import (require) `connection.js` into `orm.js`

   * In the `orm.js` file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.

     * `selectAllUsers()`
     * `insertUser()`
     * `updateUser()`
     * `deleteUser()`

     * `selectAllProducts()`
     * `insertProduct()`
     * `updateProduct()`
     * `deleteProduct()`

     * `selectAllCategories()`
     * `insertCategory()`
     * `updateCategory()`
     * `deleteCategory()`

     * `selectAllOrders()`
     * `insertOrder()`
     * `updateOrder()`
     * `deleteOrder()`

   * Export the ORM object in `module.exports`.

#### Model setup

* Inside the project:`online-store` directory, create a folder named `models`.

  * In `models`, make a `user.js` file.
    * Inside `user.js`, import `orm.js` into `user.js`
    * Also inside `user.js`, create the code that will call the ORM functions using user specific input for the ORM.
    * Export at the end of the `user.js` file.

  * In `models`, make a `product.js` file.
    * Inside `product.js`, import `orm.js` into `product.js`
    * Also inside `product.js`, create the code that will call the ORM functions using user specific input for the ORM.
    * Export at the end of the `product.js` file.

  * In `models`, make a `category.js` file.
    * Inside `category.js`, import `orm.js` into `product.js`
    * Also inside `category.js`, create the code that will call the ORM functions using user specific input for the ORM.
    * Export at the end of the `category.js` file.

  * In `models`, make a `order.js` file.
    * Inside `order.js`, import `orm.js` into `order.js`
    * Also inside `order.js`, create the code that will call the ORM functions using user specific input for the ORM.
    * Export at the end of the `order.js` file.


#### Controller setup

1. Inside the project:`online-store` directory, create a folder named `controllers`.

2. In `controllers`, create `users_controller.js`, `products_controller.js`, `categories_controller.js` and `orders_controller.js`  files.

3. Inside the `<...>_controller.js` files, import Express package as well as respective `<...>.js` which is created in (Model Step)

4. Create the `router` for the app, and export the `router` at the end of your controller files.

#### View setup

1. Inside the project:`online-store`, create a folder named `views`.

   * Create the `index.handlebars` file inside `views` directory.

   * Create the `layouts` directory inside `views` directory.

     * Create the `main.handlebars` file inside `layouts` directory.

     * Setup the `main.handlebars` file so it's able to be used by Handlebars.

     * Setup the `index.handlebars` to have the template that Handlebars can render onto.

     * Create a button in `index.handlebars` that will submit the user input into the database.

#### Directory structure

All the recommended files and directories from the steps above should look like the following structure:

```
.
├── config
│   ├── connection.js
│   └── orm.js
│ 
├── controllers
│   └── users_controller.js
│   └── products_controller.js
│   └── categories_controller.js
│   └── orders_controller.js
│
├── db
│   ├── schema.sql
│   └── seeds.sql
│
├── models
│   └── user.js
│   └── product.js
│   └── category.js
│   └── order.js
│
├── node_modules
│ 
├── package.json
│
├── public
│   └── assets
│       ├── css
│       │    └── user_style.css
│       │    └── product_style.css
│       │    └── category_style.css
│       │    └── order_style.css
│       │
│       └── img
│           └── user.png
│           └── product.png
│           └── categoty.png
│           └── order.png
│
├── server.js
│
└── views
    ├── index.handlebars
    │
    └── layouts
         └── main.handlebars
    

```

