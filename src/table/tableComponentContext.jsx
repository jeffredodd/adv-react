import React from 'react';
import {StudentContext} from '../context/StudentContext';

export default function TableComponent({ changeGradeRender }) {
  return (
      <table>
        <tr>
          <th>Name</th>
          <th>Grade</th>
          <th>Action</th>
        </tr>
        <StudentContext.Consumer>
          {({ students, updateRecords }) => {
            return students.map(r => {
              
            return (
              <tr>
                <td>{r.name}</td>
                <td>{r.grade}</td>
                <td>{changeGradeRender(r.grade, (e) => { updateRecords(r.id, e.target.value) })}</td>
              </tr>
            )
          })
          }}
        </StudentContext.Consumer>
      </table>

  )
}
