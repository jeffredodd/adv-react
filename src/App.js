import React from 'react';
import 'barecss';
import Example1 from './views/example1';
import Example2 from './views/example2';
import LayoutProvider from './layout/layoutService';
import Example3a from './views/example3a';
import Example3b from './views/example3b';
import Example4 from './views/example4';
import {StudentProvider} from './context/studentProvider';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <StudentProvider>
      <Router>
        <LayoutProvider>
          <Switch>
            <Route path="/example1" component={Example1} />
            <Route path="/example2" component={Example2} /> 
            <Route path="/example3a" component={Example3a} /> 
            <Route path="/example3b" component={Example3b} /> 
            <Route path="/example4" component={Example4} /> 
          </Switch>
        </LayoutProvider>
      </Router>
    </StudentProvider>
  );
}

export default App;
