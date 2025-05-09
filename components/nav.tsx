'use client'
import Link from 'next/link'
import ThemeToggle from './theme'

const navItems = {
  '/': {
    name: 'home',
  },
  '/blog': {
    name: 'blog',
  },
  '/study': {
    name: 'study',
  },
  '/resume': {
    name: 'resume',
  },
  'https://github.com/alissa1228': {
    name: 'github',
  },
}

export function Navbar() {
  return (
    <aside className="border-black border-b-2 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="bg-[#ffe15f] flex flex-row items-center relative fade md:overflow-auto scroll-pr-6 py-2 px-1 md:relative"
          id="nav"
        >
          <div className="flex flex-row space-x-0 pr-10 ">
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  className="transition-all hover:font-bold hover:transition-all dark:hover:text-neutral-200 flex align-middle relative py-1 px-2"
                >
                  {name}
                </Link>
              )
            })}
          </div>
          {/* <div className='ml-auto'>
            <ThemeToggle />
          </div> */}
        </nav>
      </div>
    </aside>
  )
}
