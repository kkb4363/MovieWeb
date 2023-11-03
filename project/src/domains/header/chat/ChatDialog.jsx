import { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import ChatFirst from './ChatFirst';
import ChatSecond from './ChatSecond';

const chatting_border_size = '20px';

const openChatting_keyframes = keyframes`
    from{
        opacity:0.5;
        transform:translateY(15px);
    },
    to{
        opacity:1;
        transform:translateY(0);
    }
`;

const Wrapper = styled.div`
  position: absolute;
  background-color: ${({ $chatChange }) =>
    $chatChange ? 'white' : 'rgb(245, 245, 246)'};

  width: 90%;
  height: 54%;
  border-radius: ${chatting_border_size};

  left: 0;
  right: 0;
  margin: 0 auto;

  box-sizing: border-box;
  padding: 10px;

  animation: ${openChatting_keyframes} 0.5s ease-in-out;
`;

const ChatDialog = (props) => {
  const [chatChange, setChatChange] = useState(false);
  const handleChatRooms = () => {
    setChatChange((prev) => !prev);
  };

  return (
    <Wrapper $chatChange={chatChange}>
      {chatChange ? (
        <ChatSecond onClick={handleChatRooms} />
      ) : (
        <ChatFirst onClick={handleChatRooms} />
      )}
    </Wrapper>
  );
};

export default ChatDialog;
