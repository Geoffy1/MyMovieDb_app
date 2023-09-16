API_URL="https://api.themoviedb.org/3/movie/popular?api_key=6a8aba6c223aa4c5c79fbc541531685e"
API_IMG="https://image.tmdb.org/t/p/w500/"
API_SEARCH="https://api.themoviedb.org/3/search/movie?api_key=6a8aba6c223aa4c5c79fbc541531685e&query"

1.Set Up the Project 
Create a new React or Next.js project using Create React App online commands
Set up the project structure, including directories for components, pages, and services.
2. Design User Interface
Replicate the design from the Figma link  provided for the homepage, movie search results, and movie details pages.
3.Create reusable components for the movie card, search results, and movie details.
Use CSS or a CSS-in-JS solution to style your components based on the design.
Fetching Data from TMDB API
4.Sign up for a TMDB API key by creating an account on the TMDB website.
Create a service or utility function to make API requests to the TMDB API using your API key.
5.Implement fetching the top 10 movies for the homepage and displaying them in a grid layout.
Use the /movie/popular endpoint to fetch popular movies.
6.Display movie posters, titles, and release dates in movie cards.
Implement the movie search feature:
7.Create a search input field.
Make API requests to the /search/movie endpoint to fetch search results based on the user's input.
Display search results, including movie posters, titles, and release dates.
Show a loading indicator while fetching search results.
 Show movie not found if none existent.
8.Create a movie About page that can be accessed via a route like /movies/:id, where :id is the IMDb ID.
Fetch movie details by IMDb ID using the /movie/{movie_id} endpoint.
Display movie details such as title, release date (in UTC), runtime (in minutes), and overview on the movie details page.
9.Implement error handling to display meaningful error messages in case of API failures or other issues.

Set up routing using React Router for navigating between the homepage, search results, and movie details pages.
Hosted the Application using GitHub Pages

used bootstarpas best practices of styling.
![Alt text](image.png)

ASSIGNMENT DETAILS
STAGE 2 TASK
Objective
Create a movie discovery web application that allows users to search for movies, view details about them, and save their favorite movies. You’ll be consuming data from the TMDB API.
Requirements
1. User Interface:
Create a responsive and visually appealing user interface for the application. Here's the link to the design you're expected to replicate: https://www.figma.com/file/tVfgoNfhYkQaUkh8LGqRab/MovieBox-(Community)?type=design&node-id=1220-324&mode=design&t=6998DWtjQrxz8mOf-0
You should list the top 10 movies on the homepage.
They should be displayed in a grid layout with their movie posters.
The Card component should display the movie title and release date.
card - [data-testid: movie-card]
movie poster - [data-testid: movie-poster]
movie title - [data-testid: movie-title]
movie release date - [data-testid: movie-release-date]
2. Movie Search:
Implement a search feature that allows users to search for movies by title.
Display search results, including movie posters, titles, and release dates.
Show a loading indicator while fetching search results.
3. Movie Details:
When i go to to /movies/:id route (where :id is the id), I should see the movie details page.
I should see
title - [data-testid: movie-title]
release date (in UTC) - [data-testid: movie-release-date]
runtime (in minutes) - [data-testid: movie-runtime]
overview - [data-testid: movie-overview]
API Integration:
Consume the TMDB API to fetch movie data.
Use the following API endpoints:
Fetch movie details by ID: https://api.themoviedb.org/3/movie/{movie_id}
Error Handling:
Implement error handling to display meaningful error messages to users in case of API failures or other issues.
Submission:
Host your frontend application on a platform of your choice (e.g., GitHub Pages, Netlify).
Provide clear instructions on how to run your project locally in your README.md file.
Ensure that the code is well-documented and organized.
This frontend challenge requires you to build a dynamic movie discovery app that interacts with a real API to fetch and display movie data.
PS: You MUST use react or  Next js
Submit your task through the designated submission form.
Submission Deadline:
The deadline for submissions is 14th September 2023, 11:59 PM GMT. Late submissions will not be entertained.
Link to submission form again: https://docs.google.com/forms/d/e/1FAIpQLSf-oxF8XvHCuCiBg3ktBxuNxk2tPk2SQq_-02sx7TBQlBd7Xg/viewform
PPS: THE API MIGHT NOT RETURN ALL THE INFO ON THE SECOND PAGE OF THE DESIGN, ADD THE ESSENTIAL ONES THAT ARE LISTEN ABOVE. THE SIDEBAR DOESN'T NEED TO BE FUNCTIONAL.
YOU MAY USE ANY CSS FRAMEWORK/LIBRARY OF YOUR CHOICE (edited) 
The Movie Database (TMDB)The Movie Database (TMDB)
Getting Started
Welcome to version 3 of The Movie Database (TMDB) API. This is where you will find the definitive list of currently available methods for our movie, tv, actor and image API.
Google DocsGoogle Docs
Frontend Stage Two Submission (26 kB)