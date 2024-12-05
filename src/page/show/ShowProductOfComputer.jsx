
import ProductOfComputer from '../../components/card/ProductOfComputer'
import { Categories } from '../../store/ImageCategory'
import { useNavigate } from 'react-router-dom';

function ShowProductOfComputer() {

  
  return (
    <div className='mt-5  lg:w-[90%] xl:w-[82%] lg:mx-auto sm:mx-2 md:mx-2 mx-2'>
         <div className="grid  grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-3">
           {
                      Categories.map((item) => (
                           <ProductOfComputer  {...item} key={item.id} />
                      ))
                   }
         </div>
         
    </div>
  )
}

export default ShowProductOfComputer