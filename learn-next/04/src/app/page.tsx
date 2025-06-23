import sample from "@/assets/images/building.jpg";
import Image from "next/image";
export const metadata = {
  title: "Home",
};

export default async function page() {
  return (
    <>
      <h1 className={"font-pen"}>Home</h1>
      <h1 className="font-doldam">혼저옵서예</h1>
      <Image src={sample} alt={"sample"} priority={false} />
      <div className="relative w-40 h-40">
        <Image
          src="https://cdn.pixabay.com/photo/2025/05/18/14/05/congratulations-9607355_1280.png"
          alt="우주인"
          fill
          sizes="400px"
          priority
        />
      </div>
    </>
  );
}
