import React, { useState } from 'react';

export default function TableComponent({ changeGradeRender }) {
  const [students, changeGrade] = useState([
    { id: 1, name: 'Brad', grade: 6 },
    { id: 2, name: 'CJ', grade: 8 },
    { id: 3, name: 'Greg', grade: 5 },
    { id: 4, name: 'Jenna', grade: 4 },
    { id: 5, name: 'Dylan', grade: 7 },
    { id: 5, name: 'Ryan', grade: 2 }
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
      <tr>
        <th>Name</th>
        <th>Grade</th>
        <th>Action</th>
      </tr>
      {students.map(r => {
        return (
          <tr>
            <td>{r.name}</td>
            <td>{r.grade}</td>
            <td>{changeGradeRender(r.grade, (e) => { changeGrade(updateRecord(r.id, e.target.value)) })}</td>
          </tr>
        )
      })}
    </table>
  )
}
