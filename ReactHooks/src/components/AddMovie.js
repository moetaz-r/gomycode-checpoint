import React, { useState } from 'react';

const AddMovie = ({ onAddMovie }) => {
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [posterURL, setPosterURL] = useState('');
  const [rating, setRating] = useState(5);
  const [type, setType] = useState('movie');
  const [genre, setGenre] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (title && description && posterURL) {
      const newMovie = {
        id: Date.now(),
        title,
        description,
        posterURL,
        rating: Number(rating),
        type,
        genre
      };
      
      onAddMovie(newMovie);
      
      setTitle('');
      setDescription('');
      setPosterURL('');
      setRating(5);
      setType('movie');
      setGenre('');
      setShowForm(false);
      
      alert('Content added successfully! 🎉');
    }
  };

  return (
    <div className="card shadow border-0">
      <div className="card-body">
        {!showForm ? (
          <div className="text-center py-4">
            <button 
              className="btn btn-primary btn-lg px-4"
              onClick={() => setShowForm(true)}
            >
              <i className="bi bi-plus-circle me-2"></i>
              Add New Content
            </button>
            <p className="text-muted mt-3 mb-0">
              Share your favorite movies, series, or anime with the community
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h5 className="card-title text-light mb-0">
                <i className="bi bi-plus-square me-2"></i>
                Add New Content
              </h5>
              <button 
                type="button" 
                className="btn-close btn-close-white"
                onClick={() => setShowForm(false)}
                aria-label="Close"
              ></button>
            </div>
            
            <div className="row g-3">
              <div className="col-md-6">
                <label className="form-label text-light fw-bold">Title *</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter title..."
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </div>
              
              <div className="col-md-6">
                <label className="form-label text-light fw-bold">Content Type *</label>
                <select
                  className="form-select"
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                >
                  <option value="movie">Movie</option>
                  <option value="series">TV Series</option>
                  <option value="anime">Anime</option>
                </select>
              </div>
              
              <div className="col-12">
                <label className="form-label text-light fw-bold">Description *</label>
                <textarea
                  className="form-control"
                  placeholder="Enter description..."
                  rows="3"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                />
              </div>
              
              <div className="col-md-6">
                <label className="form-label text-light fw-bold">Poster URL *</label>
                <input
                  type="url"
                  className="form-control"
                  placeholder="https://example.com/poster.jpg"
                  value={posterURL}
                  onChange={(e) => setPosterURL(e.target.value)}
                  required
                />
              </div>
              
              <div className="col-md-3">
                <label className="form-label text-light fw-bold">Rating (1-10)</label>
                <input
                  type="number"
                  className="form-control"
                  min="1"
                  max="10"
                  value={rating}
                  onChange={(e) => setRating(e.target.value)}
                />
              </div>
              
              <div className="col-md-3">
                <label className="form-label text-light fw-bold">Genre</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Action, Drama, Comedy..."
                  value={genre}
                  onChange={(e) => setGenre(e.target.value)}
                />
              </div>
            </div>
            
            <div className="mt-4 d-flex gap-2">
              <button type="submit" className="btn btn-success flex-fill">
                <i className="bi bi-check-circle me-2"></i>
                Add Content
              </button>
              <button 
                type="button" 
                className="btn btn-secondary"
                onClick={() => setShowForm(false)}
              >
                <i className="bi bi-x-circle me-2"></i>
                Cancel
              </button>
            </div>
            
            <div className="mt-3">
              <small className="text-muted">
                <i className="bi bi-info-circle me-1"></i>
                Fields marked with * are required
              </small>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default AddMovie;