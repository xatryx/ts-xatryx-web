import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type SocialPlatforms = {
    isGithub: string,
    isTwitter: string,
    isLinkedIn: string
}

export const SocialLinks = ({isGithub, isTwitter, isLinkedIn} : SocialPlatforms): React.ReactElement => {
  return (
    <div className="flex flex-row justify-center space-x-5 py-2">
        {
            isGithub ?
                <a href={isGithub} target="_blank">
                    <FontAwesomeIcon
                    className="h-8 w-8 transform hover:scale-110"
                    icon={['fab', 'github-square']}
                    />
                </a>
            : <></>    
        }
        {
            isTwitter ?
                <a href={isTwitter} target="_blank">
                    <FontAwesomeIcon
                    className="h-8 w-8 transform hover:scale-110"
                    icon={['fab', 'twitter-square']}
                    />
                </a>
            : <></>
        }
        {
            isLinkedIn ?
                <a href={isLinkedIn} target="_blank">
                    <FontAwesomeIcon
                    className="h-8 w-8 transform	hover:scale-110"
                    icon={['fab', 'linkedin']}
                    />
                </a>
            : <></>
        }
    </div>
  )
}
