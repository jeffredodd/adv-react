import React, { useState } from 'react';
import WithDrag from '../mouse/withDrag';
import Mouse from '../mouse/mouse';

function MouseEx() {

    let [isDragEnabled, toggleDrag] = useState(true)

    const renderMouse = () => {
        if (isDragEnabled) {
            return (
                <WithDrag>
                    <Mouse />
                </WithDrag>
            )
        } else {
            return <Mouse />
        }
    }

    return (
        <section>
            <h4>Example 2: Higher Order Components</h4>
            <span>
                <button
                    onClick={() => {
                        toggleDrag(!isDragEnabled);
                    }}>
                    {isDragEnabled ? 'Disable Drag' : 'Enable Drag'}
                </button>
            </span>
            <br />
            {renderMouse()}
        </section>
    );
}

export default MouseEx;
