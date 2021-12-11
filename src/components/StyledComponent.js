import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button `
  background-color: black;
  color: white;
  font-size: 28px;
`;

function StyleComponent(props) {
  return (
    <div>
      <StyledButton>Login</StyledButton>
    </div>
  );
}

export default StyleComponent;