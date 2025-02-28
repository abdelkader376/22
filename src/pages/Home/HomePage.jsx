import { useEffect, useState } from "react";
import Slider from "react-slick";
import Btnsection3 from "../../Components/buttom-home-section3/buttom-home-section3";
import ImageHome from "../../Components/image-home-page/imageHome";
import ImageHomeSection2 from "../../Components/image-home-section2/image-home-section-2";
import ProductCard from "../../Components/productCard/productCard";
import TextHome from "../../Components/text-home-page/text-1";
import TextSection2 from "../../Components/text-home-section2/text-home-section2";
import What from "../../Components/what-home-section3/what-home-section3";
import './HomePage.css'  
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CatHome from "../../Components/cat-home-section4/cat-home-section4";
import { BiRightTopArrowCircle } from "react-icons/bi";
import mune from "../../images/menu (1).svg";
import arrow from "../../images/arrow (1).svg";
import Chef from "../../Components/chife-home-card/chief";
import chef1 from "../../images/1 (1).png";
import chef2 from "../../images/2 (1).png";
import chef3 from "../../images/3 (1).png";
import chef4 from "../../images/4 (1).png";
import imageHome from'./../..//images/girl.png'
import imagePhone from'./../..//images/phones.png'
import iconMune from './../../images/menu.svg' 
import iconAbout from './../../images/arrow.svg'
import googleplay from'./../..//images/googleplay.svg'
import appstore from'./../..//images/appstore.svg'
import Sliderr from "../../Components/card-slider-home/slider-card";
import Footer from "../../Components/footer/footer";

export default function HomePage(){

    const [products,setproducts]=useState([])
    async function ProductData() {
        let res = await fetch('https://dummyjson.com/recipes')
        let data = await res.json()
        setproducts(data)    
    }

    useEffect(()=>{
        ProductData()
    },[])


    

    
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
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
      };
    return(
        <section className="section-1">
            <div className="container">
                <div className="row contact">
                            <TextHome title="We do not cook, we create your emotions!" image1={iconMune} image2={iconAbout} textMune=" Our Menu" textAbout=" About"/>
                            <ImageHome image={imageHome}/>
                </div>
            </div>
            <div className="sectino-2">
                <div className="container">
                    <div className="row contact">
                    <ImageHomeSection2/>
                    <TextSection2/>
                    </div>
                </div>
            </div>
            <div className="section-3">
                <div className="container">
                    <div className="row contact">
                            <What title="What do you like today?"/>
                            <Btnsection3 icon={arrow} textIcon="Go shopping now"/>
                    </div>
                </div>
            </div>
            <div className="section-4">
              <div className="container">
                <div className="row contact">
                    <CatHome/>
                </div>
              </div>
            </div>
            <div className="section-5">
                <div className="container">
                    <div className="row contact">
                            <What title="Most popular dishes"/>
                            <Btnsection3 icon={mune} textIcon="Full mune"/>
                    </div>
                </div>
            </div>
            <div className="section-6">
                <div className="contant row">
                    
                <Slider {...settings}>
                {
            products?.recipes?.map((product)=>{
                return(
                    // <ProductCard   product={product}/>
                    <Sliderr product={product}/>
                )
                 }) 
                }
             </Slider>
       
                </div>
            </div>
            <div className="section-7">
                <div className="container">
                    <div className="row contact">
                            <What title="They will cook for you"/>
                            <Btnsection3 icon={arrow} textIcon="More about us"/>
                    </div>
                </div>
            </div>
            <div className="section-8">
                <div className="container">
                    <div className="row contact">
                            <Chef image={chef1} name="Paul Trueman" title="Chef"/>
                            <Chef image={chef2} name="Emma Newman" title="Assistant chef"/>
                            <Chef image={chef3} name="Oscar Oldman" title="Chef"/>
                            <Chef image={chef4} name="Ed Freeman" title="Assistant chef"/>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row contact">
                            <TextHome title="Download our mobile app." image1={googleplay} image2={appstore} />
                            <ImageHome image={imagePhone}/>
                </div>
            </div>
            <div className="section-10">
            <div className="container">
                <Footer/>
            </div>
            </div>
        </section>
        
        
        
        
    )
}