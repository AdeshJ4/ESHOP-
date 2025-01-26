import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Category from './components/Category';
import Services from './components/Services/Services';
import Banner from './components/Banner/Banner';
import Products from './components/Products/Products';
import AOS from "aos";
import "aos/dist/aos.css";


// images
import headphone from './assets/hero/headphone.png';
import smartwatch2 from './assets/category/smartwatch2-removebg-preview.png';
import Blogs from './components/Blogs/Blogs';
import Partners from './components/Partners/Partners';
import Footer from './components/Footer/Footer';
import Popup from './components/shared/Popup';


const bannerData = {
  discount: '30% OFF',
  title: "Fine Smile",
  date: "10 Jan to 28 Jan",
  image: headphone,
  title2: "Air Solo Bass",
  title3: "Winter Sale",
  title4: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis beatae a, sequi quasi molestiae aut.",
  bgColor: "bg-primary",
  btnTxt: "Shop Now",
  btnBgColor: "bg-white",
  btnTextColor: "text-primary",

}

const bannerData2 = {
  discount: '30% OFF',
  title: "Happy Hours",
  date: "14 Jan to 28 Jan",
  image: smartwatch2,
  title2: "Smart Solo",
  title3: "Winter Sale",
  title4: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis beatae a, sequi quasi molestiae aut.",
  bgColor: "bg-brandGreen",
  btnTxt: "Shop Now",
  btnBgColor: "bg-white",
  btnTextColor: "text-brandGreen",
}


function App () {

  const [orderPopup, serOrderPopup] = useState(false);

  const handlePopup = () => {
    serOrderPopup((prev) => !prev);
  }

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
      offset: 100
      // once: TbReceiptYen,
      // mirror: false,
      // anchorPlacement: "top-bottom"
    });
    AOS.refresh();
  }, [])

  return (
    <div className='bg-white dark:bg-gray-900 dark:text-white duration-500 overflow-hidden'>
      <Navbar handlePopup={handlePopup}/>
      <Hero handlePopup={handlePopup}/>
      <Category />
      <Services />
      <Banner bannerData={bannerData}/>
      <Products />
      <Banner bannerData={bannerData2}/>
      <Blogs />
      <Partners />
      <Footer />
      <Popup orderPopup={orderPopup} serOrderPopup={serOrderPopup} handlePopup={handlePopup} /> 
    </div>
  )

}


export default App;