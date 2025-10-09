"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
  return (
    <header className="w-full fixed top-0 z-50 bg-[#16181C] backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl h-20 mx-auto w-full flex justify-between items-center">
        
        <div className="w-1/3 flex items-center gap-3 flex-shrink-0 transition-all duration-300">
          <Image
            src="/logo.png"
            alt="BitStorage"
            width={180}
            height={180}
            className="rounded-md"
          />
        </div>

        <nav className="w-1/3 flex justify-center flex-grow gap-8 text-[#9CA3AF] font-light">
          <Link href="/" className="hover:text-white transition-colors duration-300">Home</Link>
          <Link href="/shop" className="hover:text-white transition-colors duration-300">Shop</Link>
          <Link href="/aboutus" className="hover:text-white transition-colors duration-300 whitespace-nowrap">About Us</Link>
          <Link href="/contact" className="hover:text-white transition-colors duration-300">Contact</Link>
        </nav>

        <div className="w-1/3"></div>
      </div>
    </header>
  )
}

export default Header
