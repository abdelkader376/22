import { useEffect } from 'react';
import './../page1-com/P.css'
export default function Pag({pages,currentPage,setcurrentPage}){
    const  generatedPages =[];
    for(let i=1;i<=pages;i++){
        generatedPages.push(i);
    }
   
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, [currentPage]); // Runs when currentPage changes
    
    return(
        <div className="pag">
            {
                generatedPages.map((page)=>{
                       return(
                        <div  onClick={()=>setcurrentPage(page)
                            
                        } 
                        className={currentPage===page ? "page active" : "page"}
                         key={page}>
                        {page}
                    </div>
                       )
                })
            }
        </div>
    )
}