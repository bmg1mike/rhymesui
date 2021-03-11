import React from 'react'
import styled from 'styled-components/macro'
import { useTable, useGlobalFilter, usePagination } from 'react-table'
import { GlobalFilter } from './GlobalFilter'


export const Table = ({ columns, data }) => {
    const tableInstance = useTable({
        columns,
        data,
        initialState: { pageIndex: 0 }
      }, useGlobalFilter, usePagination)
    const { getTableProps, getTableBodyProps, headerGroups, prepareRow, state, setGlobalFilter,
        page,
        canPreviousPage,
        canNextPage,
        pageOptions,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize } = tableInstance
    const { globalFilter, pageIndex, pageSize } = state
    // pageSize = 10;
        const pageNumbers = []
    for (let i = 0; i < pageOptions.length; i++){
        pageNumbers.push(i+1)
    }
    // console.log(pageOptions)
    return (
        <>
            <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
            {data ? 
                <TableStyle {...getTableProps()}>
                    <thead >
                        {headerGroups.map((headerGroup) => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map((columns) => (
                                    <th {...columns.getHeaderProps()} >{columns.render('Header')}</th>
                                ))}
                            </tr>
                        ))
                        }
                    </thead>
                    <tbody {...getTableBodyProps()}>
                        {page.map((row) => {
                            prepareRow(row)
                            return (
                                <tr {...row.getRowProps()}>
                                    {row.cells.map((cell) => {
                                        return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                    })}
                                </tr>
                            )
                        })}
                    </tbody>
                </TableStyle>
                : <NoDataStyle>No Books Added Yet!!</NoDataStyle>
            }
            {data ? <PageButtonStyle>
        <button onClick={() => previousPage()} disabled={!canPreviousPage} className="control">
          {'<'}
        </button>{' '}
        <PageNumbersStyle>
                    {pageNumbers.map(number =>( 
                        <a href="#" className="page-link" key={number} onClick={e => {
                            const page = e.target.textContent ? Number(e.target.textContent) - 1 : 0;
                            gotoPage(page);
                     }}>
                         {number}
                    </a>
                        
            ))}
        </PageNumbersStyle>
        <button onClick={() => nextPage()} disabled={!canNextPage} className="control">
          {'>'}
        </button>{' '}
            </PageButtonStyle>
      : null}
            </>
        )

}

const TableStyle = styled.table`
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
  max-height: 70%;
  border: 1px solid red;
  td, th {
    border: 1px solid #ddd;
    padding: 6px;
  }
  thead{
    background-color: #E40000;
  }
  tr:nth-child(even){background-color: #f2f2f2;}

  tr:hover {  background-color: rgba(228, 0, 0, 0.1);}
  th {
  padding-top: 1.5%;
  padding-bottom: 1.5%;
  text-align: left;
  color: white;
}
`
const PageButtonStyle = styled.div`
    display: flex;
    heigth: 1rem;
    align-items: center;
    .control{
        border: 1px solid #C4C4C4;
        border-radius: 0.4rem;
        width: 1.5rem;
        text-align: center;
        color: #8A8A8A;
        height: 100%;
        
    }
`

const PageNumbersStyle = styled.span`
    display: flex;
    height: 100%;
    align-items: center;
    a{
        text-decoration: none;
        color: #E40000;
        list-style: none;
        border: 1px solid #C4C4C4;
        border-radius: 0.4rem;
        width: 1.5rem;
        text-align: center;
        margin: .2rem;
        height: 100%;
        padding-top: 5%;
    }
    a:hover{
        color: #fff;
        cursor: pointer;
        border: 1px solid #E40000;
        background-color: #E40000;
    }

`
const NoDataStyle = styled.p`
    align-self: center;
    font-family: Arial, Helvetica, sans-serif;
    color: #E40000;
`