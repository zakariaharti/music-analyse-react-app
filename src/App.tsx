import * as React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import styled, { injectGlobal } from 'styled-components';

import Home from './pages/HomeComponent';
import Album from './pages/AlbumComponent';
import Track from './pages/TrackComponent';
import Container from './ui/Container';
import Footer from './ui/Footer';

const StyledNotFound = styled.div`
  padding: 200px 0;
  text-align: center;

  h1{
    color: rgba(199, 199, 199, 0.85);
  }

  a{
    text-transform: capitalize;
    background: rgba(212, 212, 212, 0.67);
    padding: 5px 20px;
    border-radius: 6px;
    color: gray;
  }
`;

const App: React.SFC<{}> = () => {
  return(
    <BrowserRouter>
      <Switch>
        <Route exact={true} path="/" component={Home} />
        <Route path="/analyse/album/:id" component={Album} />
        <Route path="/analyse/track/:id" component={Track} />
        <Route render={() => {
          return(
            <Container>
              <StyledNotFound>
                <h1>Oops! the page your are looking for couldn't be foung</h1>
                <Link to="/">go home</Link>
              </StyledNotFound>
              <Footer />
            </Container>
          )
        }} />
      </Switch>
    </BrowserRouter>
  )
}

injectGlobal`
  :root{
    box-sizing: border-box;
    --primary-color: #8bc34a;
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

  .error-note{
    text-align: center;
    padding: 20px;
    color: #F44336;
    font-size: .9em;
  }
`;

export default App;
