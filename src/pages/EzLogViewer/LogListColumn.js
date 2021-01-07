import { textFilter, selectFilter } from 'react-bootstrap-table2-filter'; 
import { BiErrorCircle } from 'react-icons/bi';
import React from 'react';
import Moment from 'react-moment';

export const selMethodOpts = {
  'GET': 'GET',
  'POST': 'POST'
};

export const selErrOpts = {
  'YES': 'YES',
  'NO': 'NO'
};

const responseCodeFormatter = (cell, row, rowIndex, formatExtraData) => {
  if(cell === 'YES') {
    return (
      < BiErrorCircle style={{color:'red', fontSize:'larger'}}/>
    );
  }else {

  }
}

/* 테이블 헤더 Formatter */
// const headerFormatter = (column, colIndex, { sortElement, filterElement }) => {
//   return (
//     <div style={{ display: "flex", flexDirection: "column" }}>
//       <span>
//         {column.text} {sortElement}
//       </span>
//       {filterElement}
//     </div>
//   );
// };

const occurrenceDateFormatter = (cell, row) => {
  return (
    <span> <Moment format="HH:mm:ss">{row.occurrenceDate}</Moment> </span>
  );
}

const logInfoFormatter = (cell, row) => {
  return (
    <span> { row.logInfo } </span>
  );
}

const processTimeFormatter = (cell, row) => {
  return (
    <span> { row.processTime } </span>
  );
}

export const logListColumns = [{
    dataField: 'ip',
    text: 'IP',
    //align: 'center',
    headerAlign: 'center',
    style: {width:'15%', maxWidth:'15%'},
    headerStyle: {width:'15%', maxWidth:'15%'},
    filter: textFilter({
      placeholder: 'Enter IP',
      style: {
        maxWidth: '105px',
        fontSize: 'smaller',
      }
    }),
  }, {
    dataField: 'occurrenceDate',
    text: '발생시점',
    align: 'center',
    headerAlign: 'center',
    style: {width:'10%', maxWidth:'10%'},
    headerStyle: {width:'10%', maxWidth:'10%'},
    formatter: occurrenceDateFormatter
  }, {
    dataField: 'logInfo',
    text: 'URL',
    style: {width:'55%', maxWidth:'55%'},
    headerStyle: {width:'55%', maxWidth:'55%'},
    filter: textFilter({
      placeholder: 'Enter URL',
      style: {
        fontSize: 'smaller',
      }
    }),
    formatter: logInfoFormatter
  }, {
    dataField: 'processMethod',
    text: 'HTTP Method',
    align: 'center',
    headerAlign: 'center',
    formatter: cell => selMethodOpts[cell],
    filter: selectFilter({
      options: selMethodOpts,
      placeholder: 'ALL',
      style: {
        maxWidth: '75px',
        alignItems: 'center'
      }
    }),
    hidden: true
  }, {
    dataField: 'url',
    text: 'URL',
    hidden: true,
  }, {
    dataField: 'processTime',
    text: '성능(ms)',
    headerAlign: 'center',
    align: 'right',
    style: {width:'10%', maxWidth:'10%'},
    headerStyle: {width:'10%', maxWidth:'10%'},
    formatter: processTimeFormatter
  }, {
    dataField: 'errorYN',
    text: '에러',
    //headerAlign: 'center',
    align: 'center',
    style: {width:'10%', maxWidth:'10%'},
    headerStyle: {width:'10%', maxWidth:'10%'},
    formatter: responseCodeFormatter,
    filter: selectFilter({
      options: selErrOpts,
      placeholder: 'ALL',
      style: {
        maxWidth: '70px',
        fontSize: 'smaller',
      }
    }),
  }];