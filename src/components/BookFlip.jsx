import { useState } from "react";

const BookFlip = ({ photos }) => {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((index + 1) % photos.length);
  const prev = () => setIndex((index - 1 + photos.length) % photos.length);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-blue-500 to-white overflow-hidden">
      <div className="relative w-70 h-96 md:w-[500px] md:h-[600px] shadow-2xl border-4 border-blue rounded-lg overflow-hidden bg-gray-100">
        <img
          src={photos[index].src}
          alt="photo"
          className="w-full h-full object-cover transition-transform duration-500"
        />
      </div>

      <div className="mt-6 flex space-x-6">
        <button onClick={prev} className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
          ◀ Prev
        </button>
        <button onClick={next} className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
          Next ▶
        </button>
      </div>
    </div>
  );
};

export default BookFlip;
