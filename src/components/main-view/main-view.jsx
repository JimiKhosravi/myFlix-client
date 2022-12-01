import React from 'react';
import axios from 'axios';
import PropTypes from "prop-types";

import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import { RegistrationView } from '../registration-view/registration-view';
import { LoginView } from '../login-view/login-view';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';
import { Navbar } from "../navbar/navbar";
import ProfileView from "../profile-view/profile-view";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

import './main-view.scss';

export class MainView extends React.Component {

  constructor() {
    super();
    this.state = {
      movies: [],
      user: null,
      favoriteMovies: [],
      selectedMovie: null,
      registered: true
    }
  }

  componentDidMount() {
    // axios.get('https://my-flix-app-2022.herokuapp.com/movies')
    //   .then(response => {
    //     this.setState({
    //       movies: response.data
    //     });
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });

    let accessToken = localStorage.getItem('token');
    if (accessToken !== null) {
      this.setState({
        user: localStorage.getItem('user')
      });
      this.getMovies(accessToken);
    }
  }

  getMovies(token) {
    axios.get('https://my-flix-app-2022.herokuapp.com/movies', {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(response => {
        // Assign the result to the state
        this.setState({
          movies: response.data
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  /*When a movie is clicked, this function is invoked and updates the state 
  of the `selectedMovie` *property to that movie*/

  setSelectedMovie(movie) {
    this.setState({
      selectedMovie: movie
    });
  }

  /* When a user successfully logs in, this function updates the `user` property in
  state to that *particular user*/

  onLoggedIn(authData) {
    console.log(authData);
    this.setState({
      user: authData.user.Username
    });

    localStorage.setItem('token', authData.token);
    localStorage.setItem('user', authData.user.Username);
    this.getMovies(authData.token);
  }

  onLoggedOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.setState({
      user: null
    });
  }

  toRegister(registered) {
    this.setState({
      registered,
    });
  }

  handleFavorite = (movieId, action) => {
    const { user, favoriteMovies } = this.state;
    const accessToken = localStorage.getItem("token");
    const username = user;
    if (accessToken !== null && username !== null) {
      // Add MovieID to Favorites (local state & webserver)
      if (action === "add") {
        this.setState({ favoriteMovies: [...favoriteMovies, movieId] });
        axios.post(
          `https://my-flix-app-2022.herokuapp.com/users/${username}/favoritemovies/${movieId}`,
          {},
          {
            headers: { Authorization: `Bearer ${accessToken}` },
          }
        )
          .then((res) => {
            console.log(`Movie added to ${username} Favorite movies`);
            alert(`Movie added to ${username} Favorite movies`);
          })
          .catch(function (error) {
            console.log(error);
          });
        // Remove MovieID from Favorites (local state & webserver)
      } else if (action === "remove") {
        this.setState({
          favoriteMovies: favoriteMovies.filter((id) => id !== movieId),
        });
        axios.delete(
          `https://my-flix-app-2022.herokuapp.com/users/${username}/favoritemovies/${movieId}`,
          {
            headers: { Authorization: `Bearer ${accessToken}` },
          }
        )
          .then((res) => {
            console.log(`Movie removed from ${username} Favorite movies`);
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    }
  };

  render() {

    const { movies, user, favoriteMovies } = this.state;

    return (
      <Router>
        <Navbar user={user} />
        <Row className="main-view justify-content-md-center mt-3">
          <Route
            exact
            path="/"
            render={() => {
              if (!user)
                return (
                  <Col>
                    <LoginView onLoggedIn={(user) => this.onLoggedIn(user)} />
                  </Col>
                );
              if (movies.length === 0) return <div className="main-view" />;
              return movies.map((m) => (
                <Col md={3} key={m._id}>
                  <MovieCard movie={m} />
                </Col>
              ));
            }}
          />
          <Route
            path="/register"
            render={() => {
              if (user) return <Redirect to="/" />;
              return (
                <Col>
                  <RegistrationView />
                </Col>
              );
            }}
          />

          {/* route for link on main-view to profile-view */}

          <Route
            path={`/users/${user}`}
            render={({ history }) => {
              if (!user) return <Redirect to="/" />;
              return (
                <Col>
                  <ProfileView
                    user={user}
                    goBack={history.goBack}
                    favoriteMovies={favoriteMovies || []}
                    handleFavorite={this.handleFavorite}
                    onBackClick={() => history.goBack()}
                    movies={movies} />
                </Col>
              );
            }}
          />

          <Route
            path={`/user-update/:username`}
            render={({ match, history }) => {
              if (!user) return <Redirect to="/" />;
              return (
                <Col>
                  <UserUpdate
                    user={user}
                    onBackClick={() => history.goBack()}
                  />
                </Col>
              );
            }}
          />


          <Route
            path="/movies/:movieId"
            render={({ match, history }) => {
              if (!user)
                return (
                  <Col>
                    <LoginView onLoggedIn={(user) => this.onLoggedIn(user)} />
                  </Col>
                );
              if (movies.length === 0) return <div className="main-view" />;
              return (
                <Col md={8}>
                  <MovieView
                    movie={movies.find((m) => m._id === match.params.movieId)}
                    onBackClick={() => history.goBack()}
                    handleFavorite={this.handleFavorite}
                  />
                </Col>
              );
            }}
          />
        </Row>
      </Router>
    )

  }
}

export default MainView;