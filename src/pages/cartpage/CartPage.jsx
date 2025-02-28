import { useRecoilState } from 'recoil'
import'./CartPage.css'
import CartAtom from '../../Atom/cartAtom'
export default function Cart(props){

const [cart ,setCart]=useRecoilState(CartAtom)


function removeItemAtIndex(arr, index) {
    return [...arr.slice(0, index), ...arr.slice(index + 1)];
  }

    return(
        <div className="container">
            <table className='table'>
                <thead>
                    <th>image</th>
                    <th>name</th>
                    <th>price</th>
                    <th>Action</th>
                </thead>
                <tbody>
                    {
                   cart?.map((product, index)=>{
                    return(
                        <tr>
                            <td><img src={product.image} alt="" /></td>
                            <td>{product.name}</td>
                            <td>{product.userId}$</td>
                            <td><button onClick={()=>{
                                setCart(removeItemAtIndex(cart, index))
                            }}>DELETE</button></td>
                        </tr>
                    )
                   })
                }
                </tbody>
            </table>
        </div>
    )
}