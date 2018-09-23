import * as React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Container from '../ui/Container';
import AlbumsContainer from '../containers/AlbumsContainer';
import SeachComponent from '../components/Search';

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
    cursor: pointer;
    transition: .3s ease-in;

    &:hover{
      background: rgb(122, 173, 64);
    }

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

interface IHomeStateType{
  keyword: string;
}

class Home extends React.Component<{},IHomeStateType> {

  public state = {
    keyword: ''
  }

  public onChange = (event: React.SyntheticEvent) => {
    const target = event.target as HTMLInputElement;

    this.setState({ keyword: target.value });
  }


  public render(){
    return(
    <React.Fragment>
      <StyledWrapper>
        <Container>
           <StyledHeader>
             <Link to="/" className="home">home</Link>
             <a href="https://github.com/zakariaharti" className="login-button">GitHub</a>
           </StyledHeader>
           <StyledBody>
             <h1>music realm</h1>
             <SeachComponent
               keyword={this.state.keyword}
               onChange={this.onChange}
             />
           </StyledBody>
         </Container>
       </StyledWrapper>
      <AlbumsContainer
        keyword={this.state.keyword}
        limit="20"
        offset="0"
       />
  </React.Fragment>
  );
}
};

export default Home;
