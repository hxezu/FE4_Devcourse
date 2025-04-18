export default function Justagram() {
  const images = [
    "/src/images/bridge.jpg",
    "/src/images/building.jpg",
    "/src/images/eiffel.jpg",
    "/src/images/eiffel2.jpg",
    "/src/images/paris.jpg",
  ];
  return (
    <div className="w-full max-w-4xl mx-auto py-6 px-4">
      <header className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">JUSTAGRAM</h1>
        {/* More Buttons */}
      </header>
      <div className="grid grid-cols-3 gap-4">
        {images.map((imgSrc, i) => (
          <a key={i} className="group" href="#">
            <img
              src={imgSrc}
              width="400"
              height="400"
              alt={`Photo ${i + 1}`}
              className="w-full h-full object-cover rounded-lg group-hover:opacity-80 transition-opacity"
              style={{ aspectRatio: "400 / 400", objectFit: "cover" }}
            />
          </a>
        ))}
      </div>
    </div>
  );
}
