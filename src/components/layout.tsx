import React, { FC } from 'react'
import './layout.css'

interface LayoutProps {
  header: JSX.Element
}

const Layout: FC<LayoutProps> = ({ header, children }) => (
  <div className="bg-darkest-gray antialiased">
    <div className="flex flex-col md:flex-row">
      {/* left */}
      <div className="md:flex-1">{header}</div>

      {/* right */}
      <div className="rounded-t-lg md:rounded-none flex-1 py-10 bg-white _w-full md:flex min-h-screen">
        <div className="px-5 lg:px-8 xl:px-16">{children}</div>
      </div>
    </div>
  </div>
)

export default Layout
