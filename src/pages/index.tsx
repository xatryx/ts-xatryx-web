import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { SocialLinks } from '../components/SocialLinks'
import { GetStaticProps } from 'next'
import Link from 'next/link'

const teamMembers = [
  {fullName: "Jerens Soehardi Lensun", memberPicture: "https://fakeimg.pl/128x128/111111/dddddd/?text=128x128&retina=1", memberRole: "Roles To be Updated", github: "https://github.com/jerensl", twitter: "", linkedin: "https://www.linkedin.com/in/jerensl/"},
  {fullName: "Muhammad Hanif Azhary", memberPicture: "https://fakeimg.pl/128x128/111111/dddddd/?text=128x128&retina=1", memberRole: "Roles To be Updated", github: "https://github.com/nephertz", twitter: "", linkedin: "https://www.linkedin.com/in/mhanifazhary/"},
  {fullName: "Maulina Damayani", memberPicture: "https://fakeimg.pl/128x128/111111/dddddd/?text=128x128&retina=1", memberRole: "Roles To be Updated", github: "https://github.com/Maulina-beep", twitter: "", linkedin: "https://www.linkedin.com/in/maulina-damayani-a2561b207/"},
  {fullName: "Nadia Indarwati", memberPicture: "https://fakeimg.pl/128x128/111111/dddddd/?text=128x128&retina=1", memberRole: "Roles To be Updated", github: "https://github.com/nadiadha", twitter: "", linkedin: "https://www.linkedin.com/in/nadia-indarwati-aa8ab4208/"},
  {fullName: "Toyib Nurseha", memberPicture: "https://fakeimg.pl/128x128/111111/dddddd/?text=128x128&retina=1", memberRole: "Roles To be Updated", github: "https://github.com/ToyibNurseha", twitter: "", linkedin: "https://www.linkedin.com/in/toyib-nurseha/"},
  {fullName: "Ronan Harris", memberPicture: "https://fakeimg.pl/128x128/111111/dddddd/?text=128x128&retina=1", memberRole: "Roles To be Updated", github: "https://github.com/ronanharris09", twitter: "https://twitter.com/Ronanharris4", linkedin: "https://www.linkedin.com/in/ronan-harris-46a842143/"}
]

export default function Home(): React.ReactElement {
  return (
    <>
      <header className="pt-40">
        <div className="max-w-xl">
          <h1 className="font-bold text-4xl mt-1">Xatryx Teams</h1>
          <p className="text-xl mt-4">
            We are focusing building solution to protect women & child
          </p>
        </div>
      </header>
      <main className="items-center">
        <h1 className="font-semibold text-3xl py-5 text-center">Our Teams</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-5">
          {
            teamMembers.map(item => (
              <article className="mx-auto" key={item.fullName}>
                <img src={item.memberPicture} alt="aHuman" className="rounded-full"/>
                <div className="mt-5 text-center">
                  <h1>{item.fullName}</h1>
                  <p>{item.memberRole}</p>
                  <SocialLinks isGithub={item.github} isLinkedIn={item.linkedin} isTwitter={item.twitter} />
                </div>
              </article>
            ))
          }
        </div>
      </main>
    </>
  )
}
