import { useEffect, useState } from "react"
import ProductCard from "../../Components/productCard/productCard"
import'./MunePage.css'
import CateBtn from "../../Components/btn-cate/btn-cate"
import { useParams } from "react-router-dom"
import AboutHead from "../../Components/compnentAboutPage/section-1/section-1"
import Footer from "../../Components/footer/footer"
import TextHome from "../../Components/text-home-page/text-1"
import ImageHome from "../../Components/image-home-page/imageHome"
import imageabout from "../../images/delivery.png";
import icon1 from "../../images/menu.svg";
import icon2 from "../../images/3.svg";
export default function MunePage(){
    const [products,setproducts]=useState([])
    
 const params=useParams()
async function ProductData() {
    let res = await fetch('https://dummyjson.com/recipes')
    let data = await res.json()
    setproducts(data)    
}



const [cate,setcate]=useState()

async function CateData() {
    let res = await fetch(`https://dummyjson.com/recipes/tag/${params.catee}`)
    let pp = await res.json()
    setcate(pp)    
}
useEffect(()=>{
    ProductData()
    CateData()
},[])


   

   

    return(
        
   
        <section className="section-card">
             {/* {
            products?.recipes?.map((catee)=>{
                return (
                    <CateBtn catee={catee}/>
                )
            })
        } */}
        <div className="section-1">
                <div className="container">
                       <AboutHead title="Mune" name="Mune" />
                </div>
            </div>
        <div className="container"> 
            <div className="row">
                
        {
            products?.recipes?.map((product)=>{
                return(
                    <ProductCard   product={product}/>
                )
            }) 
        }
     
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