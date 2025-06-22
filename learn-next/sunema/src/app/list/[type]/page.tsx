interface MovieItem {
  img: string;
  title: string;
  date: string;
  vote: number;
}

interface ListProps {
  movies: MovieItem[];
  loading: boolean;
  moreLoading: boolean;
  params: { type: string };
}

function getTitleByType(type: string) {
  switch (type) {
    case "now_playing":
      return "현재 상영 중인 영화";
    case "popular":
      return "인기 있는 영화";
    case "upcoming":
      return "개봉 예정 영화";
    case "top_rated":
      return "높은 평점을 받은 영화";
    default:
      return "영화 리스트";
  }
}

const mockMovies = [
  {
    img: "https://image.tmdb.org/t/p/w300/tlcuhdNMKNGEVpGqBZrAaOOf1A6.jpg",
    title: "Civil War",
    date: "2023.11.21",
    vote: 84,
  },
  {
    img: "https://image.tmdb.org/t/p/w300/tlcuhdNMKNGEVpGqBZrAaOOf1A6.jpg",
    title: "Other War",
    date: "2024.03.15",
    vote: 78,
  },
];

export default function List({
  movies,
  loading,
  moreLoading,
  params,
}: ListProps) {
  const { type } = params;
  const title = getTitleByType(type);
  movies = mockMovies;

  return (
    <>
      <section className="movie list">
        <h4 className="movie-subtext">{title}</h4>
        <div className="movie-list">
          {loading
            ? Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="movie-list__item">
                  <a href="#" className="skeleton-list-item ui0"></a>
                </div>
              ))
            : movies.map((movie, idx) => (
                <div key={idx} className="movie-list__item">
                  <a href="#">
                    <figure>
                      <img src={movie.img} alt={movie.title} />
                    </figure>
                    <div className="movie-list__txt">
                      <div className="progress-circle p50">
                        <span>{Math.round(movie.vote * 10)}%</span>
                        <div className="left-half-clipper">
                          <div className="first50-bar"></div>
                          <div className="value-bar"></div>
                        </div>
                      </div>
                      <strong className="movie-list__title">
                        {movie.title}
                      </strong>
                      <p className="movie-list__desc">설명 없음</p>
                      <span className="movie-list__release">
                        {movie.date} / 평점 {movie.vote}
                      </span>
                    </div>
                  </a>
                </div>
              ))}
        </div>

        {moreLoading && (
          <>
            {Array.from({ length: 20 }).map((_, i) => (
              <div key={i} className="movie-list__item">
                <a href="#" className="skeleton-list-item ui0"></a>
              </div>
            ))}
          </>
        )}
      </section>
    </>
  );
}
