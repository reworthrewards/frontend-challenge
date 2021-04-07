import MY_SERVICE, {ALL_FETCHER, OFFERS_URL} from "./services/offers";
import { Loader } from './ui/components/Loader';

const fetchOffersList = async (page) => {
    const {data} = await MY_SERVICE.OFFERS(page)
    return data   
};

const offerList = async() =>{
    const response = await ALL_FETCHER(OFFERS_URL)
    return response
}

const DirectoryList = lazy(()=>import("ui/components/DirectoryList"))


export default function App() {
    useEffect(() => {
        fetchOffersList()
    }, [])
    return (
        <>
            <Suspense fallback={Loader}>
                <DirectoryList offerList={fetchOffersList} offerCards={offerList} />
            </Suspense>
        </>
    );
}
