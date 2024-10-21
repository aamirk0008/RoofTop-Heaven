import React from 'react'
import backImg from "../assets/about.jpg";
import about1 from "../assets/about-1.jpg";
import about2 from "../assets/about-2.jpg";
import about3 from "../assets/about-3.jpg";
import about4 from "../assets/about-4.jpg";
import team1 from "../assets/team1.jpg";
import team2 from "../assets/team2.jpg";
import { GrCafeteria } from "react-icons/gr";
import { MdOutlineRoundaboutRight } from "react-icons/md";
import { GiTeamDowngrade } from "react-icons/gi";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const About = () => {
  var settings = {
    // dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          // dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }
  return (
    <div className='bg-black'>
        <div className='relative md:h-[30rem] h-64 flex justify-center items-center bg-center bg-cover bg-[url("https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/be/01/f5/the-lounge-bar.jpg?w=1200&h=-1&s=1")]'>
            <h1 className='text-5xl md:text-6xl font-semibold text-primary'>About Us</h1>
        </div>
        <div className='mt-16 md:flex md:mx-16 mx-4 md:gap-8'>
            <div className='grid grid-cols-2 gap-4 justify-center'>
              <div>
                <img className='' src={about1} alt="" />
              </div>
              <div>
                <img className='w-36 mt-16 md:w-64 md:mt-20' src={about2} alt="" />
              </div>
              <div>
                <img className='w-36 mb-16 ml-12 md:w-64 md:mb-32 md:ml-12' src={about3} alt="" />
              </div>
              <div>
                <img  src={about4} alt="" />
              </div>
            </div>
            <div className='text-white flex flex-col gap-4 md:my-24 md:gap-8 my-12'>
              <h1 className='text-primary text-2xl md:text-4xl flex items-center gap-2 font-bold'>About Us <MdOutlineRoundaboutRight/></h1>
              <h1 className='flex items-center text-2xl md:text-4xl'>Welcome to Our <span className='mx-1 text-primary'><GrCafeteria/></span> Rooftop Cafe</h1>
              <p className='md:text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, impedit laborum? Illo rem nobis nihil.</p>
              <p className='md:text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, impedit laborum? Illo rem nobis nihil.</p>
              <h1 className='md:text-4xl border-l-4 border-primary'><span className='text-primary font-bold ml-2'>15</span> Years of Experience</h1>
              <button className='bg-primary rounded-md md:py-2 py-2'>Read More</button>
            </div>
        </div>

        <div className='text-white mt-8 flex flex-col md:flex-row gap-12 md:gap-48'>
          <div className='flex flex-col gap-4 items-center mx-4 md:justify-center'>
            <h1 className='text-primary font-bold text-4xl flex gap-2'>Our Team <GiTeamDowngrade/></h1>
            <p className='font-semibold'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p className='font-semibold'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste, repellat. lorem20</p>
          </div>
          <div className='slider-container w-84 mx-12 md:mx-12'>
            <Slider {...settings} className='w-[23rem]'>
              <div className='!flex !flex-col !items-center !gap-4'>
                <img src={team2} alt="" />
                <h1 className='text-2xl'>Cody Fisher</h1>
                <p>Bartender</p>
              </div>
              <div className='!flex !flex-col !items-center !gap-4'>
              <img src={team2} alt="" />
                <h1 className='text-2xl'>Cody Fisher</h1>
                <p>Bartender</p>
              </div>
              <div className='!flex !flex-col !items-center !gap-4'>
              <img src={team2} alt="" />
                <h1 className='text-2xl'>Cody Fisher</h1>
                <p>Bartender</p>
              </div>
              <div className='!flex !flex-col !items-center !gap-4'>
              <img src={team2} alt="" />
                <h1 className='text-2xl'>Cody Fisher</h1>
                <p>Bartender</p>
              </div>
            </Slider>
          </div>
        </div>
    </div>
  )
}

export default About