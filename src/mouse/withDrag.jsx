import React from 'react';
import Draggable from 'draggable';

export default class WithDrag extends React.Component {
    constructor(props) {
        super(props);
        this.element = null;
    }

    componentDidMount() {
        new Draggable(this.element, () => {});
    }

    render() {
        const {children} = this.props;
        return (
            <span
                ref={(e => {
                    this.element = e;
                })}>
                {children}
            </span>
        )
    }
}