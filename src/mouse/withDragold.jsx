import React, { useEffect, useRef } from 'react';
import Draggable from 'draggable';

export default function WithDrag({ children }) {
    let element = useRef(null);
    let drag;

    useEffect(() => {
        if (drag) {
            drag.destroy();
        }
        drag = new Draggable(element.current, () => { });
    })

    return (
        <div
            ref={element}>
            {children}
        </div>
    )
}