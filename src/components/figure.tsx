import React, { FC } from 'react'

const Figure: FC<{ descr: string }> = ({ children, descr }) => (
  <span className="my-6 -mx-5 sm:mx-auto block">
    {children}
    <span className="px-4 sm:px-0">
      <span className="pt-2 text-black font-bold text-sm">{descr}</span>
    </span>
  </span>
)

export default Figure
