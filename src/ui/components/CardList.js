import '../../index.scss';
import { compareValues } from '../../utils/compareValues';
import { Loader } from './Loader';

export default function CardList({ offerList, ...props }) {
    const [offers, setOffers] = useState(null)
    useEffect(() => {
        setOffers(offerList)
    }, [])


    const orderArray = async (e) =>{
        if(e.target.value === "A-Z"){
            const asc = offers.sort(compareValues('name'))
           return setOffers([...asc])
           
        }
        else if(e.target.value === "Z-A"){
            const desc = await offers.sort(compareValues('name', 'desc'))
            return setOffers([...desc])
        }
        else if(e.target.value === "discountasc"){
            const asc =offers.sort(compareValues('dv_cashback'))
            return setOffers([...asc])
        }
        else if(e.target.value === "discountdesc"){
            const desc = offers.sort(compareValues('dv_cashback', 'desc'))
            return setOffers([...desc])
        }
    }

    console.log(offers)
    

    if(!offers)return <Loader/>
    return( 
    <>
    <select
        name="orderArr"
        onChange={(e)=>orderArray(e)}
    >
        <option disabled selected>
            <b>Ordenar por</b>
        </option>
        <option value="A-Z">Ordenar por nombre ascendente</option>
        <option value="Z-A">Ordenar por nombre descendente</option>
        <option value="discountasc">
            Ordenar por descuento ascendente
        </option>
        <option value="discountdesc">
            Ordenar por descuento descendente
        </option>
                    
    </select>
    <div className="cards-container">
    
       {
           offers?.map((e,i)=>{
               return(
                   <div className="card-container">
                    <p>Nombre: {e.name}</p>
                    <p>Descuento: {e.dv_cashback}</p>
                    <p>Fecha de Expiración: {e.dv_expires}</p>
                   </div>
               )
           })
       }
    </div>

    </>);
}
