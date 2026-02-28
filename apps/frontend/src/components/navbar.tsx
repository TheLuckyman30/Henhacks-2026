import { Link } from '@tanstack/react-router'
import './navbar.css'

const getNavItems = () => {
  return [{ name: 'Home', link: '/' }]
}

export function Navbar() {
  const navItems = getNavItems()

  return (
    <div className="flex items-center justify-between w-full absolute mt-[5vh] pl-[8vh] z-20">
      <div className="absolute left-[50%] gap-[5vw] rounded-[90vh] bg-white min-h-[8vh] max-h-[10vh] min-w-[40%] max-w-[60%] items-center justify-center flex text-[#6c3b27d7] transform -translate-x-[50%]">
        {navItems.map((item, index) => (
          <Link
            to={item.link}
            className="bg-white hover:bg-sky-100 rounded-md p-5 buttonJump"
            key={index}
          >
            <span className="relative group-hover:text-white">{item.name}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}
