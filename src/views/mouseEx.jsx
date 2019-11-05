import React from 'react';
import WithDrag from '../mouse/withDrag';
import Mouse from '../mouse/mouse';

function MouseEx() {
    return (
        <WithDrag>
            <Mouse />
        </WithDrag>
    );
}

export default MouseEx;
