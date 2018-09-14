import * as React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  padding: 0 12em;

  @media(max-width: ${993/16}em){
    padding: 0 5em;
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
