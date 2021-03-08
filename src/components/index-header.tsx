import React, { FC } from 'react'
import { gradient } from '../common-styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faLinkedin, faGithub, IconDefinition } from '@fortawesome/free-brands-svg-icons'

const LinkIcon: FC<{ icon: IconDefinition, href: string }> = (props) => (
  <div className="cursor-pointer transition-colors duration-300 hover:bg-dark-gray flex h-12 w-12 items-center justify-center ">
    <a href={props.href} rel="noopener noreferrer" target="__blank">
      <FontAwesomeIcon
        className="fill-current"
        size="lg"
        icon={props.icon}
      />
    </a>
  </div>
)

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

      <div className="h-16"></div>

      <div className="text-gray-200 flex space-x-4 -ml-4">
        <LinkIcon href="https://www.linkedin.com/in/alessandro-scandone-035b241a2/" icon={faLinkedin}/>
        <LinkIcon href="https://github.com/ascandone" icon={faGithub}/>
        <LinkIcon href="https://www.instagram.com/alescandone/" icon={faInstagram}/>
      </div>
    </div>
  )
}

export default IndexHeader
