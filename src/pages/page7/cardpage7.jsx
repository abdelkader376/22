import { useState } from "react";
import img1 from './../../images/b198d4c6-3183-4914-a92f-eb39c17bb17a.jpg'
import CardProduct from "../../components/cardProduct/cardProduct";
import Pag from "../../components/page1-com/P";



export default function CardPage4(){
    
    const Products =[
        {
            quantity:1,  id:118 ,name:"بقسماط لون أبيض Breadcrumbs white color",price:40 ,img:img1,des:"High quality (white color) breadcrumbs, used for breading for chicken mosahhab , mozzarella sticks, chicken pane , scallops and many foods."
           },{
            quantity:1,id:132 ,name:"بقسماط لون برتقالي Breadcrumbs orange color",price:40 ,img:img1,des:"High quality (orange color) breadcrumbs, used for breading for chicken mosahhab , mozzarella sticks, chicken pane , scallops and many foods."
           },{
            quantity:1,  id:133 ,name:"بقسماط لون ذهبي Breadcrumbs golden color",price:40 ,img:img1,des:"High quality (golden color) breadcrumbs, used for breading for chicken mosahhab, mozzarella sticks, chicken pane , scallops and many foods."
           },
    ]

    const productPerPage=20;
    const pages =Math.ceil(Products.length/productPerPage)
    const [currentPage,setcurrentPage]=useState(1)
    const startIndex =(currentPage -1) * productPerPage;
    const finishIndex =currentPage * productPerPage;
    const orderProducts = Products.slice(startIndex,finishIndex);
    return(
        <div className="page1Section">
            <div className=' row  m-auto mt-5 mb-5'>
                                {
                                    orderProducts.map((item,index)=>{
                                        return (
                                            
                                            <CardProduct key={index} item={item}/>                                
                                        )
                                    })
                                }
                                <Pag pages={pages} currentPage={currentPage} setcurrentPage={setcurrentPage}/>
                            </div>
                        
                            
        </div>
    )
}