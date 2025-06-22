import Image from "next/image";
import Home from "../../assets/icons/home.png";
import Live from "../../assets/icons/live.png";
import Popular from "../../assets/icons/popluar.png";
import Video from "../../assets/icons/video.png";
import Search from "../../assets/icons/search.png";
import Link from "next/link";

export default function Header() {
  return (
    <>
      <header className="header">
        <Link href="/">
          <h1 className="header__logo">Wave</h1>
        </Link>
        <ul className="header__navi">
          <li>
            <a href="/movie/now_playing">상영중</a>
          </li>
          <li>
            <a href="/movie/popular">인기작</a>
          </li>
          <li>
            <a href="/movie/upcoming">개봉예정</a>
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
          <li className="navigator-list__item">
            <Image
              width={20}
              height={20}
              src={Home}
              alt=""
              className="navigator-list__icon"
            />
            <strong className="navigator-list__txt">메인</strong>
          </li>
          <li className="navigator-list__item">
            <Image
              width={20}
              height={20}
              src={Live}
              alt=""
              className="navigator-list__icon"
            />
            <strong className="navigator-list__txt">상영중</strong>
          </li>
          <li className="navigator-list__item">
            <Image
              width={20}
              height={20}
              src={Popular}
              alt=""
              className="navigator-list__icon"
            />
            <strong className="navigator-list__txt">인기작</strong>
          </li>

          <li className="navigator-list__item">
            <Image
              width={20}
              height={20}
              src={Video}
              alt=""
              className="navigator-list__icon"
            />
            <strong className="navigator-list__txt">개봉예정</strong>
          </li>
          <li className="navigator-list__item">
            <Image
              width={20}
              height={20}
              src={Search}
              alt=""
              className="navigator-list__icon"
            />
            <strong className="navigator-list__txt">검색</strong>
          </li>
        </ul>
      </nav>
      <section className="search-box">
        <div className="search-input">
          <div className="search-wrap">
            <button>x</button>
            <input
              type="text"
              placeholder="영화 제목을 입력하세요"
              autoComplete="off"
            />
            <span className="material-symbols-outlined icon"> search </span>
          </div>
        </div>
      </section>
    </>
  );
}
