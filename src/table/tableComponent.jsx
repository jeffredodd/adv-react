import React, { useState } from 'react';

export default function TableComponent({ changeGradeRender }) {
  const [students, changeGrade] = useState([
    { id: 1, name: 'Brad', grade: 6 },
    { id: 2, name: 'CJ', grade: 8 },
    { id: 3, name: 'Greg', grade: 5 },
    { id: 4, name: 'Jenna', grade: 4 },
    { id: 5, name: 'Dylan', grade: 7 },
    { id: 6, name: 'Ryan', grade: 2 }
  ]);

  const updateRecord = (id, value) => {
    let data = students;
    if (value) {
      data[id - 1].grade = value;
      return [...data]; //Must create new array or rerender wont occur
    }
    return data;
  }

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
        {students.map(r => {
          return (
            <tr key={'row-' + r.id}>
              <td key={'name-' + r.id}>{r.name}</td>
              <td key={'grade-' + r.id}>{r.grade}</td>
              <td key={'change-' + r.id}>
                {changeGradeRender(r.grade, (e) => {
                  changeGrade(updateRecord(r.id, e.target.value)) 
                })}
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
