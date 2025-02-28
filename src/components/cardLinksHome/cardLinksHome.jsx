import './cardLinksHome.css'
import AOS from'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react';
export default function CardLinksHome(props){
     useEffect(()=>{
                AOS.init();
            },[])
    return(
          
            <div className="pp   " data-aos="zoom-in" data-aos-easing="ease-out-cubic"
            data-aos-duration="1000">
                <div className="image"><img src={props.img} alt="" /></div>
                <h6 className="ppp">{props.title}</h6>
            </div>
            
    )
}