import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './pages/HomeComponent';

const App: React.SFC<{}> = () => {
  return(
    <Router>
      <Route exact={true} path="/" component={Home} />
    </Router>
  )
}

export default App;
