import React, { FC } from 'react'
import { gradient } from '../common-styles'

const Chip: FC<{ dark?: boolean }> = ({ children, dark = false }) => (
  <span className={`rounded p-px ${gradient} bg-gradient-45`}>
    <span className={`rounded ${dark ? 'bg-darkest-gray' : 'bg-white'} px-2`}>
      <span className={`${dark ? 'text-gray-200' : 'text-gray-900'} text-xs font-mono antialiased leading-none`}>
        {children}
      </span>
    </span>
  </span>
)

export default Chip
