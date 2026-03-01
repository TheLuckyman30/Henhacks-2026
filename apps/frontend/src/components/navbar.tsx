import { Link } from '@tanstack/react-router'
import './navbar.css'

const getNavItems = () => {
  return [
    { name: 'Home', link: '/' },
    { name: 'Community', link: '/community' },
    { name: 'Listings', link: '/listings' },
    { name: 'My Profile', link: '/myProfile' },
    { name: 'Login', link: '/' },
  ]
}

export function Navbar() {
  const navItems = getNavItems()

  return (
    <div className="absolute top-[5vh] left-0 w-full max-h-15 flex justify-center z-20">
      <nav className="flex items-center justify-between px-8 py-3 rounded-lg bg-white shadow-md text-[#6c3b27d7] min-w-1/2 z-25">
        {navItems.map((item, index) => (
          <Link
            to={item.link}
            className="hover:bg-sky-100 rounded-md px-5 py-2 transition-all duration-200 z-25"
            key={index}
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </div>
  )
}
