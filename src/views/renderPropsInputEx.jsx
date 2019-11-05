import React from 'react';
import TableComponent from '../table/tableComponent';

export default function RenderPropsEx() {
  return (
    <TableComponent changeGradeRender={(grade, callBack) => {
      return <input type='number' defaultValue={grade} onChange={callBack} />
    }} />
  )
}
