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

**MovieWorm** is a movie journal app helping you to remember what movie's you've watched and what you thought about them, all in one place. MovieWorm is for the dedicated move watcher who wants to dive deep into the details of who directed it, what the movie was about or even what rating they would give it.

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
| Create backend models    |    H     |     1 hr      |   1   hrs     |   3hr     |
| Create database |    H     |     3 hrs      |     3 hrs     |     1hr    |
| Add Controllers    |    H     |     2 hrs      |   2   hrs     |    1hr    |
| Set up routes |    H     |     1 hrs      |   1   hrs     |     1hr     |
| Set up user auth    |    H     |     2 hrs      |   2   hrs     |    1hr    |
| Set up App.js and all Screens react sturcture  |    H     |     2 hrs      |     2hrs     |    1hr    |
| Set up User Auth |    H     |     3 hrs      |      3hrs     |     5hrs    |
| Layout with Header component|    H     |     3 hrs      |      3hrs     |     4hrs     |
| Create MovieCard component |    H     |     3 hrs      |      3hrs     |     .5hrs    |
| Create CreateForm |    H     |     2 hrs      |      2hrs     |     3hrs     |
| Create Login/Register screens |    H     |     3 hrs      |      3hrs     |     2hrs     |
| Create MovieDetail screen |    H     |     3 hrs      |      3hrs     |     1hr     |
| Create ReviewCreate screen |    H     |     3 hrs      |      3hrs     |     3hrs     |
| Create HeaderTable compomnent |    L     |     3 hrs      |      3hrs     |     1hr    |
| Create RatingBubbles compomnent |    L     |     2 hrs      |      1hrs     |     1hr     |
| Create Sort fucntionality |    L     |     2 hrs      |      2hrs     |     -    |
| Create Search fucntionality |    L     |     2 hrs      |      hrs     |     2hrs     |
| Finalize CSS |    H     |     4hrs      |      4hrs     |     6hrs     |
| Media Queries |    L     |     3 hrs      |      3hrs     |     1hr     |
| TOTAL               |          |     42 hrs      |    42hrs     |     38.5hrs   |

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
- _She may be small but I'm proud of this code because I was able to come up with how to do it and how to debug is all on my own 

``` structure

const matchAndShowReview = reviews.map(review => {
    if (review.movie_id === Number(id)){
        return (
            <div className='review-details'>
            <p>{review.summary}</p>
            <p>You gave this {review.star_rating}<FaStar size={15}/></p>
            </div>
        ) 
    } 
})
```
## Code Issues & Resolutions

- _The above code I came up with when trying to map out reviews from a seperate table that included the movie_id. Originally it was not running because the review.movie_id was an integer and the id was a string so I used Number in order to convert it. 
