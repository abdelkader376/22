import './productCardM.css'
import img1 from './../../images/b198d4c6-3183-4914-a92f-eb39c17bb17a.jpg'
import CardProduct from './cardProduct';

export default function CardProductM(props){
    const  Products =[
        {
            quantity:1,id:1 ,name:"Bread Crumbs 15/2/2",price:40,img:img1
        },
        {
            quantity:1, id:2 , name:"bread crumbs 20/10/2",price:40,img:img1
        },
        {
            quantity:1, id:3 , name:"Bread Crumbs 20006",price:40,img:img1
        },
        {
            quantity:1, id:4 , name:"Bread crumbs 4004",price:40,img:img1
        },
        {
            quantity:1,   id:5 , name:"bread crumbs MZ12",price:40,img:img1
        },        {
            quantity:1, id:6 ,  name:"bread crumbs panko 4000",price:40,img:img1
        },        {
            quantity:1, id:7 ,  name:"breadcrumbs 3000",price: 40,img:img1
        },        {
            quantity:1, id:8 , name:"chicken broth AG20350",price:40,img:img1
        },        {
            quantity:1, id:9 , name:"far east seasoning 20205",price:40,img:img1
        },        {
            quantity:1, id:10 , name:"Rusk pw10",price:45,img:img1
        },

    ];
    
    return(
        <section className='sectionProduct '>
            <h3  data-aos="fade-up" data-aos-easing="ease-out-cubic"
        data-aos-duration="2000">Latest Products</h3>
        <div className=' row  m-auto container'>
            {
                Products.map((item,index)=>{
                    return (
                        <CardProduct key={index} item={item}/>
                    )
                })
            }
        </div>
        </section>
    )
}