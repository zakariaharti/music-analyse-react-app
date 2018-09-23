import * as React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  padding: 0 12em;


  @media(max-width: ${993/16}em){
    padding: 0 5em;
  }

  @media(max-width: ${390/16}em){
    padding: 1.2em;
  }
`;

const Container: React.SFC<{}> = (props) => {
  return(
    <StyledContainer>
      {props.children}
    </StyledContainer>
  );
};

export default Container;
