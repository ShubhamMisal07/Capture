import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">Capture Your Story <p className="text-sm">Competition - Yashuss Unlimited</p></h1>
        
        <button
          className="md:hidden text-gray-600"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

        <nav className="hidden md:flex space-x-8 font-bold text-black-700">
          <Link to="/">Collage</Link>
          <Link to="/photos">Original Photos</Link>
          <Link to="/details">Details</Link>
        </nav>
      </div>

      {open && (
        <nav className="md:hidden bg-white border-t">
          <ul className="flex flex-col items-center space-y-4 py-4">
            <Link onClick={() => setOpen(false)} to="/">Collage</Link>
            <Link onClick={() => setOpen(false)} to="/photos">Original Photos</Link>
            <Link onClick={() => setOpen(false)} to="/details">Details</Link>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
