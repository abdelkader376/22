import img1 from './../../images/fresh-and-dried-seasoning-herbs-and-spices-TV9EN5U-7.png'
import img2 from './../../images/Pioneer-22.png'
import img3 from './../../images/fresh-and-dried-seasoning-herbs-and-spices-TV9EN5U-26.png'
import img4 from './../../images/Pioneer-9.png'
import img5 from './../../images/fresh-and-dried-seasoning-herbs-and-spices-TV9EN5U-8.png'
import img6 from './../../images/fresh-and-dried-seasoning-herbs-and-spices-TV9EN5U-5-768x815.png'
import img7 from './../../images/095ced84-0822-498c-a1b9-e2e57d0fabf3.jpg'
import CardLinksHome from './cardLinksHome'
import './cardLinksHomeM.css'
import { Link } from 'react-router-dom'

export default function CardLinksHomeM(){
    const dataLinks=[
        {title: "Concentrated spices (powder)" ,img:img5},
        {title: "Sauces and Cheeses (Powder)" ,img:img2},
        {title: "Concentrated Flavors (Powder)" ,img:img3},
        {title: "Concentrated Flavors (oils)" ,img:img4},
        {title: "Concentrated Spice Mixes" ,img:img1}
        ,{title: "Food Solutions and Technology Products" ,img:img6},
        {
            title: "Bread Crumbs" ,img:img7
        }
    ]
    const handleScrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth", // Smooth scrolling effect
        });
      };
    return(
        <div className="row  m-auto container  ">
           <Link onClick={handleScrollToTop} to="/توابل" className='oo col-lg-2  col-md-4 col-sm-6 '> <CardLinksHome title={dataLinks[0].title} img={img5}/></Link>
           <Link onClick={handleScrollToTop} to="/صوصات" className='oo col-lg-2  col-md-4 col-sm-6'> <CardLinksHome title={dataLinks[1].title} img={img2}/></Link>
           <Link onClick={handleScrollToTop} to="/النكهات المركزة بودر" className='oo col-lg-2  col-md-4 col-sm-6'> <CardLinksHome title={dataLinks[2].title} img={img3}/></Link>
           <Link onClick={handleScrollToTop} to="/النكهات المركزة زيوت" className='oo col-lg-2  col-md-4 col-sm-6'> <CardLinksHome title={dataLinks[3].title} img={img4}/></Link>
           <Link onClick={handleScrollToTop} to="/خلطات توابل مركزة" className='oo col-lg-2  col-md-1 col-sm-6'> <CardLinksHome title={dataLinks[4].title} img={img1}/></Link>
           <Link onClick={handleScrollToTop} to="/منتجات حلول وتقنية الأغذية" className='oo col-lg-2  col-md-4 col-sm-6'> <CardLinksHome title={dataLinks[5].title} img={img6}/></Link>
           <Link onClick={handleScrollToTop} to="/بقسماط" className='oo col-lg-2  col-md-4 col-sm-6'> <CardLinksHome title={dataLinks[6].title} img={img7}/></Link>
            {/* {
                dataLinks.map((item,index)=>{
                    return(
                        <CardLinksHome key={index}  title={item.title} img={item.img}/>
                        
                    )
                })
            }
            */}
     </div>
    )
}