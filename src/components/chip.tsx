import React, { FC } from 'react'

const Chip: FC = ({ children }) => (
  <span className="rounded p-px gradient-bg-static">
    <span className="rounded bg-darkest-gray px-2">
      <span className="text-xs font-mono text-gray-200 antialiased leading-none">
        {children}
      </span>
    </span>
  </span>
)

export default Chip
