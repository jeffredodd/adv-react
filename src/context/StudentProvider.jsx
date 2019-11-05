import React, { useState } from 'react';
import { StudentContext } from './StudentContext';

export function StudentProvider({children}) {
    const [students, changeGrade] = useState([
        { id: 1, name: 'Brad', grade: 6 },
        { id: 2, name: 'CJ', grade: 8 },
        { id: 3, name: 'Greg', grade: 5 },
        { id: 4, name: 'Jenna', grade: 4 },
        { id: 5, name: 'Dylan', grade: 7 },
        { id: 5, name: 'Ryan', grade: 2 }
    ])

    const updateRecord = (id, value) => {
        let data = this.state.students;
        if (value) {
            data[id - 1].grade = value;
            changeGrade([...data]);
        }
    }

    return (
        <StudentContext.Provider
            value={{
                students: students,
                updateRecords: updateRecord
            }}>
            {children}
        </StudentContext.Provider>)
}
