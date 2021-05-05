import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { SocialLinks } from '../components/SocialLinks'
import { GetStaticProps } from 'next'
import Link from 'next/link'

const teamMembers = [
  {fullName: "Jerens Soehardi Lensun", memberPicture: "https://fakeimg.pl/128x128/111111/dddddd/?text=JL&retina=1", memberRole: "Roles To be Updated", github: "https://github.com/jerensl", twitter: "", linkedin: "https://www.linkedin.com/in/jerensl/"},
  {fullName: "Muhammad Hanif Azhary", memberPicture: "https://fakeimg.pl/128x128/111111/dddddd/?text=MA&retina=1", memberRole: "Roles To be Updated", github: "https://github.com/nephertz", twitter: "https://twitter.com/nephertz", linkedin: "https://www.linkedin.com/in/mhanifazhary/"},
  {fullName: "Maulina Damayani", memberPicture: "https://fakeimg.pl/128x128/111111/dddddd/?text=MD&retina=1", memberRole: "Roles To be Updated", github: "https://github.com/Maulina-beep", twitter: "", linkedin: "https://www.linkedin.com/in/maulina-damayani-a2561b207/"},
  {fullName: "Nadia Indarwati", memberPicture: "https://fakeimg.pl/128x128/111111/dddddd/?text=NI&retina=1", memberRole: "Roles To be Updated", github: "https://github.com/nadiadha", twitter: "", linkedin: "https://www.linkedin.com/in/nadia-indarwati-aa8ab4208/"},
  {fullName: "Toyib Nurseha", memberPicture: "https://fakeimg.pl/128x128/111111/dddddd/?text=TN&retina=1", memberRole: "Roles To be Updated", github: "https://github.com/ToyibNurseha", twitter: "", linkedin: "https://www.linkedin.com/in/toyib-nurseha/"},
  {fullName: "Ronan Harris", memberPicture: "https://fakeimg.pl/128x128/111111/dddddd/?text=RN&retina=1", memberRole: "Roles To be Updated", github: "https://github.com/ronanharris09", twitter: "https://twitter.com/Ronanharris4", linkedin: "https://www.linkedin.com/in/ronan-harris-46a842143/"}
]

export default function Home(): React.ReactElement {
  return (
    <>
      <header className="h-screen">
        <div className="flex flex-col h-full">
          <div className="text-center my-auto">
            <h1 className="font-black text-2xl md:text-3xl lg:text-4xl">Hi, We Are Xatryx Devs !</h1>
            <p className="font-light text-lg md:text-xl lg:text-2xl mt-5">
              <span>
                We are part of <strong>Bangkit 2021</strong> Programme, Team <strong>#0073</strong>.
              </span>
              <br />
              <span>
                Currently working on something related to improving your online experiences.
              </span>
              <br />
              <span className="font-bold">
                ETA June <strong>4</strong><sup>th</sup>
              </span>
            </p>
            <div className="mt-5">
              <a href="https://grow.google/intl/id_id/bangkit/" target="_blank">
                <button className="rounded-full font-bold p-5 bg-black text-white dark:bg-white dark:text-black transform hover:scale-95 hover:underline">Read More About Bangkit Here</button>
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
