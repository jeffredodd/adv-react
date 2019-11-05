import React from 'react';
import {StudentContext} from '../context/studentContext';

export default function TableComponent({ changeGradeRender }) {
  return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Grade</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <StudentContext.Consumer>
            {({ students, updateRecords }) => {
              return students.map(r => {
                
              return (
                <tr key={'row-' + r.id}>
                  <td key={'name-' + r.id}>{r.name}</td>
                  <td key={'grade-' + r.id}>{r.grade}</td>
                  <td key={'change-' + r.id}>{changeGradeRender(r.grade, (e) => { updateRecords(r.id, e.target.value) })}</td>
                </tr>
              )
            })
          }}
          </StudentContext.Consumer>

        </tbody>
      </table>

  )
}