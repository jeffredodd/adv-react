import React from 'react';
import TableComponentContext from '../table/tableComponentContext';

export default function contextEx() {
    return <TableComponentContext changeGradeRender={(grade, callBack) => {
        return <input type='number' defaultValue={grade} onChange={callBack} />
    }} />
}