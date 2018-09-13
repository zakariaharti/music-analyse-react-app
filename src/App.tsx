import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { injectGlobal } from 'styled-components';

import Home from './pages/HomeComponent';

const App: React.SFC<{}> = () => {
  return(
    <Router>
      <Route exact={true} path="/" component={Home} />
    </Router>
  )
}

injectGlobal`
  :root{
    box-sizing: border-box;
  }

  *,
  *::after,
  *::before{
    box-sizing: border-box;
  }

  @font-face{
    font-family: 'opensans';
    src: url('/fonts/OpenSans-Regular.ttf');
  }

  html{
    font-family: opensans;
  }
`;

export default App;
