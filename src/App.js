import React from 'react';
import 'barecss';
import LayoutEx from './views/layoutEx';
import MouseEx from './views/mouseEx';
import LayoutProvider from './layout/layoutService';
import RenderPropsInputEx from './views/renderPropsInputEx';
import RenderPropsSelectEx from './views/renderPropsSelectEx';
import ContextEx from './views/contextEx';
import {StudentProvider} from './context/StudentProvider';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  const urlParams = new URLSearchParams(window.location.search);
  const layoutEnabled = urlParams.get('layoutEnabled') === 'false' ? false : true;

  return (
    <StudentProvider>
      <Router>
        <LayoutProvider enabled={layoutEnabled}>
          <Switch>
            <Route path="/layoutEx" component={LayoutEx} />
            <Route path="/mouseEx" component={MouseEx} /> 
            <Route path="/renderPropsInputEx" component={RenderPropsInputEx} /> 
            <Route path="/renderPropsSelectEx" component={RenderPropsSelectEx} /> 
            <Route path="/contextEx" component={ContextEx} /> 
          </Switch>
        </LayoutProvider>
      </Router>
    </StudentProvider>
  );
}

export default App;
