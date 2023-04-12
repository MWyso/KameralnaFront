<div align="center">

![Logo projektu](/src//assets/images/logo3.png "Logo projektu")
  <h1>Restaurant Kameralna [FE]</h1>

  <p>
    Restuarant Kameralna project.
  </p>

<h4>
    <a href="https://kameralna.networkmanager.pl/">View Demo</a>
</h4>
<hr>
</div>

## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Features](#features)
* [Setup](#setup)
* [Screen](#screen)

## General info
Project on your own for the ***MegaK v2*** course certification.
<hr>
<b>This project is a summary of learning from the MegaK course. I used a lot of the things we did in the course.
I used materials from MegaK, Chat-GPT4 and other repositories available on the web to create this repository. 
The project is developmental and is a history and documentation of learning. <br>

I Currently working on:<br>
1. Create a proper, secure login and registration system<br>

In the near future, I will take care of:<br>

1. Redevelop the entire application into Nest.js<br>
2. Build an online ordering system (shopping cart)</b>
<hr>
Project assumptions:
<br>
-create a website for ordering food and create an admin account to manage it. Adding and deleting things on the Menu.

## Technologies
**Frontend** is created with:
* React.js
* TypeScript
* Styled Components

## Features
* Displays the website of the Kameralna restuarant
* Using the leaflet and showing the location of the Kameralna restuarant
* Displays the menu from the database.
* Displays contact information, opening hours and location from the database.
* Access to the administration panel -> <a href="https://kameralna.networkmanager.pl/login">Admin Panel</a>
  * email: test@test.com
  * password: Test123
* In the Admin Panel, you can
  * add or remove administrators.
  * add or remove an item from the menu.

## Setup

### Step1
``
$ git clone https://github.com/MWyso/RestaurantKameralnaFront.git
``
### Step2
#### Combination of types with [BE].
In the **tsconfig.paths.json** file
````
{
"compilerOptions": {
"baseUrl": ".",
"paths": {
"types": [
"../restaurant-kameralna-back/types"
]
}
}
}
````
Add the path location to the **/types** file from the Restuarant Kameralna [BE].
<br>
***"../restaurant-kameralna-back/types"***

### Step3
Use script from package.json
<br>
````
 "scripts": {
    "start": "react-app-rewired start",
    "build": "set REACT_APP_API_URL=/api&& react-app-rewired build",
    "test": "react-app-rewired test",
    "eject": "react-scripts eject"
````
## Screen

![aplication](/src//assets/images/screens/1.JPG "aplication")
![aplication](/src//assets/images/screens/2.JPG "aplication")
![aplication](/src//assets/images/screens/3.JPG "aplication")
![aplication](/src//assets/images/screens/4.JPG "aplication")
![aplication](/src//assets/images/screens/5.JPG "aplication")
![aplication](/src//assets/images/screens/6.JPG "aplication")
![aplication](/src//assets/images/screens/7.JPG "aplication")
![aplication](/src//assets/images/screens/8.JPG "aplication")
![aplication](/src//assets/images/screens/9.JPG "aplication")

