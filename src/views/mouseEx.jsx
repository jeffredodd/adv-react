import React from 'react';
import WithDrag from '../mouse/withDrag';
import Mouse from '../mouse/mouse';

function App() {
    return (
        <WithDrag>
            <Mouse />
        </WithDrag>
    );
}

export default App;
