import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ movies }) => {
  if (movies.length === 0) {
    return (
      <div className="col-12">
        <div className="card no-movies text-center py-5 border-0">
          <div className="card-body">
            <i className="bi bi-film display-1 text-muted mb-3"></i>
            <h3 className="text-light mb-3">No Content Found</h3>
            <p className="text-muted mb-4">Try adjusting your filters to discover more amazing content.</p>
            <button 
              className="btn btn-primary"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <i className="bi bi-arrow-up me-2"></i>
              Back to Top
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="row">
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;