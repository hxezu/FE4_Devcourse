"use client";
import Image from "next/image";
import Link from "next/link";
import "swiper/css";
import { SwiperSlide, Swiper } from "swiper/react";

export default function MovieList() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        breakpoints={{
          380: {
            slidesPerView: 2,
          },
          480: {
            slidesPerView: 3,
          },
          740: {
            slidesPerView: 4,
          },
          980: {
            slidesPerView: 5,
          },
        }}
      >
        <SwiperSlide>
          <div className="movie-list__item">
            <Link href={`/detail/1`}>
              <figure>
                <Image
                  src="https://image.tmdb.org/t/p/w300/tlcuhdNMKNGEVpGqBZrAaOOf1A6.jpg"
                  alt=""
                  fill
                />
              </figure>
              <div className="movie-list__txt">
                <div className="progress-circle p50">
                  <span>10%</span>
                  <div className="left-half-clipper">
                    <div className="first50-bar"></div>
                    <div className="value-bar"></div>
                  </div>
                </div>
                <strong className="movie-list__title">movie.title</strong>
                <span className="release_date">movie.date</span>
              </div>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="movie-list__item">
            <Link href={`/detail/1`}>
              <figure>
                <Image
                  src="https://image.tmdb.org/t/p/w300/tlcuhdNMKNGEVpGqBZrAaOOf1A6.jpg"
                  alt=""
                  fill
                />
              </figure>
              <div className="movie-list__txt">
                <div className="progress-circle p50">
                  <span>10%</span>
                  <div className="left-half-clipper">
                    <div className="first50-bar"></div>
                    <div className="value-bar"></div>
                  </div>
                </div>
                <strong className="movie-list__title">movie.title</strong>
                <span className="release_date">movie.date</span>
              </div>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="movie-list__item">
            <Link href={`/detail/1`}>
              <figure>
                <Image
                  src="https://image.tmdb.org/t/p/w300/tlcuhdNMKNGEVpGqBZrAaOOf1A6.jpg"
                  alt=""
                  fill
                />
              </figure>
              <div className="movie-list__txt">
                <div className="progress-circle p50">
                  <span>10%</span>
                  <div className="left-half-clipper">
                    <div className="first50-bar"></div>
                    <div className="value-bar"></div>
                  </div>
                </div>
                <strong className="movie-list__title">movie.title</strong>
                <span className="release_date">movie.date</span>
              </div>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="movie-list__item">
            <Link href={`/detail/1`}>
              <figure>
                <Image
                  src="https://image.tmdb.org/t/p/w300/tlcuhdNMKNGEVpGqBZrAaOOf1A6.jpg"
                  alt=""
                  fill
                />
              </figure>
              <div className="movie-list__txt">
                <div className="progress-circle p50">
                  <span>10%</span>
                  <div className="left-half-clipper">
                    <div className="first50-bar"></div>
                    <div className="value-bar"></div>
                  </div>
                </div>
                <strong className="movie-list__title">movie.title</strong>
                <span className="release_date">movie.date</span>
              </div>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="movie-list__item">
            <Link href={`/detail/1`}>
              <figure>
                <Image
                  src="https://image.tmdb.org/t/p/w300/tlcuhdNMKNGEVpGqBZrAaOOf1A6.jpg"
                  alt=""
                  fill
                />
              </figure>
              <div className="movie-list__txt">
                <div className="progress-circle p50">
                  <span>10%</span>
                  <div className="left-half-clipper">
                    <div className="first50-bar"></div>
                    <div className="value-bar"></div>
                  </div>
                </div>
                <strong className="movie-list__title">movie.title</strong>
                <span className="release_date">movie.date</span>
              </div>
            </Link>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
