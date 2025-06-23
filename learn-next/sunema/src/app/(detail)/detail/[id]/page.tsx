import DetailInfo from "@/components/detail/DetailInfo";
import DetailTrailer from "@/components/detail/DetailTrailer";
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

export default function Detail() {
  return (
    <>
      <DetailTrailer />
      <DetailInfo />
      <MainMovie
        title="비슷한 장르의 영화"
        subtitle="Relative Movies"
        type="relative"
        movies={mockMovies}
        loading={false}
      />
    </>
  );
}
