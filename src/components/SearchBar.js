import React from 'react';

function MovieSearch({
  searchQuery,
  setSearchQuery,
  handleSearch,
  loading,
  searchResults,
  handleSelectMovie,
}) {
  return (
    <div className="movies-search">
      <input className='hidden sm:flex cursor-pointer items-center flex-grow h-10 rounded-md bg-yellow-400 hover:bg-yellow-500'
        type="text"
        placeholder="Search movie..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button onClick={handleSearch} disabled={loading}>
        {loading ? 'Searching...' : 'Search'}
      </button>

      {Loading && <p>Searchings...</p>}

      <div className="search-results">
        {searchResults.map((movie) => (
          <div key={movie.id}>
            <img
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              alt={movie.title}
            />
            <p>{movie.title}</p>
            <p>Release Date: {movie.release_date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MoviesSearch;