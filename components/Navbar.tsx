import React from "react";
import Link from "next/link";
import { clsx } from "clsx";

interface NavbarProps {
  position?: string;
  bgColor?: string;
  backdropBlur?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({
  position = "fixed",
  bgColor = "bg-gray-800",
  backdropBlur = false,
}) => {
  return (
    <nav
      className={clsx(
        position,
        bgColor,
        backdropBlur && "backdrop-blur-md",
        "fixed top-0 left-0 w-full shadow-md z-50"
      )}
    >
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-xl font-bold text-white">
          {" "}
          <Link href="/">MotorMate</Link>
        </div>
        <ul className="flex space-x-4 text-white">
          {" "}
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/products">Products</Link>
          </li>
          <li>
            <Link href="/appointments">Appointments</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
