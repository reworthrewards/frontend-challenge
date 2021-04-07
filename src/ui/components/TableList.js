import { Table, Thead, Tbody, Tr, Th, Td, chakra } from "@chakra-ui/react";
import { TriangleDownIcon, TriangleUpIcon } from "@chakra-ui/icons";
import { useTable, useSortBy } from "react-table";
export default function TableList({ offers }) {
    const data = useMemo(() => offers, [offers]);

    const columns = useMemo(
        () => [
            {
                Header: "Nombre del Negocio",
                accessor: "name",
            },
            {
                Header: "Descuento",
                accessor: "dv_cashback",
            },
            {
                Header: "Dirección",
                accessor: "dv_address",
            },
            {
                Header: "Fecha de expiración",
                accessor: "dv_expires",
            },
        ],
        [],
    );

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({ columns, data }, useSortBy);

    return (
        <Table
            color="#fff"
            borderRadius="4%"
            border="1px solid #000"
            m="0 4% 0 4%"
            {...getTableProps()}>
            <Thead>
                {headerGroups.map((headerGroup, iG) => (
                    <Tr
                        border="1px solid #000"
                        textAlign="center"
                        key={iG}
                        {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map((column, iH) => (
                            <Th
                                {...column.getHeaderProps(
                                    column.getSortByToggleProps(),
                                )}
                                isNumeric={column.isNumeric}
                                w="300px"
                                key={iH}
                                border="1px solid #000">
                                {column.render("Header")}
                                <chakra.span pl="4">
                                    {column.isSorted ? (
                                        column.isSortedDesc ? (
                                            <TriangleDownIcon aria-label="sorted descending" />
                                        ) : (
                                            <TriangleUpIcon aria-label="sorted ascending" />
                                        )
                                    ) : null}
                                </chakra.span>
                            </Th>
                        ))}
                    </Tr>
                ))}
            </Thead>
            <Tbody {...getTableBodyProps()}>
                {rows.map((row, iR) => {
                    prepareRow(row);
                    return (
                        <Tr
                            border="1px solid #000"
                            {...row.getRowProps()}
                            key={iR}>
                            {row.cells.map((cell, iC) => (
                                <Td
                                    border="1px solid #000"
                                    textAlign="center"
                                    key={iC}
                                    {...cell.getCellProps()}
                                    isNumeric={cell.column.isNumeric}>
                                    {cell.render("Cell")}
                                </Td>
                            ))}
                        </Tr>
                    );
                })}
            </Tbody>
        </Table>
    );
}
