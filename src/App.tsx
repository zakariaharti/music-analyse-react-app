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
    --primary-color: #d42661;
  }

  *,
  *:after,
  *:before{
    box-sizing: inherit;
  }

  @font-face{
    font-family: 'opensans';
    src: url('/fonts/OpenSans-Regular.ttf');
  }

  @font-face{
    font-family: 'opensans-bold';
    src: url('/fonts/OpenSans-Bold.ttf');
  }

  @font-face{
    font-family: 'opensans-extrabold';
    src: url('/fonts/OpenSans-ExtraBold.ttf');
  }

  body{
    font-family: opensans;
    margin: 0;
    padding: 0;
  }

  li{
    list-style-type: none;
  }

  a{
    text-decoration: none;
  }
`;

export default App;
