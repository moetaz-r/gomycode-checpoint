import React from "react";

const MovieCard = ({ movie }) => {
  const getTypeBadge = (type) => {
    const badges = {
      movie: "primary",
      series: "success",
      anime: "danger",
    };
    return badges[type] || "secondary";
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <i
        key={index}
        className={`bi bi-star${
          index < Math.floor(rating / 2) ? "-fill" : ""
        } rating-stars me-1`}
        style={{ fontSize: "0.9rem" }}
      ></i>
    ));
  };

  // Fallback image in case the poster fails to load
  const handleImageError = (e) => {
    e.target.src = `https://via.placeholder.com/300x450/2a2a2a/cccccc?text=${encodeURIComponent(
      movie.title
    )}`;
  };

  return (
    <div className="col-lg-4 col-md-6 mb-4">
      <div className="card movie-card h-100 shadow-lg border-0">
        <div className="position-relative">
          <img
            src={movie.posterURL}
            className="card-img-top"
            alt={movie.title}
            style={{
              height: "280px",
              objectFit: "cover",
              width: "100%",
            }}
            onError={handleImageError}
            loading="lazy"
          />
          <span
            className={`position-absolute top-0 end-0 badge bg-${getTypeBadge(
              movie.type
            )} type-badge m-2`}
          >
            <i
              className={`bi bi-${
                movie.type === "movie"
                  ? "film"
                  : movie.type === "series"
                  ? "tv"
                  : "controller"
              } me-1`}
            ></i>
            {movie.type.toUpperCase()}
          </span>
          <div className="position-absolute bottom-0 start-0 end-0 bg-dark bg-opacity-75 p-2">
            <div className="text-warning d-flex align-items-center">
              {renderStars(movie.rating)}
              <small className="text-light ms-2">({movie.rating}/10)</small>
            </div>
          </div>
        </div>

        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{movie.title}</h5>

          <div className="mb-2">
            {movie.genre &&
              movie.genre.split(", ").map((genre, index) => (
                <span key={index} className="genre-tag">
                  {genre.trim()}
                </span>
              ))}
          </div>

          <p className="card-text flex-grow-1">{movie.description}</p>

          <div className="mt-auto pt-2">
            <div className="d-grid gap-2">
              <button className="btn btn-outline-primary btn-sm">
                <i className="bi bi-play-fill me-1"></i>
                Watch Trailer
              </button>
              <button className="btn btn-outline-info btn-sm">
                <i className="bi bi-info-circle me-1"></i>
                More Info
              </button>
            </div>
          </div>
        </div>

        <div className="card-footer bg-dark border-top-0 pt-3">
          <small className="text-muted">
            <i className="bi bi-clock me-1"></i>
            Added recently
          </small>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
