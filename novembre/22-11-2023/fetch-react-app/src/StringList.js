import React, { useState } from 'react';

function StringList(props) {
  return (
    <ul>
      {props.dataList.map(function (dataItem) {
        return <li key={dataItem}>{dataItem}</li>
        //return <li key={planet}>{planet} onClick={function(planet){}}</li>
      })}
    </ul>
  );
}

export default StringList;