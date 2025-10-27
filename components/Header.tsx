"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { User, LogIn, EditIcon, LogOut } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/api/useAuth.store";

const Header = () => {
  const router = useRouter();
  const { user, logout } = useAuth();
  const [isUserPanelOpen, setIsUserPanelOpen] = useState(false);

  const handleLogout = () => {
    logout();
    setIsUserPanelOpen(false);
    router.push("/");
  };

  return (
    <header className="w-full sticky top-0 z-50 bg-[#16181C] backdrop-blur-md border-b border-white/10">
      <div className="w-full md:flex-start h-20 flex justify-between items-center px-12 sm:px-16 md:px-24">
        <div
          className="w-1/3 hidden md:flex items-center gap-3 flex-shrink-0 transition-all duration-300 cursor-pointer"
          onClick={() => router.push("/")}
        >
          <Image
            src="/renderx-logo.png"
            alt="BitStorage"
            width={100}
            height={100}
            className="rounded-md"
          />
        </div>

        <nav className="w-1/3 flex justify-center flex-grow gap-8 text-[#9CA3AF] font-light">
          <Link
            href="/"
            className="hover:text-white transition-colors duration-300"
          >
            Home
          </Link>
          <Link
            href="/shop"
            className="hover:text-white transition-colors duration-300"
          >
            Shop
          </Link>
          <Link
            href="/aboutus"
            className="hover:text-white transition-colors duration-300 whitespace-nowrap"
          >
            About Us
          </Link>
          <Link
            href="/contact"
            className="hover:text-white transition-colors duration-300"
          >
            Contact
          </Link>
        </nav>

        <div className="w-1/3 flex justify-end items-center relative">
          {user && (
            <p className="flex items-center justify-center gap-2 text-white px-4 py-2  text-center">
              {user.username}
            </p>
          )}
          <div
            className="w-[30px] h-[30px] rounded-md cursor-pointer"
            onClick={() => setIsUserPanelOpen(!isUserPanelOpen)}
          >
            <User className="w-full h-full text-[#9CA3AF] hover:text-white transition-colors duration-300" />
          </div>

          {isUserPanelOpen && (
            <div className="absolute right-0 top-10 w-40 bg-[#1E2025] rounded-md shadow-lg transition-all duration-300 overflow-hidden flex flex-col items-center">
              {user ? (
                <>
                  {/* <p className="flex items-center justify-center gap-2 text-white px-4 py-2 hover:bg-white/10 cursor-pointer w-full text-center border-b border-gray-500">
                    Zalogowano jako {user.username}
                  </p> */}
                  <p
                    className="flex items-center justify-center gap-2 text-white px-4 py-2 hover:bg-white/10 cursor-pointer w-full text-center"
                    onClick={handleLogout}
                  >
                    <LogOut className="w-5 h-5" /> Logout
                  </p>
                </>
              ) : (
                <>
                  <p
                    className="flex items-center justify-center gap-2 text-white px-4 py-2 hover:bg-white/10 cursor-pointer w-full text-center border-b border-gray-500"
                    onClick={() => router.push("/login")}
                  >
                    <LogIn className="w-5 h-5" /> Login
                  </p>
                  <p
                    className="flex items-center justify-center gap-2 text-white px-4 py-2 hover:bg-white/10 cursor-pointer w-full text-center"
                    onClick={() => router.push("/register")}
                  >
                    <EditIcon className="w-5 h-5 " /> Register
                  </p>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
