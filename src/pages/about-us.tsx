import { SocialLinks } from '../components/SocialLinks'

const teamMembers = [
  {fullName: "Jerens Soehardi Lensun", memberPicture: "https://fakeimg.pl/128x128/111111/dddddd/?text=JL&retina=1", memberRole: "Roles To be Updated", github: "https://github.com/jerensl", twitter: "", linkedin: "https://www.linkedin.com/in/jerensl/"},
  {fullName: "Muhammad Hanif Azhary", memberPicture: "https://fakeimg.pl/128x128/111111/dddddd/?text=MA&retina=1", memberRole: "Roles To be Updated", github: "https://github.com/nephertz", twitter: "https://twitter.com/nephertz", linkedin: "https://www.linkedin.com/in/mhanifazhary/"},
  {fullName: "Maulina Damayani", memberPicture: "https://fakeimg.pl/128x128/111111/dddddd/?text=MD&retina=1", memberRole: "Roles To be Updated", github: "https://github.com/Maulina-beep", twitter: "", linkedin: "https://www.linkedin.com/in/maulina-damayani-a2561b207/"},
  {fullName: "Nadia Indarwati", memberPicture: "https://fakeimg.pl/128x128/111111/dddddd/?text=NI&retina=1", memberRole: "Roles To be Updated", github: "https://github.com/nadiadha", twitter: "", linkedin: "https://www.linkedin.com/in/nadia-indarwati-aa8ab4208/"},
  {fullName: "Toyib Nurseha", memberPicture: "https://fakeimg.pl/128x128/111111/dddddd/?text=TN&retina=1", memberRole: "Roles To be Updated", github: "https://github.com/ToyibNurseha", twitter: "", linkedin: "https://www.linkedin.com/in/toyib-nurseha/"},
  {fullName: "Ronan Harris", memberPicture: "https://fakeimg.pl/128x128/111111/dddddd/?text=RN&retina=1", memberRole: "Roles To be Updated", github: "https://github.com/ronanharris09", twitter: "https://twitter.com/Ronanharris4", linkedin: "https://www.linkedin.com/in/ronan-harris-46a842143/"}
]

export default function AboutUs(): React.ReactElement {
  return (
    <>
      <main className="container mx-auto">
        <section className="my-40 py-40">
          <div className="flex flex-col items-center h-full">
            <div className="text-center my-auto px-3">
              <h1 className="font-black text-2xl md:text-3xl lg:text-4xl">About Us</h1>
              <p className="font-light text-lg md:text-xl lg:text-2xl mt-5">
                  Hi, we are <strong>Xatryx</strong> and we are students from different universities, <br />
                  and majors in Indonesia currently enrolling in <strong>Bangkit 2021</strong> Programme. <br />
              </p>
              <p className="font-light text-lg md:text-xl lg:text-2xl mt-5 w-full lg:w-10/12 xl:w-9/12 2xl:w-7/12 mx-auto">
                  Starting from this month, we are working together on a final project to compete  against the other <strong>494 teams</strong> within this programme. For this project, we went for the <strong>Women Empowerment and Child Protection</strong> Theme as we sees a chance to develop an integrated services that can improve and protect their online experiences.
              </p>
            </div>
          </div>
        </section>
        <section>
          <h1 className="font-black text-2xl md:text-3xl lg:text-4xl py-5 text-center">Team Members</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
          {
            teamMembers.map(item => (
                <article className="mx-auto p-6" key={item.fullName}>
                  <img src={item.memberPicture} alt="aHuman" className="border-4 border-current rounded-full"/>
                  <div className="mt-5 text-center">
                  <h3 className="font-bold text-xl">{item.fullName}</h3>
                  <p className="font-normal text-xl">{item.memberRole}</p>
                  <SocialLinks isGithub={item.github} isLinkedIn={item.linkedin} isTwitter={item.twitter} />
                  </div>
                </article>
              )
            )
          }
          </div>
        </section>
      </main>
    </>
  )
}
  