import React from 'react';
import { Link } from 'react-router-dom';

export default function LayoutProvider({children, enabled}) {
    // Using a query parameter to simuate service status
    const urlParams = new URLSearchParams(window.location.search);
    const layoutEnabled = urlParams.get('layoutEnabled') === 'false' ? false : true;

    try {
        if(!layoutEnabled) { // Validate that service is active 
            throw(layoutEnabled); // Throw if service isn't active
        }
        return (
            // If service is active then we serve layout
            <React.Fragment>
                <header>
                    <h2>React Concept Demonstration</h2>
                </header>
                <nav>
                    <ul
                        style={{
                            textAlign: 'left'
                        }}>
                        <li>
                            <Link to='/example1'>Example 1</Link>
                        </li>
                        <li>
                            <Link to='/example2'>Example 2</Link>
                        </li>
                        <li>
                            <Link to='/example3a'>Example 3a</Link>
                        </li>
                        <li>
                            <Link to='/example3b'>Example 3b</Link>
                        </li>
                        <li>
                            <Link to='/example4'>Example 4</Link>
                        </li>
                    </ul>
                </nav>
                <main>
                    {children}
                </main>
            </React.Fragment>
        )
    } catch (e) {
        // Don't break view if layout is down
        return children;
    }
}