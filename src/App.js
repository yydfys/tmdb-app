import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import MovieCard from './components/MovieCard';
import Navigation from './components/Navigation';
import { searchMovies, getPopularMovies } from './services/tmdbAPI';

function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  // 搜索电影
  const handleSearch = async (query) => {
    if (!query.trim()) {
      loadPopularMovies();
      return;
    }

    setLoading(true);
    try {
      const results = await searchMovies(query);
      setMovies(results);
    } catch (error) {
      console.error('Search error:', error);
    } finally {
      setLoading(false);
    }
  };

  // 加载热门电影
  const loadPopularMovies = async () => {
    setLoading(true);
    try {
      const results = await getPopularMovies();
      setMovies(results);
    } catch (error) {
      console.error('Error loading popular movies:', error);
    } finally {
      setLoading(false);
    }
  };

  // 组件挂载时加载热门电影
  React.useEffect(() => {
    loadPopularMovies();
  }, []);

  return (
    <div className="app">
      <Navigation />
      <div className="container">
        <header className="app-header">
          <h1>🎬 Movie Explorer</h1>
          <p>Discover amazing movies and TV shows</p>
        </header>

        <SearchBar onSearch={handleSearch} />

        {loading && (
          <div className="loading">Loading movies...</div>
        )}

        <div className="movies-grid">
          {movies.map(movie => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>

        {!loading && movies.length === 0 && (
          <div className="no-results">
            No movies found. Try searching for something else.
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
