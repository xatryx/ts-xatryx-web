import Head from 'next/head'
import { GetStaticProps } from 'next'
import Link from 'next/link'

export default function Home(): React.ReactElement {
  return (
    <div>
      <Head>
        <title>Xatryx</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="pt-40 h-9/10">
        <div className="max-w-xl">
          <h1 className="font-bold text-4xl mt-1">Xatryx Teams</h1>
          <p className="text-xl mt-4">
            We are focusing building solution to protect women & child
          </p>
        </div>
      </header>
      <main className="h-9/10  items-center">
        <h1 className="font-semibold text-3xl py-5 text-center">Our Teams</h1>
        <div className="grid gap-5 mt-5">
          <article>
            <h1>Nama</h1>
            <p>Software Engineering</p>
          </article>
        </div>
      </main>
    </div>
  )
}
