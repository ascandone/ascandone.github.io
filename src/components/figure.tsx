import React, { FC } from 'react'

const Figure: FC<{ descr: string; small?: boolean }> = ({
  children,
  descr,
  small = false,
}) => (
  <figure className="">
    {children}
    <figcaption
      className={
        ' -mt-6 text-sm mb-10 ' +
        (small ? 'text-gray-600 px-2' : 'text-black font-bold ')
      }
    >
      {descr}
    </figcaption>
  </figure>
)

export default Figure
