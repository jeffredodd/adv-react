import React from 'react';
import { Link } from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <h4>This is some content</h4>
            <ul>
                <li><a href='/layoutEx?layoutEnabled=true'>Enable Layout</a></li>
                <li><a href='/layoutEx?layoutEnabled=false'>Disable Layout</a></li>
            </ul>
        </div>
    );
}

export default App;
