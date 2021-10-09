import React from 'react';
import './datasetPage.css';
import {useTable} from 'react-table';
import {useSelector, useDispatch} from "react-redux"

const DatasetPage = () => {
    const paths = useSelector((state) => state.paths)  
    const dispatch = useDispatch()
    const data = React.useMemo(
        () => [
            {
                col1: 'Name',
                col2: 'string',
            },
            {
                col1: 'Surname',
                col2: 'string',
            },
            {
                col1: 'Login',
                col2: 'string',
            },
        ],
        []
    )
    const columns = React.useMemo(
        () => [
            {
                Header: 'Название поля',
                accessor: 'col1', // accessor is the "key" in the data
            },
            {
                Header: 'Тип',
                accessor: 'col2',
            },
        ],
        []
    )

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({columns, data})

    return (
        <div className="datasetPage">

            <h3 className="datasetTitle">Пользователь</h3>

            <table {...getTableProps()}>
                <thead>
                {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                            <th
                                {...column.getHeaderProps()}
                            >
                                {column.render('Header')}
                            </th>
                        ))}
                    </tr>
                ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                {rows.map(row => {
                    prepareRow(row)
                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map(cell => {
                                return (
                                    <td
                                        {...cell.getCellProps()}
                                    >
                                        {cell.render('Cell')}
                                    </td>
                                )
                            })}
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </div>

    );
};

export default DatasetPage;