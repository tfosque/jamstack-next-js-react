import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Row } from 'react-bootstrap'
import ProplusNavbar from './layouts/proplusNavbar'
import AppMenu from './layouts/appMenu'
import { useRouter } from 'next/router'
import CarouselDisplay from '../components/Carousel'

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  const hideMenu = router.pathname === '/'
  const hideCarousel = router.pathname !== '/home'
  console.log({router}, {hideMenu}, {hideCarousel})

  return (
    <>
      <Row style={{ display: hideMenu ? 'none' : 'display'}}> 
        <ProplusNavbar />
        <AppMenu />
        <div  style={{ display: hideCarousel ? 'none' : 'display'}}>
          <CarouselDisplay />
        </div>
      </Row>
      <Component {...pageProps} />
    </>
  )
}
export default MyApp
