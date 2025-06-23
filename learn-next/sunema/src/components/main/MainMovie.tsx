import Link from "next/link";
import MovieList from "../movie/MovieList";

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
        {title} <Link href={`/movie/${type}`}>더보기</Link>
      </h4>
      <div className="movie-list">
        {loading && (
          <div className="movie-list__item">
            <Link href="#" className="skeleton-list-item ui0">
              {" "}
            </Link>
          </div>
        )}
        <MovieList />
      </div>
    </section>
  );
}
