import DirectoryList from "ui/components/DirectoryList";

const fetchOffersList = () => {
    return [];
};

function App() {
    return (
        <>
            <DirectoryList offerList={fetchOffersList()} />
        </>
    );
}

export default App;
