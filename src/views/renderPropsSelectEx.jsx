import React from 'react';
import TableComponent from '../table/tableComponent';

function RenderPropsEx() {
  return (
    <TableComponent changeGradeRender={(grade, callBack) => {
      return (
        <select onChange={callBack}>
          {[1,2,3,4,5,6,7,8,9,10,11,12,13].map((g) => {
            const isSelected = grade === g;
            return (
              <option selected={isSelected} value={g}>
                {g}
              </option>)
          })}
        </select>
      );
  }}/>
  )
}

export default RenderPropsEx;
