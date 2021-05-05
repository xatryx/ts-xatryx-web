import Link from 'next/link'
import { useEffect, useState } from 'react'
import { ThemeSwitcher } from './ThemeSwitcher'

export const Navbar = (): React.ReactElement => {

  const [showShadow, setShowShadow] = useState(false)
  const toggleShowShadow = () => window.scrollY > 32 ? setShowShadow(true) : setShowShadow(false)

  useEffect(() => {
    window.addEventListener("scroll", toggleShowShadow)
  })

  return (
    <>
      <div className={"fixed bg-opacity-70 dark:bg-opacity-30 bg-white backdrop-filter backdrop-blur-lg inset-x-0 top-0 " + (showShadow ? " shadow-lg" : " shadow-none")}>
        <div className="container mx-auto">
          <nav className="flex p-3 justify-between place-items-center">
            <Link href="/">
              <a className="font-bold text-lg">Xatryx</a>
            </Link>
            <ThemeSwitcher />
          </nav>
        </div>
      </div>
    </>
  )
}
