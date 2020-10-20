import React, { FC } from 'react'
import Link from './link'
import Chip from '../components/chip'

import { ArrowUpLeft, ArrowUpRight } from 'react-feather'

const iconBackDark = (
  <span className="flex items-center">
    <Link dark to="/">
      <span className="font-semibold">Home</span>
    </Link>
    <ArrowUpRight className="h-5" />
  </span>
)

interface HeaderProps {
  subhead: string
  title: string
  tags?: string[]
  date?: string
  description?: string
}

const Header: FC<HeaderProps> = ({
  title,
  subhead,
  date,
  tags = [],
  description,
}) => (
  <>
    <div className="text-4xl font-serif font-extrabold leading-tight antialiased">
      <h5 className="text-gray-500 ">{subhead}</h5>
      <h2 className="text-white">{title}</h2>
      <div className="mt-3"></div>
    </div>

    {date == null ? (
      <div className="mt-10"></div>
    ) : (
      <h6 className="uppercase text-sm font-light tracking-wide text-gray-300">
        {date}
      </h6>
    )}

    <div className="mt-4"></div>

    {description == null ? null : (
      <p className="text-gray-300">{description}</p>
    )}

    <div className="flex justify-between mt-10">
      {tags.length === 0 ? null : (
        <div className="flex flex-wrap">
          {tags.map((tag, i) => (
            <div key={i} className="mr-4 mb-3">
              <Chip dark>{tag}</Chip>
            </div>
          ))}
        </div>
      )}
      <div className="mr-8"></div>
      <span className="text-cool-gray-300">{iconBackDark}</span>
    </div>
  </>
)

export default Header
