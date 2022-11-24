import { useTable } from 'react-table'

const ReactTable = ({ columns, data }) => {
  const tableInstance = useTable({ columns, data })

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance
  return (
    // apply the table props
    <table {...getTableProps()}>
      <thead>
        {
          // Loop over the header rows
          headerGroups.map((headerGroup, i) => (
            // Apply the header row props
            <tr key={i} {...headerGroup.getHeaderGroupProps()}>
              {
                // Loop over the headers in each row
                headerGroup.headers.map((column, i) => (
                  // Apply the header cell props
                  <th key={i} {...column.getHeaderProps()}>
                    {
                      // Render the header
                      column.render('Header')
                    }
                  </th>
                ))
              }
            </tr>
          ))
        }
      </thead>
      {/* Apply the table body props */}
      <tbody {...getTableBodyProps()}>
        {
          // Loop over the table rows
          rows.map((row, i) => {
            // Prepare the row for display
            prepareRow(row)
            return (
              // Apply the row props
              <tr key={i} {...row.getRowProps()}>
                {
                  // Loop over the rows cells
                  row.cells.map((cell, i) => {
                    // Apply the cell props
                    return (
                      <td key={i} {...cell.getCellProps()}>
                        {
                          // Render the cell contents
                          cell.render('Cell')
                        }
                      </td>
                    )
                  })
                }
              </tr>
            )
          })
        }
      </tbody>
    </table>
  )
}

export default ReactTable
