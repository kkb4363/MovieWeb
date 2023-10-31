import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.button`
  min-width: 80px;
  &:hover {
    background-color: gray;
  }
`;

const Contact = () => {
  return <Wrapper className="h-full ">Contact</Wrapper>;
};

export default Contact;
