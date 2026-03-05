import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div>
      <header className="border-b-2 border-gray-500 py-4 flex justify-between px-4">
        <div>
          <Link href="/" className="font-bold">
            🚆This is the Dev story
          </Link>
        </div>
        <div className="space-x-10">
          <Link href="/">Home</Link>
          <Link href="/about">About Us</Link>
          <Link href="/tutorials">Tutorials</Link>
          <Link href="/stories">Stories</Link>
          <Link href="/login">Login</Link>
          <Link href="/register">Register</Link>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
