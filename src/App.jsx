import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect,useState } from 'react';
import Banner from './components/banner/Banner.Jsx';
import Navbar from './components/navber/Navbar';
import Hero from './components/hero/Hero';
import Products from './components/products/Products';

function App() {
const [orderPopUp, setOrderPopUp] = useState(false)

const handleOrderPopUp=()=>{
  setOrderPopUp(!orderPopUp)
}

useEffect(() => {
  AOS.init({
    offset:100,
    duration:800,
    easing:'ease-in-sine',
    delay:100,
  })
  AOS.refresh();
}, [])

  return (
    <>
    <div className='bg-white dark:bg-gray-900 dark:text-white duration-200'>
    </div>
    <Navbar handleOrderPopUp={handleOrderPopUp}/>
    <Hero handleOrderPopUp={handleOrderPopUp}/>
    <Products/>
    <Banner/>
    </>
  )
}

export default App
