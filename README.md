# MineSweeper, But Online

![MineSweeper Online Mockup Image](assets/readme%20files/responsive-demo.jpg)

Welcome, to MineSweeper, but Online! The classic game of probability that everyone can enjoy!

The purpose of this website is to allow users to play the beloved game, MineSweeper. Users can flag tiles, click on tiles to reveal them and will lose if the tile they clicked on contains a bomb. There are 3 different sizes available to enjoy!
The target audience for this website is people who want to enjoy some brain gymnastics. How? By playing their favorite game, MineSweeper of course!

Visit the deployed website [here](https://justaduck98.github.io/minesweeper-online/)

## Table of Contents

- [MineSweeper, But Online](#minesweeper-but-online)
  - [Table of Contents](#table-of-contents)
  - [User Experience (UX)](#user-experience-ux)
    - [Project goals](#project-goals)
    - [User Stories](#user-stories)
    - [Color Scheme](#color-scheme)
    - [Typography](#typography)
  - [Features](#features)
    - [General](#general)
    - [Landing Page](#landing-page)
  - [Technologies Used](#technologies-used)
    - [Languages Used](#languages-used)
    - [Frameworks, Libraries and Programs used](#frameworks-libraries-and-programs-used)
  - [Testing](#testing)
    - [Testing User Stories](#testing-user-stories)
    - [Tools Testing](#tools-testing)
    - [Manual Testing](#manual-testing)
  - [Deployment](#deployment)
    - [GitHub Pages](#github-pages)
  - [Credits](#credits)
    - [Content](#content)
***

## User Experience (UX)

### Project goals

* The website should have a neat, simple and intuative design to represent the simplicity of the game.

* Display a playable, working game of MineSweeper with different difficulties and various amount of bombs.

* Allow the user to reveal tiles, mark flags, find bombs and make it easy to keep playing.

### User Stories

* As a site visitor, the purpose of the website should be clear, and figuring out how to play the game should take no less than 5 minutes. 

* As an avid MineSweep Player, I would like to change up the difficulties for varying how hard the game should be. 

* As a travelling worker, I would like to enjoy my favorite game while on the go on my phone.

### Color Scheme

The main colors used for this project are: Yellow(#FFAA55), grey(#454545) and white(#FFFFFF). The colours should take away distractions from the game and allow users to focus on enjoying the game.

### Typography

The fonts used in this website are Times New Roman and Arial. They should give a familiar feeling and a clean expression. They are also considered safe fonts meaning they will always display.

## Features

### General

* Responsive design across all device sizes and units, from mobile up to desktops.

* Subtle coloring that makes it clear to the user what actions they can take on the website and no distracting elements.

* **Header**
  ![Header image](assets/readme%20files/minesweeper-header.jpg)

  - The header is simply the text: "MineSweeper, The Classic Game To Test Your Superior Skills!"
  - The header is responsive and shrinks both in size and adapts well to mobile, tablet and laptop screens.
* **Footer**
  - The project scope doesn't require a footer as it doesn't provide any game functionality for the user. 
  - One could aruge that difficulty buttons could be part of the footer, but to increase development efficiency, I have chosen to keep it as a part of the main code.
 
### Landing Page

* **1st Header**
  ![Header text](assets/readme%20files/minesweeper-h1.jpg)
  - The text is used to display how many bombs are present in the loaded game, to allow the user to know how many bombs are on the playing field.

* **The Game**
  ![Game](assets/readme%20files/minesweeper-game.jpg)
  - The game is loaded in a 5x5 by default when the page loads, to allow the user to quickly start playing if they are limited on time.
 
* **Game Text**
  ![Game info text](assets/readme%20files/minesweeper-game-text.jpg)
  - This text allows the user to know what difficulty they are currently playing, and is responsive to display the correct text as difficulty changes.
  - This text will also be changed to "Would You Like To Play Again?" when a game is lost.
 
* **Difficulty Buttons**
  ![Buttons for Difficulty](assets/readme%20files/minesweeper-difficulty-buttons.jpg)
  - These buttons will generate a new playing field, 5x5, 7x7, 9x9 and show it to the user.
  - These buttons also work as play again options as there is no play again button currently.
 
## Technologies Used

### Languages Used 
  * [HTML5](https://en.wikipedia.org/wiki/HTML5)
  * [CSS3](https://en.wikipedia.org/wiki/CSS)
  * [ES6](https://en.wikipedia.org/wiki/ECMAScript)

### Frameworks, Libraries and Programs used

* [Font Awesome](https://fontawesome.com/)
     - Font Awesome was used for header and footer on all pages to add flags and bombs in order to create a better visual experience for UX purposes.

* [GitHub](https://github.com/)
     - GitHub was used to store the project files and changes.
 
* [Chrome DevTools](https://developer.chrome.com/docs/devtools/)
    - Chrome DevTools was used during development process for processing code and testing responsiveness.
 
* [W3C Markup Validator](https://validator.w3.org/)
    - W3C Markup Validator was used to validate the HTML code and no errors found.

* [W3C CSS Validator](https://jigsaw.w3.org/css-validator/)
    - W3C CSS Validator was used to validate the CSS code and no errors found.

* [JS Validator](https://www.jslint.com/)
    - Jslint was used to validate the js code.
    - Passed validation with for-loop allowed but failed for line character limit.

- [Am I Responsive?](http://ami.responsivedesign.is/#) 
  - Was used to check responsiveness of the site pages across different devices.


## Testing

### Testing User Stories

* As a site visitor, the purpose of the website should be clear, and figuring out how to play the game should take no less than 5 minutes. 
    - The websites purpose is clear. An online version of Minesweeper.
    - The number of bombs text, and clicking around allows the users to find out how the game works without a text explanation.

* As an avid MineSweep Player, I would like to change up the difficulties for varying how hard the game should be. 
  - The game comes in 3 different difficulties. 5x5, 7x7, and 9x9!

* As a travelling worker, I would like to enjoy my favorite game while on the go on my phone.
    - The game is responsive and uses mobile first design, allowing visitors to play regardless of device!

### Tools Testing

- [Chrome DevTools](https://developer.chrome.com/docs/devtools/)

  - Chrome DevTools was used during the development process to test, explore and modify HTML elements and CSS styles used in the project.

- Responsiveness

  - [Am I Responsive?](http://ami.responsivedesign.is/#) was used to check responsiveness of the site pages across different devices.

  - Chrome DevTools was used to test responsiveness in different screen sizes during the development process.

### Manual Testing

- Browser Compatibility

  - The website has been tested on the following browsers:

    - **Goolgle Chrome**

        No appearance, responsiveness nor functionality issues.

    - **Mozilla Firefox**

        No responsiveness nor functionality issues.

    - **Microsoft Edge**

        No appearance, responsiveness nor functionality issues.

- Elements Testing
    - Flag checkbox
      - Clicking on the checkbox allows the user to place flags. There is a known bug that allows the user to place 2 flags on the same tile. This is being looked into and this will be patched.
  
    - Tiles
      - Clicking on tiles reveals tiles, a number of how many bombs were around and if the number was 0, more tiles are revealed to save time and effort.

    - Difficulty Buttons
      - Pressing each of the buttons generate a playing field of specified size and with a random amounts of bombs each time. The bombs are also placed randomly on the playing field.

- Device compatibility

  - The website has been tested on these devices:

    - **Motorola G30**

        No appearance, responsiveness nor functionality issues.

    - **Windows 10 desktop**

        No appearance, responsiveness nor functionality issues.

## Deployment

- This website was developed using [CodeAnywhere](app.codeanywhere.com), which was then committed and pushed to GitHub using the provided terminal.

### GitHub Pages

- Here are the steps to deploy this website to GitHub Pages from its GitHub repository:

    1. Log in to GitHub and locate the [GitHub Repository](https://github.com/).

    2. At the top of the Repository, locate the Settings button on the menu.

    3. Scroll down the Settings page until you locate the Pages section.

    4. Under Source, click the dropdown called None and select Master Branch.

    5. The page will refresh automatically and generate a link to your website.

## Credits

### Content

- All content was written by the developer.
