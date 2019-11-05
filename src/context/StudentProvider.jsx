import React, { useState } from 'react';
import { StudentContext } from './studentContext';

export function StudentProvider({children}) {
    const [students, changeGrade] = useState([
        { id: 1, name: 'Brad', grade: 6 },
        { id: 2, name: 'CJ', grade: 8 },
        { id: 3, name: 'Greg', grade: 5 },
        { id: 4, name: 'Jenna', grade: 4 },
        { id: 5, name: 'Dylan', grade: 7 },
        { id: 6, name: 'Ryan', grade: 2 }
    ])

    const updateRecord = (id, value) => {
        if (value) {
            students[id - 1].grade = value;
            changeGrade([...students]);
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
