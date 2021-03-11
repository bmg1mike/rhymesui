// import React from 'react'
// import styled from 'styled-components/macro'
// import { useTable, useGlobalFilter } from 'react-table'
// import { GlobalFilter } from './GlobalFilter'

type TableProps = {
    columns: [],
    data: []
}
//     type Cell = {
//       render: (type: string) => any;
//       getCellProps: () => any;
//       column: [];
//       row: Row;
//       state: any;
//       value: any;
//     };

//     type Row = {
//       index: number;
//       cells: Cell[];
//       getRowProps: () => any;
//       originalRow: any;
//     };
export const Table = () => {
    return (
        <div>
            <h1>Yo</h1>
        </div>
    )
}
// export const Table:  React.FC<TableProps> = ({ columns, data }) => {
//     const tableInstance = useTable({
//         columns,
//         data
//       }, useGlobalFilter)
//     const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow, state, setGlobalFilter } : any= tableInstance
//     const { globalFilter } = state
    
//     return (
//             <>
//                 <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
//                 <TableStyle {...getTableProps()}>
//                     <thead >
//                         {headerGroups.map((headerGroup: Record<string, any>) => (
//                             <tr {...headerGroup.getHeaderGroupProps()}>
//                                 {headerGroup.headers.map((columns: any) => (
//                                     <th {...columns.getHeaderProps()} >{columns.render('Header')}</th>
//                                 ))}
//                             </tr>
//                         ))
//                         }
//                     </thead>
//                     <tbody {...getTableBodyProps()}>
//                         {rows.map((row: Row) => {
//                             prepareRow(row)
//                             return (
//                                 <tr {...row.getRowProps()}>
//                                     {row.cells.map((cell) => {
//                                         return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
//                                     })}
//                                 </tr>
//                             )
//                         })}
//                     </tbody>
//                 </TableStyle>
//             </>
//         )

// }

// const TableStyle = styled.table`
//   font-family: Arial, Helvetica, sans-serif;
//   border-collapse: collapse;
//   width: 100%;
//   max-height: 70%;
//   border: 1px solid red;
//   td, th {
//     border: 1px solid #ddd;
//     padding: 8px;
//   }
//   thead{
//     background-color: #E40000;
//   }
//   tr:nth-child(even){background-color: #f2f2f2;}

//   tr:hover {  background-color: rgba(228, 0, 0, 0.1);}
//   th {
//   padding-top: 2.5%;
//   padding-bottom: 2.5%;
//   text-align: left;
//   color: white;
// }
// `
