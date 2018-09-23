import * as React from 'react';
import styled from 'styled-components';

import Container from './Container';

const StyledLoader = styled.div`

text-align: center;
padding: 10em 0;


   .line {
     animation: expand 1s ease-in-out infinite;
border-radius: 10px;
display: inline-block;
transform-origin: center center;
margin: 0 3px;
width: 1px;
height: 25px;
}

.line:nth-child(1) {
background: #27ae60;
}

.line:nth-child(2) {
animation-delay: 180ms;
background: #f1c40f;
}

.line:nth-child(3) {
animation-delay: 360ms;
background: #e67e22;
}

.line:nth-child(4) {
animation-delay: 540ms;
background: #2980b9;
}

@keyframes expand {
0% {
  transform: scale(1);
}
25% {
  transform: scale(2);
}
}

`;

const Loader: React.SFC<{}> = () => {
  return(
    <Container>
      <StyledLoader>
         <div className="line"></div>
         <div className="line"></div>
         <div className="line"></div>
         <div className="line"></div>
      </StyledLoader>
    </Container>
  )
}

export default Loader;
