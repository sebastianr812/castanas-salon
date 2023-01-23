import '@/styles/globals.css'
import Navigation from "@/components/navigation/navigation.component";

export default function App({ Component, pageProps }) {
  return (
    <div className='px-5'>
      <Navigation />
      <Component {...pageProps} />
    </div>

  )
}
