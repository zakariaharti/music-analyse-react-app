import * as React from 'react';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';

import Container from '../ui/Container';

const StyledWrapper = styled.div`
  padding: 3em 0;
  background-color: #2d312d;
  padding-bottom: 4em;
`;

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;

  @media(max-width: ${667/16}em){
    flex-direction: column;
    align-items: center;
  }

  a{
    color: #ffffff;
    text-transform: uppercase;
  }

  a.login-button{
    color: white;
    text-transform: uppercase;
    padding: 10px 22px;
    background: var(--primary-color);
    border-radius: 6px;

    @media(max-width: ${667/16}em){
      align-self: stretch;
      margin-top: 10px;
      text-align: center;
    }
  }
`;

const StyledBody = styled.div`
  text-align: center;

  h1{
    color: #ffffff;
    text-transform: capitalize;
    font-family: opensans-extrabold;
    font-size: 4em;

    @media(max-width: ${667/16}em){
      font-size: 3em;
    }
  }

  form{
    position: relative;
  }

  input{
    width: 80%;
    padding: 15px;
    font-size: 1.3em;
    border-radius: 6px;
    border: none;
    background: #d8d8d8;
    padding-left: 64px;

    @media(max-width: ${835/16}em){
      width: 100%;
    }
  }

  .search-icon{
    position: absolute;
    top: 18px;
    left: 105px;
    color: gray;
    font-size: 1.2em;

    @media(max-width: ${835/16}em){
      left: 27px;
    }
  }
`;

const Home:React.SFC<{}> = () => {
  return(
    <StyledWrapper>
      <Container>
        <StyledHeader>
          <a href="#" className="home">home</a>
          <a href="#" className="login-button">login</a>
        </StyledHeader>
        <StyledBody>
          <h1>music realm</h1>
          <form>
            <input type="text" placeholder="type album name.." />
            <FaSearch className="search-icon" />
          </form>
        </StyledBody>
      </Container>
    </StyledWrapper>
  );
};

export default Home;
