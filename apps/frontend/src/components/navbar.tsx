import { Link } from '@tanstack/react-router'
import './navbar.css'
import { useState } from 'react'
import { AuthModal } from './Login/LoginForm.tsx'
import { useAuthStore } from '#/utils/auth-store.ts'
import { useAuth } from '#/utils/auth-helpers.ts'

const getNavItems = () => {
  return [
    { name: 'Home', link: '/' },
    { name: 'Community', link: '/community' },
    { name: 'Listings', link: '/listings' },
    { name: 'My Profile', link: '/myProfile' },
  ]
}

export function Navbar() {
  const navItems = getNavItems()
  const [isAuthOpen, setIsAuthOpen] = useState(false)
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated)
  const { logout } = useAuth()

  return (
    <div className="absolute top-[5vh] left-0 w-full z-20 flex justify-center">
      {/* Logo (does NOT affect centering) */}
      <div className="absolute left-10 top-1/2 -translate-y-1/2">
        <Link
          to="/"
          className="text-[#edcabc]  hover:opacity-80 transition text-3xl font-extrabold tracking-tight border-2 border-[#edcabc] rounded-lg px-4 py-1"
        >
          One Man's Trash
        </Link>
      </div>

      {/* Centered Nav */}
      <nav className="flex items-center justify-between px-8 py-3 rounded-lg bg-white shadow-md text-[#6c3b27d7] min-w-1/2 z-25">
        {navItems.map((item, index) => (
          <Link
            to={item.link}
            key={index}
            className="hover:bg-[#fefae0] rounded-full px-6 py-2 transition-all duration-200"
          >
            {item.name}
          </Link>
        ))}
        <button
          onClick={() => (isAuthenticated ? logout() : setIsAuthOpen(true))}
          className="bg-[#6c3b27] text-white px-6 py-2 rounded-full shadow-md hover:bg-[#5a2f1f] transition"
        >
          {isAuthenticated ? 'Logout' : 'Login'}
        </button>
        <AuthModal
          isOpen={isAuthOpen && !isAuthenticated}
          onClose={() => setIsAuthOpen(false)}
        />
      </nav>
    </div>
  )
}
