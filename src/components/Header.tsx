import { useState } from 'react'
import { ThemeSwitcher } from '@/components/ThemeSwitcher'
import { NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  const baseLinkStyles =
    'block px-4 py-2 rounded-md text-sm font-medium transition-colors'

  const linkInactive =
    'text-muted-foreground hover:text-foreground hover:bg-muted'

  const linkActive = 'text-primary bg-muted'

  const links = [
    { name: 'Products', path: '/products' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <header className="w-full border-b border-border bg-background">
      <div className="container mx-auto flex items-center justify-between px-4 py-3 lg:min-w-2/3">
        {/* Logo */}
        <NavLink to="/" className="text-xl font-bold text-primary">
          MyCompany
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex">
          <div className=" md:flex gap-2 items-center pr-12">
            {links.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `${baseLinkStyles} ${isActive ? linkActive : linkInactive}`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>
          <ThemeSwitcher />
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            className="p-2 rounded hover:bg-muted"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border px-4 pb-4">
          {links.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `${baseLinkStyles} ${isActive ? linkActive : linkInactive}`
              }
              onClick={() => setMobileOpen(false)} // close menu on click
            >
              {item.name}
            </NavLink>
          ))}
          {/* Mobile Theme Switcher */}
          <div className="mt-4">
            <ThemeSwitcher />
          </div>
        </div>
      )}
    </header>
  )
}
