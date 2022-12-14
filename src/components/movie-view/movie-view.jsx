import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Button, Image } from "react-bootstrap";

import './movie-view.scss';

import { Link } from "react-router-dom";

export class MovieView extends React.Component {

  render() {
    const { movie, onBackClick, handleFavorite } = this.props;

    return (
      <Row>
        <Col lg={8}>
          <div className="movie-view">
            <div className="movie-poster mt-3">
              <img src={movie.ImagePath} />
            </div>
            <div className="movie-title mt-2">
              <span className="label">Title: </span>
              <span className="value">{movie.Title}</span>
            </div>
            <div className="movie-description">
              <span className="label">Description: </span>
              <span className="value">{movie.Description}</span>
            </div>
            <div className="movie-director">
              <span className="label">Director: </span>
              <span className="value">{movie.Director.Name}</span>
            </div>
            <div className="movie-genre">
              <span className="label">Genre: </span>
              <span className="value">{movie.Genre.Name}</span>
            </div>
            <Button
              className="favorite-button mt-2"
              variant="primary"
              onClick={() => handleFavorite(movie._id, "add")}
            >
              Add to favorite Movies
            </Button>
            <Button
              className="back-button mt-2"
              variant="secondary"
              onClick={() => {
                onBackClick();
              }}
            >
              Back
            </Button>
          </div>
        </Col>
      </Row>
    );
  }
}

MovieView.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
    ImagePath: PropTypes.string.isRequired,
    Genre: PropTypes.shape({
      Name: PropTypes.string.isRequired,
      Description: PropTypes.string.isRequired,
    }).isRequired,
    Director: PropTypes.shape({
      Name: PropTypes.string.isRequired,
      Bio: PropTypes.string.isRequired,
      Birth: PropTypes.string.isRequired,
      Death: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  onBackClick: PropTypes.func.isRequired,
};