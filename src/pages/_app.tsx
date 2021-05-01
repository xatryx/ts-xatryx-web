import '../styles/globals.css'
import { Navbar } from '../components'
import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'

import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faGithubSquare,
  faTwitterSquare,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons'
import {
  faAdjust,
  faLongArrowAltRight,
} from '@fortawesome/free-solid-svg-icons'

library.add(
  faGithubSquare,
  faTwitterSquare,
  faLinkedin,
  faAdjust,
  faLongArrowAltRight
)

function MyApp({ Component, pageProps }: AppProps): React.ReactElement {
  return (
    <ThemeProvider attribute="class">
      <Navbar />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
