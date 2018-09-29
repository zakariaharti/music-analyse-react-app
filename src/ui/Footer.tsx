import * as React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.div`
  width: 100%;
  text-align: center;
  padding: 20px;

  h3{
    font-size: 1.5em;
    text-transform: capitalize;
    color: gray;
  }

  p{
    font-size: .9em;
    color: rgba(128, 128, 128, 0.81);
  }
`;

const Footer: React.SFC<{}> = () => {
  return(
    <StyledFooter>
      <h3>music analyses</h3>
      <p>copyrights all rights reserved 2018</p>
    </StyledFooter>
  )
}

export default Footer;
