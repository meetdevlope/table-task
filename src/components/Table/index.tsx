import React, { FC } from "react";
import { useTable } from "react-table";
import "../../styles/table.css";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


interface Props {
  columns: any;
  data: any;
}

const TableComp: FC<Props> = ({ columns, data }) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });

  // Render the UI for your table
  return (
    // <div className="table-main-div">
     <div className="table-wrapper" >
      <Accordion
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Panel #One Layout comes here</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <div className="table-div-main" >
          <table {...getTableProps()}>
          {/* <thead >
                    {headerGroups.map(headerGroup =>
                    (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                      {headerGroup.headers.map(column => (
                        <th  {...column.getHeaderProps()}>{column.render('Header')}</th>
                      ))}
                    </tr>
                  ))}
                </thead> */}
          <thead>
            <tr>
              <th rowSpan={2}>Column <br /> # One</th>
              <th rowSpan={2}>This is <br /> column <br /> # Two </th>
              <th colSpan={16}>Section # 1</th>
              <th colSpan={16} rowSpan={2}>
                Section # 2
              </th>
            </tr>
            <tr>
              <th colSpan={4}>Sub-Section # 1</th>
              <th colSpan={4}>Sub-Section # 2</th>
              <th colSpan={4}>Sub-Section # 3</th>
              <th colSpan={4}>Sub-Section # 4</th>
            </tr>
            <tr>
              <th></th>
              <th></th>
              <th>C#0</th>
              <th>C#1</th>
              <th>C#2</th>
              <th>C#3</th>
              <th>C#4</th>
              <th>C#5</th>
              <th>C#6</th>
              <th>C#7</th>
              <th>C#8</th>
              <th>C#9</th>
              <th>C#10</th>
              <th>C#11</th>
              <th>C#12</th>
              <th>C#13</th>
              <th>C#14</th>
              <th>C#15</th>
              <th>C#0</th>
              <th>C#1</th>
              <th>C#2</th>
              <th>C#3</th>
              <th>C#4</th>
              <th>C#5</th>
              <th>C#6</th>
              <th>C#7</th>
              <th>C#8</th>
              <th>C#9</th>
              <th>C#10</th>
              <th>C#11</th>
              <th>C#12</th>
              <th>C#13</th>
              <th>C#14</th>
              <th>C#15</th>
            </tr>
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row, i) => {
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
        </AccordionDetails>
      </Accordion>
      
      
    </div>
      
    // </div>
  );
};

export default TableComp;
