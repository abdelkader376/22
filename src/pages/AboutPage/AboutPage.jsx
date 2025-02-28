import Btnsection3 from '../../Components/buttom-home-section3/buttom-home-section3'
import Chef from '../../Components/chife-home-card/chief'
import AboutHead from '../../Components/compnentAboutPage/section-1/section-1'
import About2 from '../../Components/compnentAboutPage/section-2/section-2'
import Sec from '../../Components/compnentAboutPage/section-3/section-3'
import What from '../../Components/what-home-section3/what-home-section3'
import mune from "../../images/menu (1).svg";
import rev from "../../images//dialog.svg";
import './AboutPage.css'
import chef1 from "../../images/1 (1).png";
import chef2 from "../../images/2 (1).png";
import chef3 from "../../images/3 (1).png";
import chef4 from "../../images/4 (1).png";
import rev1 from "../../images/rev1.jpg";
import rev2 from "../../images/rev2 (1).jpg";
import rev3 from "../../images/rev3.jpg";
import rev4 from "../../images/rev4.jpg";
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderRev from '../../Components/compnentAboutPage/sliderRev/sliderRev'
import Sliderr from '../../Components/card-slider-home/slider-card'
import TextHome from '../../Components/text-home-page/text-1'
import ImageHome from '../../Components/image-home-page/imageHome'
import imageabout from "../../images/delivery.png";
import icon1 from "../../images/menu.svg";
import icon2 from "../../images/3.svg";
import Footer from '../../Components/footer/footer'
export default function AboutPage(){
    
    return(
        <section>
            <div className="section-1">
                <div className="container">
                       <AboutHead title="About" name="About" />
                </div>
            </div>
            <div className="section-2">
                <div className="container">
                    <About2/>
                </div>
            </div>
            <div className="section-3 mt-5">
                <div className="container">
                    <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12">
                    <Sec num="01" title="We are located in the city center"/>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                    <Sec num="02" title="Fresh ingredients from organic farms"/>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                    <Sec num="03" title="Own fast delivery. 30 min Maximum"/>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                    <Sec num="04" title="Professional, experienced chefs"/>
                    </div>
                   <div className="col-lg-4 col-md-6 col-sm-12" >
                   <Sec num="05" title="The highest standards of service"/>
                   </div>

            </div>
            </div>
            </div>

            <div className="section-4">
                <div className="container">
                <div className="row contact">
                            <What title="They will cook for you"/>
                            <Btnsection3 icon={mune} textIcon="Full mune"/>
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
            <div className="section-4">
                <div className="container">
                <div className="row contact">
                            <What title="Reviews about us"/>
                            <Btnsection3 icon={rev} textIcon="All revievs"/>
                    </div>
                </div>
            </div>
            <div className="section-6">
                <div className="contant row">
                    
               <SliderRev/>
       
                </div>
            </div>
            <div className="container">
                <div className="row contact ">
                            <TextHome title="Free delivery service." image1={icon1} image2={icon1} textMune=" Order delivery" textAbout=" Menu"/>
                            <ImageHome image={imageabout}/>
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


const data=[
    {
        title:"Very tasty",
        par:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis fugiat totam nobis quas unde excepturi inventore possimus laudantium provident, rem eligendi velit. Aut molestias, ipsa itaque laborum, natus tempora, ut soluta animi ducimus dignissimos deserunt doloribus in reprehenderit rem accusamus! Quibusdam labore, aliquam dolor harum!",
        image:'../../images/rev1.jpg',
        name:"Emma Newman"
    },
    {
        title:"I have lunch here every day",
        par:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis fugiat totam nobis quas unde excepturi inventore possimus laudantium provident, rem eligendi velit. Aut molestias, ipsa itaque laborum, natus tempora, ut soluta animi ducimus dignissimos deserunt doloribus in reprehenderit rem accusamus! Quibusdam labore, aliquam dolor harum!",
        image:'../../images/rev2.jpg',
        name:"Paul Trueman"
    },
    {
        title:"Great Service",
        par:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis fugiat totam nobis quas unde excepturi inventore possimus laudantium provident, rem eligendi velit. Aut molestias, ipsa itaque laborum, natus tempora, ut soluta animi ducimus dignissimos deserunt doloribus in reprehenderit rem accusamus! Quibusdam labore, aliquam dolor harum!",
        image:{rev3},
        name:"Fecktoria Freeman"
    },
    {
        title:"Starbelly is Amazing",
        par:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis fugiat totam nobis quas unde excepturi inventore possimus laudantium provident, rem eligendi velit. Aut molestias, ipsa itaque laborum, natus tempora, ut soluta animi ducimus dignissimos deserunt doloribus in reprehenderit rem accusamus! Quibusdam labore, aliquam dolor harum!",
        image:{rev4},
        name:"Audrey oldman"
    }

]