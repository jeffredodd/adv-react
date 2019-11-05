import React from 'react';
import TableComponent from '../table/tableComponent';

export default function RenderPropsEx() {
  return (
    <section>
      <h4>Example 3: Render Props (Input)</h4>
      <TableComponent changeGradeRender={(grade, callBack) => {
        return <input type='number' defaultValue={grade} onChange={callBack} />
      }} />
    </section>
  )
}
