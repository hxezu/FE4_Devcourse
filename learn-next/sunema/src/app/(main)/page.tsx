import MainBanner from "@/components/main/MainBanner";
import MainMovie from "@/components/main/MainMovie";

const mockMovies = [
  {
    img: "https://image.tmdb.org/t/p/w300/tlcuhdNMKNGEVpGqBZrAaOOf1A6.jpg",
    title: "Civil War",
    date: "2023.11.21",
    vote: 84,
    id: 82346,
  },
  {
    img: "https://image.tmdb.org/t/p/w300/tlcuhdNMKNGEVpGqBZrAaOOf1A6.jpg",
    title: "Other War",
    date: "2024.03.15",
    vote: 78,
    id: 82346,
  },
];

export default function Home() {
  return (
    <>
      <MainBanner />
      <MainMovie
        title="상영중인 영화"
        subtitle="Now Playing"
        type="now_playing"
        movies={mockMovies}
        loading={false}
      />
      <MainMovie
        title="인기있는 영화"
        subtitle="Popular"
        type="popular"
        movies={mockMovies}
        loading={false}
      />
      <MainMovie
        title="개봉예정 영화"
        subtitle="Upcoming"
        type="upcoming"
        movies={mockMovies}
        loading={false}
      />
      <MainMovie
        title="높은 평점을 받은 영화"
        subtitle="Top Rated"
        type="top_rated"
        movies={mockMovies}
        loading={false}
      />
    </>
  );
}
