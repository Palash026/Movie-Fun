import Link from "next/link";
import Search from "./Search";

export default function Navbar() {
  
  return (
    <nav className="w-full fixed z-10 bg-white">
      <div className="mx-auto max-w-4xl px-2 py-4 md:flex items-center justify-between">
        <div className="flex items-center sm:justify-center">
          <img
            src="https://blog.tubikstudio.com/wp-content/uploads/2017/10/logo_animation_tubik_design-1.gif"
            alt="Logo"
            className="h-10"
          />
          <Link href="/" className="text-blue-600 text-xl font-semibold">Movie Addict</Link>
        </div>

        <Search/>
      </div>
    </nav>
  );
}
