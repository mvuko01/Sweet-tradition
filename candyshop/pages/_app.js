import '../styles/globals.css'
import { MyProvider } from '../context.js'

export default function App({ Component, pageProps }) {
  return (
    <MyProvider>
      <Component {...pageProps} />
    </MyProvider>
  )
}
