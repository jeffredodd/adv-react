import React from 'react';
import TableComponentContext from '../table/tableComponentContext';

export default function contextEx() {
    return (<section>
        <h4>Example 4: Context</h4>
        <TableComponentContext changeGradeRender={(grade, callBack) => {
            return <input type='number' defaultValue={grade} onChange={callBack} />
        }} />
    </section>)
}