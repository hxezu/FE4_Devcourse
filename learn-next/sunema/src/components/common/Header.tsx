"use client";

import Image from "next/image";
import Link from "next/link";
import { home, live, popular, search, video } from "@/assets/icons";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();
  const [isSearch, setIsSearch] = useState(false);
  return (
    <>
      <header className="header">
        <Link href="/">
          <h1 className="header__logo">Wave</h1>
        </Link>
        <ul className="header__navi">
          <li>
            <Link href="/movie/now_playing">상영중</Link>
          </li>
          <li>
            <Link href="/movie/popular">인기작</Link>
          </li>
          <li>
            <Link href="/movie/upcoming">개봉예정</Link>
          </li>
        </ul>
        <div className="header-search">
          <input
            type="text"
            className="header-search__input"
            placeholder="제목으로 찾아보세요."
          />
          <span className="material-symbols-outlined icon"> search </span>
        </div>
      </header>
      <nav className="navigator">
        <ul className="navigator-list">
          <li className="navigator-list__item" onClick={() => router.push("/")}>
            <Image
              width={20}
              height={20}
              src={home}
              alt=""
              className="navigator-list__icon"
            />
            <strong className="navigator-list__txt">메인</strong>
          </li>
          <li
            className="navigator-list__item"
            onClick={() => router.push("/movie/now_playing")}
          >
            <Image
              width={20}
              height={20}
              src={live}
              alt=""
              className="navigator-list__icon"
            />
            <strong className="navigator-list__txt">상영중</strong>
          </li>
          <li
            className="navigator-list__item"
            onClick={() => router.push("/movie/popular")}
          >
            <Image
              width={20}
              height={20}
              src={popular}
              alt=""
              className="navigator-list__icon"
            />
            <strong className="navigator-list__txt">인기작</strong>
          </li>

          <li
            className="navigator-list__item"
            onClick={() => router.push("/movie/upcoming")}
          >
            <Image
              width={20}
              height={20}
              src={video}
              alt=""
              className="navigator-list__icon"
            />
            <strong className="navigator-list__txt">개봉예정</strong>
          </li>
          <li
            className="navigator-list__item"
            onClick={() => setIsSearch(true)}
          >
            <Image
              width={20}
              height={20}
              src={search}
              alt=""
              className="navigator-list__icon"
            />
            <strong className="navigator-list__txt">검색</strong>
          </li>
        </ul>
      </nav>
      {isSearch && (
        <section className="search-box">
          <div className="search-input">
            <div className="search-wrap">
              <button onClick={() => setIsSearch(false)}>x</button>
              <input
                type="text"
                placeholder="영화 제목을 입력하세요"
                autoComplete="off"
              />
              <span className="material-symbols-outlined icon"> search </span>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
