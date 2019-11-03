import React from 'react';
import TableComponent from './tableComponent';

class RenderPropsEx extends React.Component {
  render() {
    return <TableComponent changeGradeRender={(grade, callBack) => {
        return <input type='number' defaultValue={grade} onChange={callBack} />
    }}/>;
  }

}

export default RenderPropsEx;
