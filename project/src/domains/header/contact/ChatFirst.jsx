import styled, { keyframes } from 'styled-components';
import { HiPaperAirplane } from 'react-icons/hi2';
import ChatHeader from '../../../components/chat/ChatHeader';
import ChatMessage from '../../../components/chat/ChatMessage';

const openChats_keyframes = keyframes`
    from{
        opacity:0.5;
        transform:translateX(15px);
    }
    to{
        opacity:1;
        transform:translateX(0);
    }
`;

const Wrapper = styled.div`
  background-color: white;
  width: 100%;
  height: 50%;
  border-radius: var(--chat-border-style);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 5px;
  div:first-child {
    display: flex;
  }
`;

const ChatRoom = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2%;
  opacity: 0;
  animation: ${openChats_keyframes} 0.5s 1s ease-in-out forwards;
`;

const ChatRoomBtn = styled.button`
  width: 90%;
  height: 50px;
  border-radius: var(--chat-border-style);
  background-color: rgb(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  color: white;
  font-size: 14px;
  font-weight: 600;
  margin-top: auto;
  margin-bottom: 5%;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    transform: rotate(-30deg);
    font-size: 16px;
    margin-top: -5px;
  }
  &:hover {
    color: lightgray;
  }
`;

const ChattingRoomTip = styled.span`
  font-size: 12px;
  color: rgb(135 135 135);
`;

const ChatFirst = (props) => {
  return (
    <>
      <ChatHeader iconText="GMWeb" title="GMWeb" text="운영시간 09~18시" />

      <Wrapper>
        <ChatRoom>
          <ChatMessage isIcon={true} />
        </ChatRoom>

        <ChatRoomBtn onClick={props.onClick}>
          문의하기
          <div>
            <HiPaperAirplane />
          </div>
        </ChatRoomBtn>

        <ChattingRoomTip>몇 시간 내 답변 받으실 수 있어요</ChattingRoomTip>
      </Wrapper>
    </>
  );
};

export default ChatFirst;
