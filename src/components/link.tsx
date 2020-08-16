import { Link as GatbsyLink } from 'gatsby'
import React, { FC } from 'react'

interface LinkProps {
  to: string
  dark?: boolean
}

const Link: FC<LinkProps> = ({ to, children, dark = false }) => (
  <GatbsyLink
    to={to}
    className={
      'transition-all duration-200 ' +
      (dark ? 'underline-gradient-dark' : 'underline-gradient')
    }
  >
    {children}
  </GatbsyLink>
)

export default Link
