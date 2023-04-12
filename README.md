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
<b>This project is the beginning of the road of my new career. It is meant to be a proof and history of my learning and progress in learning JS programming. I want to rebuild it, learn from it and add new technologies/solutions that I will learn during this time.
The first step I would like to take is to make it in nest.js technology.</b>
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

