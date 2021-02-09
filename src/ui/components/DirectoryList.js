import axios from "axios";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TablePagination from "@material-ui/core/TablePagination";
import Paper from "@material-ui/core/Paper";
import offerListUrl from "../../settings/env";
import "../../index.scss";

export default function DirectoryList({ offerList, ...props }) {
    let sorted = [];
    // log.debug("Here is your offers list", offerList);
    const [offers, setOffers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    // variables to manage paginator ui material
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    useEffect(() => {
        axios
            .get(offerListUrl.exercise)
            .then(resp => {
                setOffers(resp.data.data);
                setIsLoading(false);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    const handleChangeRowsPerPage = event => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const selectOrderMethod = event => {
        switch (event.target.value) {
            case "mayor":
                sorted = [...offers].sort(function (a, b) {
                    return b.discount - a.discount;
                });
                setOffers(sorted);
                break;
            case "minor":
                sorted = [...offers].sort(function (a, b) {
                    return a.discount - b.discount;
                });
                console.table(sorted);
                setOffers(sorted);
                break;
            default:
                return setOffers([...offers]);
        }
    };
    const emptyRows =
        rowsPerPage - Math.min(rowsPerPage, offers.length - page * rowsPerPage);

    if (isLoading) {
        return <p className="loaderText blink">Loading...</p>;
    }
    return (
        <>
            <section className="bg-gray-500">
                <select
                    name="selectOrder"
                    className="selectButton"
                    onChange={selectOrderMethod}>
                    <option disabled selected>
                        Order by discount
                    </option>
                    <option value="minor">Minor</option>
                    <option value="mayor">Mayor</option>
                </select>
            </section>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead className="bg-gray-500">
                        <TableRow>
                            <TableCell>Offers</TableCell>
                            <TableCell align="right">Discount</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {offers
                            .slice(
                                page * rowsPerPage,
                                page * rowsPerPage + rowsPerPage,
                            )
                            .map((row, index) => (
                                <TableRow key={row.name} hover>
                                    <TableCell>{row.name}</TableCell>
                                    <TableCell align="right">
                                        {row.discount ? row.discount : 0}
                                    </TableCell>
                                </TableRow>
                            ))}
                        {emptyRows > 0 && (
                            <TableRow style={{ height: 53 * emptyRows }}>
                                <TableCell colSpan={6} />
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
                <TablePagination
                    rowsPerPageOptions={[
                        5,
                        10,
                        25,
                        { value: -1, label: "All" },
                    ]}
                    component="div"
                    count={offers.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                />
            </TableContainer>
        </>
    );
}
