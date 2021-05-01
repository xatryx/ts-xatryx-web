import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Footer = (): React.ReactElement => {
  return (
    <footer className=" flex flex-row justify-between items-center">
      <div className="flex space-x-5 py-2">
        <a href="https://github.com/">
          <FontAwesomeIcon
            className="h-8 w-8 transform hover:scale-110"
            icon={['fab', 'github-square']}
          />
        </a>
        <a href="https://twitter.com/">
          <FontAwesomeIcon
            className="h-8 w-8 transform hover:scale-110"
            icon={['fab', 'twitter-square']}
          />
        </a>
        <a href="https://www.linkedin.com/">
          <FontAwesomeIcon
            className="h-8 w-8 transform	hover:scale-110"
            icon={['fab', 'linkedin']}
          />
        </a>
      </div>
      <p>© 2021 Xatryx Team. All Rights Reserved.</p>
    </footer>
  )
}
