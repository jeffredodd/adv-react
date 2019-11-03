import React from 'react';

class TableComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [
          { id: 1, name: 'Brad', grade: 6 },
          { id: 2, name: 'CJ', grade: 8 },
          { id: 3, name: 'Greg', grade: 5 },
          { id: 4, name: 'Jenna', grade: 4 },
          { id: 5, name: 'Dylan', grade: 7 },
          { id: 5, name: 'Ryan', grade: 2 }
      ]
    };
  }

  changeGrade = (id, value) => {
    let data = this.state.data;
    if(value) {
      data[id-1].grade = value;
      this.setState({data: data});
    }
  }

  render() {
    const tableRows = this.state.data.map(r => {
        return (
            <tr>
                <td>{r.name}</td>
                <td>{r.grade}</td>
                <td>{this.props.changeGradeRender(r.grade, (e) => { this.changeGrade(r.id, e.target.value)})}</td>
            </tr>
        )
    })

    return (
        <table>
            <tr>
                <th>Name</th>
                <th>Grade</th>
                <th>Action</th>
            </tr>
            {tableRows}
        </table>
    )
  }

}

TableComponent.defaultProps = {
  changeGradeRender: () => {}
}

export default TableComponent;