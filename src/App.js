// Import React and necessary components/modules
import React, { useState, useEffect } from 'react';
import './App.css';
import MovieBox from './MovieBox';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Nav, FormControl, Form, Button } from 'react-bootstrap';

// Define the API URLs
const API_URL = "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";
const API_SEARCH = "https://api.themoviedb.org/3/search/movie?api_key=6a8aba6c223aa4c5c79fbc541531685e&query";

// Create the main App component
function App() {
  // State variables
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');

  // Fetch popular movies from the API on initial component load
  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        // Log the API response data
        console.log(data);
        // Set the top 10 movies to the state
        setMovies(data.results.slice(0, 10));
      });
  }, []);

  // Function to search for movies
  const searchMovie = async (e) => {
    e.preventDefault();
    console.log("Searching");
    try {
      // Build the search URL with the query
      const url = `https://api.themoviedb.org/3/search/movie?api_key=6a8aba6c223aa4c5c79fbc541531685e&query=${query}`;
      // Fetch data from the search API
      const response = await fetch(url);
      // Parse the response data
      const data = await response.json();
      // Log the search results
      console.log(data);
      // Update the movies state with search results
      setMovies(data.results);
    } catch (error) {
      // Handle any errors
      console.log(error);
      throw error;
    }
  }

  // Function to handle input change
  const changeHandler = (e) => {
    setQuery(e.target.value);
  }

  return (
    <>
      {/* Navbar */}
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container fluid>
          <Navbar.Brand href="/home">MovieDb App</Navbar.Brand>
          <Navbar.Brand href="/home">Trending</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll"></Navbar.Toggle>
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-3" style={{ maxHeight: '100px' }} navbarScroll></Nav>
            {/* Search Form */}
            <Form className="d-flex" onSubmit={searchMovie} autoComplete='off'>
              <FormControl
                type="search"
                placeholder="Movie Search"
                className='me-2'
                aria-label='search'
                name='query'
                value={query}
                onChange={changeHandler}
              ></FormControl>
              <Button variant="secondary" type="submit">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Movie List */}
      <div>
        {movies.length > 0 ? (
          <div className='container'>
            <div className='grid'>
              {movies.map((movieReq) =>
                <MovieBox key={movieReq.id} {...movieReq} />)
              }
            </div>
          </div>
        ) : (
          <h2>No movies found!</h2>
        )}
      </div>
    </>
  );
}

export default App;
