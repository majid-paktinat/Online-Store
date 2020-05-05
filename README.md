# Online-Store Project

#### App Setup

1. Create a GitHub repo called `online-store` and clone it to your computer.

2. Make a package.json file by running `npm init` from the command line.

3. Install the Express npm package: `npm install express`, `npm install mysql`, `npm install express-handlebars`, `npm install dotenv`, `npm install bcryptjs`, `npm install path` and  `npm install stripe`

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

3. Inside the `<...>_controller.js` files, import Express package as well as respective `<...>.js` which is created in (models)

4. Create the `router` for the app, and export the `router` at the end of your controller files.


#### View setup

1. Inside the project:`online-store`, create a folder named `views`.

   * Create the `index.handlebars` file inside `views` directory.

   * Create the `layouts` directory inside `views` directory.

     * Create the `main.handlebars` file inside `layouts` directory.

     * Setup the `main.handlebars` file so it's able to be used by Handlebars.

     * Setup the `index.handlebars` to have the template that Handlebars can render onto.

     * Create a button in `index.handlebars` that will submit the user input into the database.


## Application Requirements

* Used Node and Express server
* Used MVC paradigm
* Used MySQL database and own customized ORM 
* Deployed on Heroku (https://bootcamp-onlinestore.herokuapp.com/)

#### Directory structure

All the recommended files and directories from the steps above should look like the following structure:

```
.
├── config
│   ├── connection.js
│   └── orm.js
│ 
├── controllers
│    └── carts_controller.js
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
│   └── cart.js
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
│       │    └── cart_style.css
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
    │
    └── layouts
    │    └── main.handlebars
    │── ...     
    

```

