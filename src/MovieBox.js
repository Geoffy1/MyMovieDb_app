import { Modal, Button } from 'react-bootstrap';
import React, { useState } from 'react';

// Define the base URL for movie poster images
const API_IMG = "https://api.themoviedb.org/3/movie/movie_id/images";

// MovieBox component to display movie information
const MovieBox = ({ poster_path, runtime, vote_average, overview, titel, release_date }) => {
  // State variable to control the visibility of the modal
  const [show, setShow] = useState(false);

  // Function to show the modal
  const handleShow = () => setShow(true);

  // Function to close the modal
  const handleClose = () => setShow(false);

  return (
    <div className='card text-center bg-secondary mb-3'>
      <div className='card-body'>
        {/* Movie poster */}
        <img className="card-img-top" src={API_IMG + poster_path} alt={titel} />
        <div className='card-body'>
          {/* Button to open the modal */}
          <button type="button" className='btn btn-dark' onClick={handleShow}>About</button>
          {/* Modal component */}
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>{titel}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <img className='card-img-top' style={{ width: '6rem' }} src={API_IMG + poster_path} alt={titel} />
              <h3>{titel}</h3>
              <h4>ImDb: {vote_average}</h4>
              <h5>Release Date: {release_date}</h5>
              <br></br>
              <h6>Overview</h6>
              <p>Runtime: {runtime} minutes</p>
              <p>{overview}</p>
            </Modal.Body>
            <Modal.Footer>
              {/* Button to close the modal */}
              <Button variant="secondary" onClick={handleClose}>Close</Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default MovieBox;
