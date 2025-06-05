
import React from 'react';
import { Moon } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-blue-100 text-center rounded-t-2xl p-6 relative">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
        Explain It Like I’m 5
      </h1>
      <p className="text-sm md:text-base text-gray-600 mt-1">
        Turn any complex topic into child-level understanding.
      </p>

      {/* Dark mode toggle (static for now) */}
      <div className="absolute top-4 right-4">
        <button className="p-2 rounded-full hover:bg-blue-200">
          <Moon className="h-5 w-5 text-blue-600" />
        </button>
      </div>
    </header>
  );
};

export default Header;
