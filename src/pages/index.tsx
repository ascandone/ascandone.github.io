import React, { FC } from 'react'
import Layout from '../components/layout'
import Header from '../components/index-header'
import { GitHub, ArrowUpRight } from 'react-feather'
import { link } from '../common-styles'

const targetBlank = { target: '_blank', rel: 'noopener noreferrer' }

const Section: FC<{ head: string; href?: string }> = ({
  head,
  href,
  children,
}) => (
  <article>
    <h2 className="text-black font-bold mb-2">
      {href == null ? (
        head
      ) : (
        <div className="flex items-end">
          {/* <Link to={href}>{head}</Link> */}
          <ArrowUpRight className="h-5" />
        </div>
      )}
    </h2>
    <div className="text-gray-600">{children}</div>
  </article>
)

const categories = [
  {
    label: 'ui frameworks',
    children: ['react', 'elm', 'flutter', 'lit-element'],
  },
  {
    label: 'css',
    children: ['tailwind', 'sass'],
  },
  {
    label: 'design',
    children: ['framer', 'adobe xd'],
  },
  {
    label: 'langs',
    children: ['typescript', 'reasonml', 'haskell', 'clojure'],
  },
  {
    label: 'build tools',
    children: ['gatsby', 'parcel', 'snowpack'],
  },
  {
    label: 'state management',
    children: ['redux'],
  },
  {
    label: 'coding style',
    children: ['prettier'],
  },
]

const Index: FC = () => (
  <Layout header={<Header />}>
    <main className="max-w-md mx-auto space-y-10 leading-relaxed">
      <Section head="About">
        <div className="space-y-3">
          <p>
            I'm a 24 years-old computer science student at Sapienza university
            in Rome. I like{' '}
            <a
              className={link}
              href="https://open.spotify.com/user/alescandone?si=MIUONN0PQX-oCnh_GgoT4A"
              {...targetBlank}
            >
              music
            </a>
            , cats, typography, web design, and (duh) computer science. I'm
            particularly interested in algorithms study, language theory and
            functional paradigm.
          </p>
          <p>
            My main focus is to build <b>clean</b> yet <b>usable</b> user
            experiences with great focus on details.
            <br />
            The use of expressive and powerful type systems allows me to build{' '}
            <b>reliable</b> apps with no runtime errors in practice, and gives
            me the confidence to <b>quickly iterate</b> cycles of refactoring.
          </p>
        </div>
      </Section>
      {/* <Section head="Blog" href="#">
        <ul>
          <li>
            <Link to="/blog/test/">Learn React.js in 15 minutes</Link>
          </li>
          <li>
            <Link to="/blog/test/">
              Making impossible states impossible with typescript
            </Link>
          </li>
        </ul>
      </Section> */}
      <Section head="Selected tools and technologies">
        {categories
          .map(({ label, children }) => (
            <span className="whitespace-no-wrap">
              <span className="text-gray-400 font-light">{label}</span>{' '}
              <span className="whitespace-normal">{children.join(', ')}</span>
            </span>
          ))
          .reduce((acc, x) => (
            <>
              {acc} • {x}
            </>
          ))}
      </Section>
      <Section head="Projects">
        <ul>
          <li>
            <a
              className={link}
              href="https://studiodentisticoandreinafraioli.it"
              {...targetBlank}
            >
              studiodentisticoandreinafraioli.it
            </a>
          </li>
          <li>
            <a
              className={link}
              href="https://lambda-calculus-interpreter.netlify.app"
              {...targetBlank}
            >
              online λ-calculus interpreter
            </a>
          </li>
          <li>
            <span className="text-gray-400 font-semibold">
              more coming soon...
            </span>
          </li>
        </ul>
      </Section>
      <Section head="Contact">
        <ul>
          <li>Alessandro Scandone</li>
          <li>
            <a className={link} href="mailto:alescandone@gmail.com">
              alescandone@gmail.com
            </a>
          </li>
          <li className="space-x-3 flex items-center mt-1">
            <a href="https://github.com/ascandone" {...targetBlank}>
              <GitHub className="h-5" />
            </a>

            {/* <Linkedin className="h-5" />

            <Instagram className="h-5" /> */}
            {/* HACK  */}
            {/* <span className="text-transparent">.</span> */}
          </li>
        </ul>
      </Section>
    </main>
  </Layout>
)

export default Index
