interface MovieItem {
  img: string;
  title: string;
  date: string;
  vote: number;
  id: number;
}

interface MainMovieProps {
  title: string;
  subtitle: string;
  type: string;
  movies: MovieItem[];
  loading: boolean;
}

export default function MainMovie({
  title,
  subtitle,
  type,
  movies,
  loading,
}: MainMovieProps) {
  return (
    <section className="movie">
      <h3 className="movie-category">{subtitle}</h3>
      <h4 className="movie-subtext">
        {title} <a href={`/list/${type}`}>더보기</a>
      </h4>
      <div className="movie-list">
        {loading && (
          <div className="movie-list__item">
            <a href="#" className="skeleton-list-item ui0">
              {" "}
            </a>
          </div>
        )}
        {movies.map((movie) => (
          <div key={movie.title} className="movie-list__item">
            <a href={`/detail/${movie.id}`}>
              <figure>
                <img src={movie.img} alt="" />
              </figure>
              <div className="movie-list__txt">
                <div className="progress-circle p50">
                  <span>{movie.vote}%</span>
                  <div className="left-half-clipper">
                    <div className="first50-bar"></div>
                    <div className="value-bar"></div>
                  </div>
                </div>
                <strong className="movie-list__title">{movie.title}</strong>
                <span className="release_date">{movie.date}</span>
              </div>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
