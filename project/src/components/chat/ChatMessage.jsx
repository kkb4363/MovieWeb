import styled from 'styled-components';
import { HeaderIcon } from './ChatHeader';

const ChatRoomText = styled.div`
  width: 75%;
  margin: 5px 0 0 5px;
  display: flex;
  flex-direction: column;
  font-size: 14px;
  font-weight: 600;
  white-space: nowrap;
  gap: 5px;
  color: rgb(0, 0, 0, 0.8);
  span:first-child {
    font-size: 13px;
  }
  span:last-child {
    font-weight: 400;
  }
`;
const ChatMessage = (props) => {
  return (
    <>
      {props.isIcon && (
        <HeaderIcon $size={props.iconSize ? props.iconSize : '50px'} $fontsize={'10px'}>
          GMWeb
        </HeaderIcon>
      )}
      <ChatRoomText>
        <span>GMWeb_bot</span>
        <span>다양하고, 편리한 영화웹은 쥐엠웹</span>
        <span>무엇을 도와드릴까요? 😊</span>
      </ChatRoomText>
    </>
  );
};

export default ChatMessage;
