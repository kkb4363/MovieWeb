import EmojiPicker from 'emoji-picker-react';
import { AiFillNotification } from 'react-icons/ai';
import { IoIosArrowBack } from 'react-icons/io';
import styled from 'styled-components';
import ChatHeader, { HeaderIcon } from '../../../components/chat/ChatHeader';
import ChatMessage from '../../../components/chat/ChatMessage';
import { useRef, useState } from 'react';
import { BsEmojiSmile } from 'react-icons/bs';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background: white;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ScrollArea = styled.div`
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }

  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 10%;
`;

const PrevIcon = styled.div`
  width: 15%;
  font-size: 20px;
  color: gray;
  cursor: pointer;
`;

const Notification = styled.div`
  width: 100%;
  height: 10%;
  padding-left: 20px;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;

  background: rgb(245, 245, 245);
  font-size: 14px;
  color: gray;
  border-radius: 10px;

  span:first-child {
    margin-top: -2px;
  }
`;

const AdminInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding-top: 10px;

  span:nth-child(2) {
    color: black;
    font-weight: 600;
  }
  span:nth-child(3) {
    color: gray;
    font-size: 12px;
  }
`;

const Chat = styled.div`
  width: 100%;
  height: 40%;
  gap: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  padding-top: 20px;

  span:first-child {
    font-size: 10px;
    color: gray;
  }
`;

const Chatbot = styled.div`
  width: 100%;
  height: 50%;

  display: flex;
  align-items: flex-start;
  gap: 10px;
`;

const ChatbotTalk = styled.div`
  display: flex;
  width: 100%;
  border-radius: 10px;
  background: rgb(245 245 245);
  padding: 10px;
`;

const UserInput = styled.div`
  position: absolute;
  bottom: 0;
  border-top: 1px solid gray;
  width: 100%;
  height: 10%;
  display: flex;

  form {
    width: 80%;
    display: flex;
    align-items: center;
    input {
      margin-left: 15%;
      color: black;
      width: 100%;
      height: 80%;
      margin-top: auto;
      margin-bottom: auto;
      &:focus {
        outline: none;
      }
    }
  }
`;

const Emoji = styled.div`
  position: absolute;
  right: 10%;
  top: 35%;
  color: gray;
  font-size: 20px;
  cursor: pointer;
`;

const Emojipicker = styled.div`
  position: absolute;
  bottom: 0;
`;

const UserTalk = styled.div`
  background: rgb(245 245 245);
  border-radius: 10px;

  color: black;
  font-size: 14px;
  padding: 10px;
  max-width: 85%;

  margin-left: auto;
`;

const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
`;

const chatHeaderProps = {
  textGap: '2px',
  titleSize: '12px',
  iconSize: '30px',
  iconFontSize: '10px',
  iconText: 'GMWeb',
  title: 'GMWeb',
  text: '오전 9시부터 운영해요',
  onlineCircleSize: '8px',
};

const ChatSecond = (props) => {
  const [emojiopen, setEmojiopen] = useState(false);
  const [chat, setChat] = useState([]);
  const textRef = useRef('');

  const handleChat = async (e) => {
    e.preventDefault();
    await setChat((prev) => [...prev, textRef.current.value]);
    textRef.current.value = '';
  };
  const handleEmoji = () => {
    setEmojiopen((prev) => !prev);
  };

  const clickEmoji = (emoji) => {
    textRef.current.value += emoji.emoji;
    handleEmoji();
  };

  return (
    <Wrapper>
      {emojiopen && <Overlay onClick={handleEmoji} />}
      <Header>
        <PrevIcon onClick={props.onClick}>
          <IoIosArrowBack />
        </PrevIcon>
        <ChatHeader {...chatHeaderProps} />
      </Header>

      <ScrollArea>
        <Notification>
          <span>
            <AiFillNotification />
          </span>
          <span>영화의 모든 것, Watch Your Movies</span>
        </Notification>

        <AdminInfo>
          <div>
            <HeaderIcon>GMWeb</HeaderIcon>
          </div>
          <span>GMWeb에 문의하기</span>
          <span>운영시간 09~18</span>
        </AdminInfo>

        <Chat>
          <span>오후 2:14</span>
          <Chatbot>
            <HeaderIcon $size="35px" $fontsize="10px">
              GMWeb
            </HeaderIcon>
            <ChatbotTalk>
              <ChatMessage iconSize="35px" isIcon={false} />
            </ChatbotTalk>
          </Chatbot>

          {chat?.map((mes) => (
            <UserTalk>{mes}</UserTalk>
          ))}

          <UserInput>
            {emojiopen && (
              <Emojipicker>
                <EmojiPicker
                  onEmojiClick={clickEmoji}
                  autoFocusSearch={false}
                  width={320}
                />
              </Emojipicker>
            )}

            <form onSubmit={handleChat}>
              <input placeholder="문의사항을 입력해주세요" ref={textRef} />
            </form>
            <Emoji>
              <BsEmojiSmile onClick={handleEmoji} />
            </Emoji>
          </UserInput>
        </Chat>
      </ScrollArea>
    </Wrapper>
  );
};

export default ChatSecond;
