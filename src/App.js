import DirectoryList from "ui/components/DirectoryList";

const fetchOffersList = () => {
    return [];
};

export default function App() {
    return (
        <>
            <p class="py-4 text-lg text-center">Start here :) Good luck!</p>

            <DirectoryList offerList={fetchOffersList()} />
        </>
    );
}
