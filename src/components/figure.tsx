import React, { FC } from 'react'

const Figure: FC<{ descr: string }> = ({ children, descr }) => (
  <figure className="">
    {children}
    <figcaption className="-mt-6 text-black font-bold text-sm mb-10 ">
      {descr}
    </figcaption>
  </figure>
)

export default Figure
