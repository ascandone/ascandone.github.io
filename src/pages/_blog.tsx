import React, { FC } from 'react'
import { make as Layout } from '../components/Layout.gen'
import IndexHeader from '../components/index-header'
import {make as Chip} from '../components/Chip.gen'

interface ArticleArgs {}
const _Article: FC<ArticleArgs> = () => (
  <div>
    <div className="flex flex-col lg:flex-row">
      <div className="flex justify-between lg:flex-col">
        <div className="text-gray-700 w-32 lg:self-end lg:text-right">
          27 Aug
        </div>
        <div className="mt-2"></div>
        <div className="flex flex-wrap justify-end w-56">
          {['redux', 'rxjs', 'typescript', 'go'].map((s) => (
            <div className="ml-4 mt-1">
              <Chip>{s}</Chip>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 lg:mr-10"></div>

      <div>
        <h2 className="text-gray-900 text-lg font-semibold">
          Making impossible state impossible with typescript
        </h2>
        <p className="text-gray-500 text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut autem
          itaque rerum ipsum odit pariatur enim quisquam
        </p>
      </div>
    </div>
  </div>
)

const Article: FC<ArticleArgs> = () => (
  <div>
    <div className="flex flex-col lg:flex-row">
      <div className="flex justify-between lg:flex-col">
        <div className="text-gray-700 w-32 lg:self-end lg:text-right">
          27 Aug
        </div>
        <div className="mt-2"></div>
        <div className="flex flex-wrap justify-end w-56">
          {['redux', 'rxjs', 'typescript', 'go'].map((s) => (
            <div className="ml-4 mt-1">
              <Chip>{s}</Chip>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 lg:mr-10"></div>

      <div>
        <h2 className="text-gray-900 text-lg font-semibold">
          Making impossible state impossible with typescript
        </h2>
        <p className="text-gray-500 text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut autem
          itaque rerum ipsum odit pariatur enim quisquam
        </p>
      </div>
    </div>
  </div>
)
const Index: FC = () => (
  <Layout header={<IndexHeader />}>
    <main className="max-w-md md:max-w-lg  mx-auto leading-relaxed">
      <h3>Home / Blog</h3>

      <h1 className="text-4xl mt-16 mb-6">2020</h1>

      <div className="space-y-10">
        {Array(4)
          .fill(null)
          .map((_) => (
            <div className="mb-20">
              <Article />
            </div>
          ))}
      </div>

      <h1 className="text-4xl mt-16 mb-6">2019</h1>

      <div className="space-y-10">
        {Array(4)
          .fill(null)
          .map((_) => (
            <Article />
          ))}
      </div>
    </main>
  </Layout>
)

export default Index
