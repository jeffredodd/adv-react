import React from 'react';
import 'barecss';
import LayoutEx from './views/layoutEx';
import MouseEx from './views/mouseEx';
import LayoutProvider from './layout/layoutService';
import RenderPropsEx from './table/renderPropsEx';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  const urlParams = new URLSearchParams(window.location.search);
  const layoutEnabled = urlParams.get('layoutEnabled') === 'false' ? false : true;

  return (
    <Router>
      <LayoutProvider enabled={layoutEnabled}>
        <Switch>
          <Route path="/layoutEx" component={LayoutEx} />
          <Route path="/mouseEx" component={MouseEx} /> 
          <Route path="/renderPropsEx" component={RenderPropsEx} /> 
        </Switch>
      </LayoutProvider>
    </Router>
  );
}

export default App;
