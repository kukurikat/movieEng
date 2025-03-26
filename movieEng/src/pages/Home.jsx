import MovieCard from "../components/movieCard";
function Home() {
  const movies = [
    { id: 1, title: "The Dark Knight", release_date: "2008" },
    { id: 2, title: "The Dark Knight 2", release_date: "2009" },
    { id: 3, title: "The Dark Knight 3", release_date: "2010" },
  ];
  const handleSearch = () => {};
  return (
    <div className="home-page">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for a movie"
          className="search-input"
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
}

export default Home;
