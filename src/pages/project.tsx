import React, { FC } from 'react'
import Layout from '../components/layout'
import Chip from '../components/chip'
import Link from '../components/link'
import { ArrowLeft } from 'react-feather'

const Header = () => (
  <div className="py-16 left-0 flex sm:justify-center items-center relative md:h-screen">
    <div className="md:max-w-sm px-5 md:fixed top-0 md:top-auto antialiased _w-full">
      <div className="text-4xl font-serif font-extrabold leading-tight">
        <h5 className="text-gray-500 ">Case study</h5>
        <h2 className="text-white">Instagram redesign</h2>
      </div>

      <div className="mt-6"></div>

      <div className="space-x-4">
        <Chip>framer</Chip>
        <Chip>rxjs</Chip>
      </div>

      <div className="flex justify-end">
        <span className="text-cool-gray-300">{iconBackDark}</span>
      </div>
    </div>
  </div>
)

const iconBackDark = (
  <header className="py-8">
    <a href="/" className="flex items-center">
      <ArrowLeft className="h-5" />
      <div className="mr-3"></div>
      <Link dark to="/">
        <span className="font-semibold">Back</span>
      </Link>
    </a>
  </header>
)

const iconBack = (
  <header className="py-8">
    <a href="/" className="flex items-center">
      <ArrowLeft className="h-5" />
      <div className="mr-3"></div>
      <Link to="/">Back</Link>
    </a>
  </header>
)

const Project: FC = () => (
  <Layout header={<Header />}>
    <div className="max-w-lg mx-auto">
      {/* <div className="pb-6">
          <h2 className="text-gray-900 tracking-wider font-bold text-xs uppercase">
            Project
          </h2>

          <h1 className="text-4xl font-bold text-black leading-tight mb-4">
            <span className="text-gray-400 text-2xl">Projects / </span>
            <br />
            Instagram redesign
          </h1>

          <span className="space-x-4">
            {['framer', 'rxjs'].map((label) => (
              <span className="bg-pink-50 text-pink-900 rounded px-3 py-1 text-xs leading-none">
                {label}
              </span>
            ))}
          </span>
        </div> */}

      {/* <!-- Prose --> */}
      <article className="text-gray-800 leading-relaxed">
        {/* <h2 className="text-black text-lg font-bold mb-4 mt-8">Case study</h2> */}
        <p className="mb-6">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis,
          assumenda repellendus. Odio, doloremque quisquam dolor ad ut facilis
          delectus tenetur dolores, dolorum sint fuga ipsam doloribus illo
          magnam distinctio omnis!
        </p>
        <p className="mb-6">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis,
          assumenda repellendus. Odio, doloremque quisquam dolor ad ut facilis
          delectus tenetur dolores, dolorum sint fuga ipsam doloribus illo
          magnam distinctio omnis!
        </p>
        <ul className="list-disc ml-4 space-y-1">
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            nesciunt dignissimos reiciendis cum natus saepe dolorum expedita,
            itaque rem laboriosam ipsa libero voluptatum voluptatibus! Inventore
            vero libero deleniti consectetur nihil?
          </li>
          <li>Second</li>
          <li>Hello</li>
        </ul>
        <figure className="my-6 -mx-5 sm:mx-auto">
          {/* <!-- src="https://cdn.dribbble.com/users/4859/screenshots/12124022/media/bdac18f3034799ba90fc4b228d8e08a2.png" --> */}
          <img
            className="md:rounded"
            src="https://images.unsplash.com/photo-1597594066353-4d76d7750083?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
            alt="#"
          />
          <div className="px-4 sm:px-0">
            <h4 className=" pt-2 text-black font-bold text-sm">User route</h4>
          </div>
        </figure>

        <p className="my-6">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis,
          assumenda repellendus. Odio, doloremque quisquam dolor ad ut facilis
          delectus tenetur dolores, dolorum sint fuga ipsam doloribus illo
          magnam distinctio omnis!
        </p>

        <pre className="overflow-x-auto text-sm bg-cool-gray-100 -mx-4 md:mx-auto md:rounded px-4 md:px-2 py-2 my-6">
          {`id :: a -> a
id x = x

main = id <$> print 42
`}
        </pre>

        <h2 className="text-gray-900 text-lg font-bold mb-4 mt-8">
          Conclusion
        </h2>
        <p className="my-6">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis,
          assumenda repellendus. Odio, doloremque quisquam dolor ad ut facilis
          delectus tenetur dolores, dolorum sint fuga ipsam doloribus illo
          magnam distinctio omnis!
        </p>

        {/* <!-- <div className="my-6"></div> --> */}
      </article>
      <hr className="-mx-4 md:mx-auto border-gray-200 mt-8" />
      <footer className="py-8 text-gray-500 text-sm flex justify-end">
        <div>
          Read also <Link to="">studioandreinafraioli.it</Link>
        </div>
      </footer>
    </div>
  </Layout>
)

export default Project
