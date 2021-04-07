import "../../index.scss";
import TableList from "./TableList";
import { Flex, Spacer } from "@chakra-ui/react";
import { ChevronRightIcon, ChevronLeftIcon } from "@chakra-ui/icons";
import {
    Previous,
    Paginator,
    PageGroup,
    Page,
    Next,
    generatePages,
} from "chakra-paginator";
import { Loader } from "./Loader";
import CardList from "./CardList";

export default function DirectoryList({ offerList, offerCards, ...props }) {
    const [offers, setOffers] = useState(null);
    const [cards, setCards] = useState(null);

    useEffect(() => {
        offerList(1)
            .then(res => setOffers(res))
            .catch(err => console.log(err));
        offerCards()
            .then(res => setCards(res))
            .catch(err => console.log(err));
    }, []);

    const handlePageChange = page => {
        offerList(page)
            .then(res => {
                setOffers(res);
            })
            .catch(err => console.log(err));
    };

    const activeStyles = {
        bg: "rgb(26,26,26)",
    };

    const outerLimit = 1;
    const innerLimit = 1;
    if (!offers || !cards) return <Loader />;
    return (
        <>
            <div className="main-container">
                <h1 className="title-white">Negocios Registrados</h1>
                <h2 className="info-white">
                    Puede organizar la información en orden ascendente o
                    descendente haciendo click en el nombre de la columna
                </h2>
                <TableList offers={offers?.data} />
                <Flex mt="1%" mr="4%">
                    <Spacer />
                    <Paginator
                        onPageChange={handlePageChange}
                        pagesQuantity={offers.pages}
                        innerLimit={innerLimit}
                        outerLimit={outerLimit}
                        color="#fff"
                        activeStyles={activeStyles}>
                        <Previous>
                            <ChevronLeftIcon color="#fff" />
                        </Previous>
                        <PageGroup activeStyles={activeStyles} color="#fff">
                            {generatePages(offers.pages)?.map(page => (
                                <Page
                                    key={`paginator_page_${page}`}
                                    page={page}
                                />
                            ))}
                        </PageGroup>
                        <Next>
                            <ChevronRightIcon color="#fff" />
                        </Next>
                    </Paginator>
                </Flex>
                <h1 className="title-white">
                    Vista en Tarjetas de Negocios Registrados
                </h1>
                <h2 className="info-white">
                    Puede organizar la información en orden ascendente o
                    descendente utilizanndo el campo de abajo
                </h2>
                <CardList offerList={cards.data} />
            </div>
            <div className="main-container" />
        </>
    );
}
