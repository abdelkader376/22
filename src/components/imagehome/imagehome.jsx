// import homeImage1 from '../../images/Home-Page-22.jpg'
// import homeImage2 from '../../images/Home-Page-44.jpg'
// import homeImage3 from '../../images/Untitled-2.png'
import { useEffect, useState } from 'react';
import './../imagehome/imagehome.css'
import { Typewriter, useTypewriter , Cursor }from'react-simple-typewriter'
export default function IamgeHome(){
            // const {text} = useTypewriter({
            //     words:['smart food solution' , 'world falvoer'],loop:{}
            // })
    return( 
        <>
       
        <div className="image1">
            
            {/* <img src={homeImage3} class="img-fluid" alt="..."></img> */}
            {/* <div className="textHome">
                <h1>Aromata</h1>
                <h1>Smart Food Solutions</h1>
            </div> */}
             
        </div>
      
       </>
//         <div id="carouselExampleFade" class="carousel slide carousel-fade  " data-bs-ride="carousel">
//   <div class="carousel-inner">
//     <div class="carousel-item active">
//       <img src={homeImage1} class="d-block w-100" alt="..."/>
//     </div>
//     <div class="carousel-item">
//       <img src={homeImage2} class="d-block w-100" alt="..."/>
//     </div>
//     <div class="carousel-item">
//       <img src={homeImage3} class="d-block w-100" alt="..."/>
//     </div>
//   </div>
//   <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
//     <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//     <span class="visually-hidden">Previous</span>
//   </button>
//   <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
//     <span class="carousel-control-next-icon" aria-hidden="true"></span>
//     <span class="visually-hidden">Next</span>
//   </button>
// </div>
    )
}