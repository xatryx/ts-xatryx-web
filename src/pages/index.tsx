import Head from 'next/head'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { GetStaticProps } from 'next'
import Link from 'next/link'

const orgMembers = [
  {fullName: "Jerens Soehardi Lensun", memberRole: "Roles To be Updated"},
  {fullName: "Muhammad Hanif Azhary", memberRole: "Roles To be Updated"},
  {fullName: "Maulina Damayani", memberRole: "Roles To be Updated"},
  {fullName: "Nadia Indarwati", memberRole: "Roles To be Updated"},
  {fullName: "Toyib Nurseha", memberRole: "Roles To be Updated"},
  {fullName: "Ronan Harris", memberRole: "Roles To be Updated"},
]

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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-5">
          {
            orgMembers.map(item => (
              <article className="mx-auto" key={item.fullName}>
                <img src="https://fakeimg.pl/128x128/111111/dddddd/?text=128x128&retina=1" alt="aHuman" className="rounded-full"/>
                <div className="mt-5 text-center">
                  <h1>{item.fullName}</h1>
                  <p>{item.memberRole}</p>
                </div>
              </article>
            ))
          }
        </div>
      </main>
    </div>
  )
}
