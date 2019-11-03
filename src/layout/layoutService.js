import React from 'react';
import { Link } from 'react-router-dom';

export default function LayoutProvider({children, enabled}) {
    if(!enabled) {
        return children;
    } else {
        return (
            // Instead of static content, imagine this is a prebuild component integrated w/a LayoutService
            <React.Fragment>
                <header>
                    <h1>React Concept Demonstration</h1>
                </header>
                <nav>
                    <ul>
                        <li>
                            <Link to='/layoutEx'>Dependency Injection</Link>
                        </li>
                        <li>
                            <Link to='/mouseEx'>Higher Order Component</Link>
                        </li>
                        <li>
                            <Link to='/renderPropsEx'>Render Props</Link>
                        </li>
                    </ul>
                </nav>
                <main>
                    {children}
                </main>
                <footer>
                    My Footer
                </footer>
            </React.Fragment>
        )
    }
}