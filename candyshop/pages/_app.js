import '../styles/globals.css'
import { MyProvider } from '../shoppingCartContext'

export default function App({ Component, pageProps }) {
  return (
    <MyProvider>
      <Component {...pageProps} />
    </MyProvider>
  )
}
