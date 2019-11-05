import React from 'react';
import TableComponent from '../table/tableComponent';

const possibleGrades = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

function RenderPropsEx() {
  return (
    <section>
      <h4>Example 3: Render Props (Input)</h4>
      <TableComponent changeGradeRender={(grade, callBack) => {
        return (
          <select defaultValue={grade} onChange={callBack}>
            {possibleGrades.map((g) => {
              return (
                <option key={`option-${g}`} value={g}>
                  {g}
                </option>)
            })}
          </select>
        );
      }} />
    </section>
  )
}

export default RenderPropsEx;
