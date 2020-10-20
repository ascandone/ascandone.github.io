import React, { FC } from 'react'
import { gradient } from '../common-styles'

const IndexHeader: FC = () => {
  const keywordClass =
    'text-darkest-gray -mx-1 px-1 animate-gradient ' + gradient

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-5xl font-extrabold text-white leading-snug font-serif">
        Hi, I'm Alessandro. <br />I{' '}
        <span className="appear">
          <span className={`bg-gradient-45 animate-gradient-a ${keywordClass}`}>
            design
          </span>{' '}
          and{' '}
          <span
            className={`bg-gradient-150 animate-gradient-b ${keywordClass}`}
          >
            build
          </span>
          * things.
        </span>
      </h1>

      <p className="mt-6 text-sm text-gray-200 font-light">
        *Also, I usually break them
      </p>
    </div>
  )
}

export default IndexHeader
