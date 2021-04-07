import { Suspense } from "react";
import MY_SERVICE, { ALL_FETCHER, OFFERS_URL } from "./services/offers";
import { Loader } from "./ui/components/Loader";

const fetchOffersList = async page => {
    const { data } = await MY_SERVICE.OFFERS(page);
    return data;
};

const offerList = async () => {
    return await ALL_FETCHER(OFFERS_URL);
};

const DirectoryList = lazy(() => import("ui/components/DirectoryList"));

export default function App() {
    useEffect(() => {
        fetchOffersList();
    }, []);
    return (
        <>
            <Suspense fallback={Loader}>
                <DirectoryList
                    offerList={fetchOffersList}
                    offerCards={offerList}
                />
            </Suspense>
        </>
    );
}
