import travel from "./assets/images/travel.png";
import seoul from "./assets/images/seoul.jpg";
import london from "./assets/images/london.jpg";
import paris from "./assets/images/paris.jpg";
import newyork from "./assets/images/newyork.jpg";
import { useState } from "react";

const cityMap: { [key: string]: string } = {
  Seoul: seoul,
  London: london,
  Paris: paris,
  NewYork: newyork,
};

export default function App() {
  const [selectedCity, setSelectedCity] = useState("Seoul");

  return (
    <>
      <div className="absolute top-10 left-10 text-3xl cursor-pointer">
        <div className="light-icon fa-regular fa-sun"></div>
        <div className="dark-icon fa-regular fa-moon hidden"></div>
      </div>
      <div className="flex justify-center items-center min-h-screen">
        <div className="flex flex-col items-center gap-4  max-w-[500px]">
          <img src={travel} alt={"로고"} width={80} />
          <ul className="flex items-center antialiased justify-around w-full">
            {Object.keys(cityMap).map((city) => (
              <li key={city}>
                <a
                  href="#"
                  onClick={() => setSelectedCity(city)}
                  className={`${selectedCity === city ? "font-bold" : ""}`}
                >
                  {city}
                </a>
              </li>
            ))}
          </ul>
          <div>
            <img src={cityMap[selectedCity]} alt={"도시"} />
          </div>
        </div>
      </div>
    </>
  );
}
