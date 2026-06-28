import React, { useState, useEffect } from "react";
import "./App.css";
import MovieList from "./components/MovieList";
import Filter from "./components/Filter";
import AddMovie from "./components/AddMovie";

function App() {
  const [movies, setMovies] = useState([]);
  const [titleFilter, setTitleFilter] = useState("");
  const [rateFilter, setRateFilter] = useState(0);
  const [typeFilter, setTypeFilter] = useState("all");

  useEffect(() => {
    const sampleMovies = [
      {
        id: 1,
        title: "Avengers: Endgame",
        description:
          "After the devastating events of Infinity War, the Avengers assemble once more to reverse Thanos' actions and restore balance to the universe in this epic superhero conclusion.",
        posterURL:
          "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_FMjpg_UX1000_.jpg",
        rating: 9,
        type: "movie",
        genre: "Action, Adventure, Sci-Fi",
      },
      {
        id: 2,
        title: "Spider-Man: No Way Home",
        description:
          "Peter Parker's secret identity is revealed to the world, forcing him to seek help from Doctor Strange, which leads to the multiverse breaking open and villains from other realities entering his world.",
        posterURL:
          "https://m.media-amazon.com/images/M/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_FMjpg_UX1000_.jpg",
        rating: 8,
        type: "movie",
        genre: "Action, Adventure, Fantasy",
      },
      {
        id: 3,
        title: "Black Panther",
        description:
          "T'Challa returns to the advanced African nation of Wakanda to take his rightful place as king, but must defend his homeland from a powerful enemy who seeks to challenge his rule.",
        posterURL:
          "https://m.media-amazon.com/images/M/MV5BMTg1MTY2MjYzNV5BMl5BanBnXkFtZTgwMTc4NTMwNDI@._V1_FMjpg_UX1000_.jpg",
        rating: 8,
        type: "movie",
        genre: "Action, Adventure, Sci-Fi",
      },
      {
        id: 4,
        title: "Guardians of the Galaxy",
        description:
          "A group of intergalactic criminals, including Star-Lord, Gamora, Rocket, Groot, and Drax, must work together to stop the fanatical Ronan from destroying the galaxy.",
        posterURL:
          "https://m.media-amazon.com/images/M/MV5BMTAwMjU5OTgxNjZeQTJeQWpwZ15BbWU4MDUxNDYxODEx._V1_FMjpg_UX1000_.jpg",
        rating: 8,
        type: "movie",
        genre: "Action, Adventure, Comedy",
      },
      {
        id: 5,
        title: "Iron Man",
        description:
          "When billionaire industrialist Tony Stark is kidnapped and forced to build a weapon, he instead creates a powered suit of armor to fight evil and protect the world as Iron Man.",
        posterURL:
          "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_FMjpg_UX1000_.jpg",
        rating: 8,
        type: "movie",
        genre: "Action, Adventure, Sci-Fi",
      },
      {
        id: 6,
        title: "Game of Thrones",
        description:
          "In the Seven Kingdoms of Westeros, noble families battle for the Iron Throne while ancient evils awaken in the north and across the Narrow Sea, a queen rises with dragons.",
        posterURL:
          "https://m.media-amazon.com/images/M/MV5BYTRiNDQwYzAtMzVlZS00NTI5LWJjYjUtMzkwNTUzMWMxZTllXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_FMjpg_UX1000_.jpg",
        rating: 9,
        type: "series",
        genre: "Fantasy, Drama, Adventure",
      },
      {
        id: 7,
        title: "Lord of the Rings: Return of the King",
        description:
          "The final battle for Middle-earth begins as Frodo and Sam approach Mount Doom to destroy the One Ring, while Aragorn leads the forces of good against Sauron's dark army at Minas Tirith.",
        posterURL:
          "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg",
        rating: 9,
        type: "movie",
        genre: "Fantasy, Adventure, Drama",
      },
      {
        id: 8,
        title: "Breaking Bad",
        description:
          "A high school chemistry teacher diagnosed with lung cancer turns to manufacturing and selling methamphetamine to secure his family's financial future, descending into the criminal underworld.",
        posterURL:
          "https://m.media-amazon.com/images/M/MV5BYmQ4YWMxYjUtNjZmYi00MDQ1LWFjMjMtNjA5ZDdiYjdiODU5XkEyXkFqcGdeQXVyMTMzNDExODE5._V1_FMjpg_UX1000_.jpg",
        rating: 10,
        type: "series",
        genre: "Crime, Drama, Thriller",
      },
      {
        id: 9,
        title: "One Piece",
        description:
          "Monkey D. Luffy and his diverse crew of pirates sail the dangerous waters of the Grand Line in search of the ultimate treasure, the One Piece, to become the next Pirate King.",
        posterURL:
          "https://m.media-amazon.com/images/M/MV5BODcwNWE3OTMtMDc3MS00NDFjLWE1OTAtNDU3NjgxODMxY2UyXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_FMjpg_UX1000_.jpg",
        rating: 9,
        type: "anime",
        genre: "Adventure, Fantasy, Comedy",
      },
      {
        id: 10,
        title: "Attack on Titan",
        description:
          "In a world where humanity lives inside cities surrounded by enormous walls due to the Titans, giant humanoid creatures who devour humans, Eren Yeager vows to eradicate the Titans after they destroy his hometown.",
        posterURL:
          "https://m.media-amazon.com/images/M/MV5BMTY5ODk1NzUyMl5BMl5BanBnXkFtZTgwMjUyNzEyMTE@._V1_FMjpg_UX1000_.jpg",
        rating: 9,
        type: "anime",
        genre: "Action, Dark Fantasy, Drama",
      },
      {
        id: 11,
        title: "Lord of Mysteries",
        description:
          "A modern man wakes up in the body of Klein Moretti in a steampunk world filled with supernatural mysteries, secret organizations, and cosmic horrors as he joins the secretive Tarot Club to uncover ancient truths.",
        posterURL:
          "https://tse1.mm.bing.net/th/id/OIP.hxa6P4bFJVopTBhPtbC-bwHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
        rating: 8,
        type: "anime",
        genre: "Mystery, Fantasy, Horror",
      },
      {
        id: 12,
        title: "Doctor Strange",
        description:
          "After a tragic car accident ruins his career as a neurosurgeon, Dr. Stephen Strange travels to Kamar-Taj where he discovers the hidden world of magic, alternate dimensions, and mystical arts.",
        posterURL:
          "https://m.media-amazon.com/images/M/MV5BNjgwNzAzNjk1Nl5BMl5BanBnXkFtZTgwMzQ2NjI1OTE@._V1_FMjpg_UX1000_.jpg",
        rating: 8,
        type: "movie",
        genre: "Action, Fantasy, Adventure",
      },
      {
        id: 13,
        title: "Stranger Things",
        description:
          "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.",
        posterURL:
          "https://m.media-amazon.com/images/M/MV5BMDZkYmVhNjMtNWU4MC00MDQxLWE3MjYtZGMzZWI1ZjhlOWJmXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg",
        rating: 8,
        type: "series",
        genre: "Sci-Fi, Horror, Mystery",
      },
      {
        id: 14,
        title: "The Mandalorian",
        description:
          "The travels of a lone bounty hunter in the outer reaches of the galaxy, far from the authority of the New Republic.",
        posterURL:
          "https://m.media-amazon.com/images/M/MV5BZDhlMzY0ZGItZTcyNS00ZTAxLWIyMmYtZGQ2ODg5OWZiYmJkXkEyXkFqcGdeQXVyODkzNTgxMDg@._V1_FMjpg_UX1000_.jpg",
        rating: 8,
        type: "series",
        genre: "Sci-Fi, Action, Adventure",
      },
      {
        id: 15,
        title: "Demon Slayer",
        description:
          "A family is attacked by demons and only two members survive - Tanjiro and his sister Nezuko, who is turning into a demon slowly.",
        posterURL:
          "https://m.media-amazon.com/images/M/MV5BZjZjNzI5MDctY2Y4YS00NmM4LTljMmItZTFkOTExNGI3ODRhXkEyXkFqcGdeQXVyNjc3MjQzNTI@._V1_FMjpg_UX1000_.jpg",
        rating: 8,
        type: "anime",
        genre: "Action, Fantasy, Adventure",
      },
    ];
    setMovies(sampleMovies);
  }, []);

  const filteredMovies = movies.filter((movie) => {
    const matchesTitle = movie.title
      .toLowerCase()
      .includes(titleFilter.toLowerCase());
    const matchesRating = movie.rating >= rateFilter;
    const matchesType = typeFilter === "all" || movie.type === typeFilter;
    return matchesTitle && matchesRating && matchesType;
  });

  const handleAddMovie = (newMovie) => {
    setMovies((prevMovies) => [...prevMovies, { ...newMovie, id: Date.now() }]);
  };

  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top shadow">
        <div className="container">
          <span className="navbar-brand mb-0 h1 fw-bold">
            <i className="bi bi-camera-reel me-2"></i>
            CineVerse
          </span>
          <div className="navbar-text d-none d-md-block">
            <span className="badge bg-primary">
              🎬 Your Ultimate Cinema Collection
            </span>
          </div>
        </div>
      </nav>

      <div className="container" style={{ paddingTop: "80px" }}>
        <div className="row mb-5">
          <div className="col-12">
            <div className="hero-section text-center p-5 rounded-4 shadow">
              <h1 className="display-4 fw-bold text-white mb-3">
                <i className="bi bi-film me-3"></i>
                Discover Cinematic Magic
              </h1>
              <p className="lead text-light mb-4">
                Explore our curated collection of movies, series, and anime from
                around the world
              </p>
              <div className="row justify-content-center">
                <div className="col-auto">
                  <span className="badge bg-primary me-2 p-2">
                    <i className="bi bi-film me-1"></i>Movies
                  </span>
                  <span className="badge bg-success me-2 p-2">
                    <i className="bi bi-tv me-1"></i>TV Series
                  </span>
                  <span className="badge bg-danger p-2">
                    <i className="bi bi-controller me-1"></i>Anime
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row mb-4">
          <div className="col-12">
            <AddMovie onAddMovie={handleAddMovie} />
          </div>
        </div>

        <div className="row mb-4">
          <div className="col-12">
            <Filter
              titleFilter={titleFilter}
              rateFilter={rateFilter}
              typeFilter={typeFilter}
              onTitleFilterChange={setTitleFilter}
              onRateFilterChange={setRateFilter}
              onTypeFilterChange={setTypeFilter}
            />
          </div>
        </div>

        <div className="row mb-4">
          <div className="col-12">
            <div className="card stats-card shadow border-0">
              <div className="card-body py-3">
                <div className="row text-center">
                  <div className="col-md-3 mb-3 mb-md-0">
                    <div className="stat-item">
                      <h3 className="text-primary mb-1">{movies.length}</h3>
                      <small className="text-muted">Total Titles</small>
                    </div>
                  </div>
                  <div className="col-md-3 mb-3 mb-md-0">
                    <div className="stat-item">
                      <h3 className="text-success mb-1">
                        {filteredMovies.length}
                      </h3>
                      <small className="text-muted">Showing Now</small>
                    </div>
                  </div>
                  <div className="col-md-3 mb-3 mb-md-0">
                    <div className="stat-item">
                      <h3 className="text-warning mb-1">
                        {movies.length > 0
                          ? (
                              movies.reduce(
                                (acc, movie) => acc + movie.rating,
                                0
                              ) / movies.length
                            ).toFixed(1)
                          : "0.0"}
                      </h3>
                      <small className="text-muted">Avg Rating</small>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="stat-item">
                      <h3 className="text-info mb-1">
                        {[...new Set(movies.map((movie) => movie.type))].length}
                      </h3>
                      <small className="text-muted">Categories</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <MovieList movies={filteredMovies} />
          </div>
        </div>
      </div>

      <footer className="bg-dark text-light mt-5 py-4">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 text-center text-md-start">
              <h6 className="mb-2">
                <i className="bi bi-camera-reel me-2"></i>
                CineVerse Collection
              </h6>
              <p className="small text-muted mb-0">
                Your gateway to cinematic adventures
              </p>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <div className="social-links">
                <button className="btn btn-outline-light btn-sm me-2">
                  <i className="bi bi-facebook"></i>
                </button>
                <button className="btn btn-outline-light btn-sm me-2">
                  <i className="bi bi-twitter"></i>
                </button>
                <button className="btn btn-outline-light btn-sm">
                  <i className="bi bi-instagram"></i>
                </button>
              </div>
            </div>
          </div>
          <hr className="my-3" />
          <div className="text-center">
            <small className="text-muted">
              <i className="bi bi-heart-fill text-danger mx-1"></i>
              Made with passion for cinema lovers • {new Date().getFullYear()}
            </small>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
