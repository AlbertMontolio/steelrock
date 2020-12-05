import React from 'react'
import { useMediaQuery } from 'react-responsive'

import { LeftNavbar } from '../left-navbar/LeftNavbar'
import { TopNavbar } from '../top-navbar/TopNavbar'

export const Navbar = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  })

  return (
    <div>
      {isDesktopOrLaptop ? <TopNavbar /> : <LeftNavbar />}
    </div>
  )
}
