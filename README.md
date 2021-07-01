# The Random Gender-ator

## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Walkthrough](#walkthrough)
* [Learning Goals](#learninggoals)
* [Authors](#authors)
* [Technologies](#technologies)

## Description

This project was a final project assigned by [Turing School of Software and Design](www.turing.edu). I was given one week to design and produce an app for a niche audience and given full creative control of the design of the project.   

On the home page, the user is able to interact with a gender generator which uses a word association API to create new genders related to user input. The niche audience for this app is queer people who are looking for new, non-academic words to help verbalize their identity or are tired of explaining gender to family who aren't listening anyway. The app is designed to be both fun and serve as a tool. A more in-depth description of possibles lenses through which to use the app lives in the "About" page and resources I compiled myself for queer people in Denver are linked in the footer of each page.

### Notable features

 - Built using React framework
 - Use of Router to enable user to navigate to multiple pages and to navigate using back and forward browser controls.
 - Tested with Cypress acceptance testing including the use of stubbed fetch data and happy/sad paths
 - Utilized responsive design for mobile or desktop viewing
 - Utilized a modular file structure for easy file navigation
 - The ability to create random genders using word association results from a public API
 - The ability to save favorite genders to local storage and view them on a Saved Genders page

### Deploy Link
https://the-random-gender-ator.herokuapp.com/

## Installation
1. Clone down this [repo](https://github.com/RMartin0717/random-gender-ator)
2. CD into project directory
3. Run npm i to install all project dependencies
4. Run npm start to begin the server
5. Application should be shown in separate window once npm start is complete


## Walkthrough

 - When you arrive on the homepage of the app, a fetch request will get and store word associations for "sparkle," "trash," "animal," and "extraterrestrial".  
 - The user will be able to select a vibe from a drop down menu and choose between "sparkle,"  "trash," or "a bit of both".
 - Then the user chooses an entity from a drop down menu from the options, "animal," "extraterrestrial," or "a bit of both."
 - Once both input fields are filled out, the user can click on "New Gender Please" and a gender created from random word associations for each of their selections appears on a card.
 - The user can then choose to save the new gender if they would like.
 - The user can click on "Saved Genders" in the header to view their saved genders and delete any they do not want anymore.
 - They may also click on the "About" Link to view information on ways in which they might choose to use the app for fun, for exploration, or as a coping mechanism.
 - The footer of the app contains a link to resources that I complied for trans, nonbinary, and intersex people who live near Denver, Colorado.

Desktop Home Page
<img src="./public/form.gif" width="400">

Desktop About Page
<img src="./public/About.png" width="400">

Desktop Saved Genders Page
<img src="./public/saved.gif" width="400">

Mobile Home Page
<img src="./public/mobile-home.png" width="400">

Mobile About Page
<img src="./public/mobile-about.png" width="400">

Mobile Saved Genders Page
<img src="./public/mobile-saved.png" width="400">



## Learning Goals

My learning goal for this project was to solidify mastery of React, Router, Asynchronous JavaScript, and End to end testing with Cypress.

### Project Progression

At the beginning of this project, I felt very confident with Cypress testing, relatively confident with Asynchronous Javascript, and wanted to make sure I took the time to gain a deeper understanding with Router.

I planned my project to front-load the functionality of the app, knowing that I would be traveling and working in an unfamiliar place for the second half of the week. On the first day, I spent the morning exploring APIs and testing them to see what would work best for the project. Once I found one that provided the data I wanted, I immediately got to work on building out the React app with fetch calls to get the data and store it to use as I built out functionality. In a matter of a few days, I was able to build out all of the app functionality and then spend the rest of the time end-to-end testing, implementing page design, and managing error handling.


### Reflection

This project was perfect for solidifying what I learned over the course of this 6-week portion of the Turing front end program. I do feel that I met my learning goals and feel more confident, efficient, and comfortable building a React app from scratch and independently.

I had a lot of fun building this app as the first app that I genuinely feel my friends will enjoy using. Having the framing of "what does this person need from this app?" made it easier to plan and shift gears when necessary and I really enjoyed that aspect of the development. I am particularly excited in the future to develop apps with specific users in mind because it helped me understand the why behind everything I was doing and I felt more invested in the product.

## Authors
<table>
    <tr>
        <td> Riley Martin <a href="https://github.com/RMartin0717">GH</td>
    </tr>
    </tr>
        <td><img src="https://avatars.githubusercontent.com/u/76501236?s=460&u=56de3268b98bd73447d785601176518e3cd0141c&v=4" alt="R. Martin" width="125" height="auto" /></td>
    </tr>
</table>

## Technologies
<table>
    <tr>
        <td>Framework</td>
        <td>Functionality</td>
        <td>Structure</td>
        <td>Styling</td>
        <td>Continuous Integration</td>
    </tr>
    </tr>
        <td><img src="https://mildaintrainings.com/wp-content/uploads/2017/11/react-logo.png" alt="react" width="100" height="auto" /></td>
        <td><img src="https://raw.githubusercontent.com/voodootikigod/logo.js/master/js.png" alt="javascript" width="100" height="auto" /></td>
        <td><img src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png" alt="html" width="100" height="auto" /></td>
        <td><img src="https://www.pinclipart.com/picdir/middle/175-1759459_eng-a-med-kamel-frameworks-css-css-logo.png" alt="css" width="100" height="auto" /></td>
        <td><img src="https://travis-ci.com/images/logos/TravisCI-Mascot-pride.png" alt="css" width="100" height="auto" /></td>
    </tr>
</table>
