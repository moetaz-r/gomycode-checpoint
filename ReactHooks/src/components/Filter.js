import React from 'react';

const Filter = ({ 
  titleFilter, 
  rateFilter, 
  typeFilter,
  onTitleFilterChange, 
  onRateFilterChange,
  onTypeFilterChange 
}) => {
  return (
    <div className="card filter-card shadow border-0">
      <div className="card-body">
        <h5 className="card-title mb-4">
          <i className="bi bi-funnel me-2"></i>
          Filter Content
        </h5>
        
        <div className="row g-3">
          <div className="col-md-4">
            <label className="form-label fw-bold">Search Title</label>
            <div className="input-group">
              <span className="input-group-text">
                <i className="bi bi-search"></i>
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Enter title..."
                value={titleFilter}
                onChange={(e) => onTitleFilterChange(e.target.value)}
              />
            </div>
          </div>
          
          <div className="col-md-4">
            <label className="form-label fw-bold">Minimum Rating</label>
            <div className="input-group">
              <span className="input-group-text">
                <i className="bi bi-star-fill"></i>
              </span>
              <select
                className="form-select"
                value={rateFilter}
                onChange={(e) => onRateFilterChange(Number(e.target.value))}
              >
                <option value={0}>All Ratings</option>
                <option value={1}>1+ Stars</option>
                <option value={2}>2+ Stars</option>
                <option value={3}>3+ Stars</option>
                <option value={4}>4+ Stars</option>
                <option value={5}>5+ Stars</option>
                <option value={6}>6+ Stars</option>
                <option value={7}>7+ Stars</option>
                <option value={8}>8+ Stars</option>
                <option value={9}>9+ Stars</option>
                <option value={10}>10 Stars</option>
              </select>
            </div>
          </div>
          
          <div className="col-md-4">
            <label className="form-label fw-bold">Content Type</label>
            <div className="input-group">
              <span className="input-group-text">
                <i className="bi bi-collection-play"></i>
              </span>
              <select
                className="form-select"
                value={typeFilter}
                onChange={(e) => onTypeFilterChange(e.target.value)}
              >
                <option value="all">All Types</option>
                <option value="movie">Movies</option>
                <option value="series">TV Series</option>
                <option value="anime">Anime</option>
              </select>
            </div>
          </div>
        </div>
        
        <div className="row mt-3">
          <div className="col-12">
            <div className="d-flex flex-wrap gap-2">
              {titleFilter && (
                <span className="badge bg-primary d-flex align-items-center">
                  Title: {titleFilter} 
                  <i 
                    className="bi bi-x ms-1" 
                    onClick={() => onTitleFilterChange('')} 
                    style={{cursor: 'pointer', fontSize: '0.8rem'}}
                  ></i>
                </span>
              )}
              {rateFilter > 0 && (
                <span className="badge bg-warning text-dark d-flex align-items-center">
                  Rating: {rateFilter}+ 
                  <i 
                    className="bi bi-x ms-1" 
                    onClick={() => onRateFilterChange(0)} 
                    style={{cursor: 'pointer', fontSize: '0.8rem'}}
                  ></i>
                </span>
              )}
              {typeFilter !== 'all' && (
                <span className="badge bg-success d-flex align-items-center">
                  Type: {typeFilter} 
                  <i 
                    className="bi bi-x ms-1" 
                    onClick={() => onTypeFilterChange('all')} 
                    style={{cursor: 'pointer', fontSize: '0.8rem'}}
                  ></i>
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;