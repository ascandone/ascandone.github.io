import React, { FC } from 'react'

const Chip: FC = ({ children }) => (
  <span className="rounded p-px gradient-bg-static">
    <span className="rounded box-border bg-darkest-gray px-2">
      <span className="text-xs text-gray-200 font-semibold antialiased tracking-wider leading-none">
        {children}
      </span>
    </span>
  </span>
)

export default Chip
