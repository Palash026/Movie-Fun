import React from "react";

export default function Navbar() {
  return (
    <nav className="p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <img
            src="https://blog.tubikstudio.com/wp-content/uploads/2017/10/logo_animation_tubik_design-1.gif"
            alt="Logo"
            className="h-10"
          />
          <h1 className="text-lg text-blue-500 font-bold">Movie Addict</h1>
        </div>

        <div className="hidden sm:block">
          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-2 rounded-lg bg-gray-200 text-blue-600 focus:outline-none"
          />
        </div>
      </div>
    </nav>
  );
}
