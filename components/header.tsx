"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Gamepad2 } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-gray-900/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center">
            <Gamepad2 className="h-6 w-6 mr-2 text-yellow-400" />
            <span className="text-xl font-bold text-yellow-400">GameServers</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-300 hover:text-white transition-colors">
              Home
            </Link>
            <Link href="#games" className="text-gray-300 hover:text-white transition-colors">
              Games
            </Link>
            <Link href="#" className="text-gray-300 hover:text-white transition-colors">
              Features
            </Link>
            <Link href="#" className="text-gray-300 hover:text-white transition-colors">
              Support
            </Link>
            <Link
              href="#"
              className="px-4 py-2 text-sm font-medium text-black bg-yellow-500 rounded-lg hover:bg-yellow-600 transition-colors"
            >
              Client Area
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-300 hover:text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900 border-t border-gray-800">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <Link
              href="/"
              className="block text-gray-300 hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="#games"
              className="block text-gray-300 hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Games
            </Link>
            <Link
              href="#"
              className="block text-gray-300 hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              href="#"
              className="block text-gray-300 hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Support
            </Link>
            <Link
              href="#"
              className="block px-4 py-2 text-sm font-medium text-black bg-yellow-500 rounded-lg hover:bg-yellow-600 transition-colors w-full text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Client Area
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

