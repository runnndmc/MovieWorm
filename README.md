# MovieWorm README <!-- omit in toc -->

- [Overview](#overview)
- [MVP](#mvp)
  - [Libraries and Dependencies](#libraries-and-dependencies)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Tree](#component-tree)
    - [Component Hierarchy](#component-hierarchy)
    - [Component Breakdown](#component-breakdown)
    - [Time Estimates](#time-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)

<br>

## Overview

_**MovieWorm** is a movie journal app helping you to remember what movie's you've watched and what you thought about them, all in one place. MovieWorm is for the dedicated move watcher who wants to dive deep into the details of who directed it, what the movie was about or even what rating they would give it.

<br>

### MVP Goals

- _Create a full-stack application that utilizes user authentication_
- _Allow the user to create a new movie post_
- _Have the ability to create personal reviews on the movie_
- _Input specific the movie details while creating the movie post_
- _Have edit and delete functionality on Movie reviews_


<br>

### Libraries and Dependencies

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | _MovieWorm's main front-end library._ |
|   React Router   | _For front-end routing._ |
| Axios | _To make our HTTP requests._ |
|     Rails      | _To create our backend database._ |

<br>



#### Wireframes


[MovieWorm Wireframe](https://whimsical.com/TUUUjNk77JVdvP9s5prHdG)

- All screens including mobile screens



#### Component Hierarchy 

``` structure

src
|__ components/
      |__ Header.jsx
      |__ HeaderTable.jsx 
      |__ MovieCard.jsx
      |__ Sort.jsx 
      |__ RatingBubbles.jsx 
      |__ CreateForm.jsx  
|__ containers/
      |__ MainContainer.jsx
|__ layouts/
      |__ Layout.jsx
      |__ SideBar.jsx
|__ services/
      |__ Search.jsx
|__ screens/
      |__ Home.jsx 
      |__ MovieCreate.jsx
      |__ MovieDetail.jsx
      |__ ReviewCreate.jsx
      |__ Register.jsx
      |__ Login.jsx
      |__ RecentlyWatched.jsx
      

```

#### Component Breakdown
 

|  Component   |    Type    | state | props | Description                                                      |
| :----------: | :--------: | :---: | :---: | :--------------------------------------------------------------- |
|    Header    | functional |   n   |   n   | _The header will contain the navigation and logo - it will direct the user Home._               |
|  HeaderTable  | functional |   y   |   n   | _The header table will provide a number of movies, reviews and the highest rating._       |
|   MovieCard    |   functional    |   y   |   y   | _Users will be able to see a preview of what movies have been watched  _      |
| Sort | functional |   y   |   n   | _ Have the ability to sort through the movies that are posted and look for the most recently viewed._                 |
|    RatingBubbles    | functional |   y   |   n   | _Have the user be able to click on how many starts they think the movie deserves._ |
|    CreateForm    | functional |   y   |   y   | _Give the user the ability to create a new review or a movie for the site._ |


#### Time Estimates



| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Create backend models    |    H     |     1 hr      |      hrs     |    TBD    |
| Create database |    H     |     3 hrs      |      hrs     |     TBD     |
| Add Controllers    |    H     |     2 hrs      |      hrs     |    TBD    |
| Set up routes |    H     |     1 hrs      |      hrs     |     TBD     |
| Set up user auth    |    H     |     2 hrs      |      hrs     |    TBD    |
| Create React App and file structure |    H     |     2 hrs      |      hrs     |     TBD     |
| Set up App.js and all Screens react sturcture  |    H     |     2 hrs      |      hrs     |    TBD    |
| Set up User Auth |    H     |     3 hrs      |      hrs     |     TBD     |
| Finish Layout with Header component|    H     |     3 hrs      |      hrs     |     TBD     |
| 1stDraft Style Layout screen |    H     |     3 hrs      |      hrs     |     TBD     |
| Create Home screen |    H     |     3 hrs      |      hrs     |     TBD     |
| 1stDraft Style Home screen |    H     |     2 hrs      |      hrs     |     TBD     |
| Create GET api call |    H     |     1 hrs      |      hrs     |     TBD     |
| Create MovieCard component |    H     |     3 hrs      |      hrs     |     TBD     |
| 1stDraft Style MovieCard component |    H     |     2 hrs      |      hrs     |     TBD     |
| Create CreateForm |    H     |     2 hrs      |      hrs     |     TBD     |
| 1stDraft Style CreateForm |    H     |     3 hrs      |      hrs     |     TBD     |
| Create Login/Register screens |    H     |     3 hrs      |      hrs     |     TBD     |
| 1stDraft Style Login/Register screens |    H     |     3 hrs      |      hrs     |     TBD     |
| Create MovieDetail screen |    H     |     3 hrs      |      hrs     |     TBD     |
| 1stDraft Style MovieDetail screen |    H     |     2 hrs      |      hrs     |     TBD     |
| Create PUT api call |    H     |     3 hrs      |      hrs     |     TBD     |
| 1stDraft Style Edit Review inline |    H     |     2 hrs      |      hrs     |     TBD     |
| Create DELETE api call |    H     |     3 hrs      |      hrs     |     TBD     |
| Make sure it's functioning |    H     |     1 hrs      |      hrs     |     TBD     |
| Create ReviewCreate screen |    H     |     3 hrs      |      hrs     |     TBD     |
| 1stDraft Style ReviewCreate screen |    H     |     2 hrs      |      hrs     |     TBD     |
| Create HeaderTable compomnent |    L     |     3 hrs      |      hrs     |     TBD     |
| 1stDraft Style HeaderTable compomnent |    L     |     2 hrs      |      hrs     |     TBD     |
| Create RatingBubbles compomnent |    L     |     2 hrs      |      hrs     |     TBD     |
| 1stDraft Style RatingBubbles compomnent |    L     |     1 hrs      |      hrs     |     TBD     |
| Create RatingBubbles compomnent |    L     |     2 hrs      |      hrs     |     TBD     |
| 1stDraft Style RatingBubbles compomnent |    L     |     1 hrs      |      hrs     |     TBD     |
| Create Sort fucntionality |    L     |     2 hrs      |      hrs     |     TBD     |
| Create Search fucntionality |    L     |     2 hrs      |      hrs     |     TBD     |
| Finalize CSS |    H     |     3 hrs      |      hrs     |     TBD     |
| Fun CSS |    L     |     3 hrs      |      hrs     |     TBD     |
| TOTAL               |          |     82 hrs      |      hrs     |     TBD     |

<br>

### Server (Back End)

#### ERD Model

[MovieWorm ERD](https://drive.google.com/file/d/1ny6sIjF1ULhZpsQpueeE4BXVt89Frp35/view?usp=sharing)


<br>

***

## Post-MVP

- _Have a sort functionality to see the most recently watched_
- _Have a search function to search for the movies you've watched_
- _Filter by theme, rating, title, director_
- _Have a review rating scale so the user can rate with a click of a star_\
- _Create a Characters and/or Directors table_
- _Include clips from a movie_

***

## Code Showcase


## Code Issues & Resolutions
