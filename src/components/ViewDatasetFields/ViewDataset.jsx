import React, {useEffect} from "react";
// import "./datasetPage.css";
import {useTable} from "react-table";
import {useSelector, useDispatch} from "react-redux";
// import { getEntity } from "../../store/features/pathMiddlewares";
// import { useParams } from "react-router";

const DatasetPage = () => {
    const dataset = useSelector((state) => state.datasets);
    const dispatch = useDispatch();
    // const { urn } = useParams();
    // const data = React.useMemo(
    //     () => [
    //         {
    //             col1: 'Name',
    //             col2: 'string',
    //         },
    //         {
    //             col1: 'Surname',
    //             col2: 'string',
    //         },
    //         {
    //             col1: 'Login',
    //             col2: 'string',
    //         },
    //     ],
    //     []
    // )
    const columns = React.useMemo(
        () => [
            {
                Header: "Название поля",
                accessor: "name", // accessor is the "key" in the data
            },
            {
                Header: "Тип",
                accessor: "type",
            },
            {
                Header: "Правило",
                accessor: "rule.operation",
            },
        ],
        []
    );
    const data = dataset?.currentDataset?.struct?.fields?.length
        ? dataset?.currentDataset?.struct?.fields
        : [];
    const {getTableProps, getTableBodyProps, headerGroups, rows, prepareRow} =
        useTable({columns, data});
    // useEffect(() => {
    //   dispatch(getEntity(urn));
    // }, [urn]);
    return (
        <div className="datasetPage">
            {/* <h3 className="datasetTitle">{model.name}</h3> */}

            <table {...getTableProps()}>
                <thead>
                {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map((column) => (
                            <th {...column.getHeaderProps()}>{column.render("Header")}</th>
                        ))}
                    </tr>
                ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                {rows.map((row) => {
                    prepareRow(row);
                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map((cell) => {
                                return (
                                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                                );
                            })}
                        </tr>
                    );
                })}
                </tbody>
            </table>
        </div>
    );
};

export default DatasetPage;
