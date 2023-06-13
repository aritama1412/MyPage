import HeroComp from './components/HeroComp'
import NavbarComp from './components/NavbarComp'
import GalleryComp from './components/GalleryComp'
import ServicesComp from './components/ServicesComp'
import FaqComp from './components/FaqComp'
import FooterComp from './components/FooterComp'

function App() {

  return (
    <div>
      <HeroComp></HeroComp>
      <NavbarComp></NavbarComp>

      <GalleryComp></GalleryComp>
      <ServicesComp></ServicesComp>
      <FaqComp></FaqComp>

      <FooterComp></FooterComp>
    </div>
  )
}

export default App
