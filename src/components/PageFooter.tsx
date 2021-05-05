import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { SocialLinks } from '../components/SocialLinks'

export const PageFooter = (): React.ReactElement => {
  return (
    <div className="bg-gray-900 text-white p-6 dark:bg-black">
      <footer className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
        <SocialLinks isGithub="https://github.com/xatryx" isTwitter="" isLinkedIn="" />
        <p>© 2021 Xatryx Team. All Rights Reserved.</p>
      </footer>
    </div>
  )
}
