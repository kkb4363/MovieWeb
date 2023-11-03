import styled from 'styled-components';
import { motion } from 'framer-motion';
import { BsInstagram, BsGithub, BsFillChatLeftQuoteFill } from 'react-icons/bs';
import { HiOutlineMailOpen } from 'react-icons/hi';
import { BiX } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import ChatDialog from './chat/ChatDialog';

const contactdialogVariable = {
  hidden: {
    x: window.innerWidth,
  },
  visible: {
    x: 0,
  },
};

const contactdialogVariableTransition = {
  type: 'tween',
  duration: '0.3',
};

const contact_text_size = '20px';

const Wrapper = styled(motion.div)`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  margin: 0 auto;
  background-color: rgb(18 18 18);

  width: 20%;
  height: 100vh;
  z-index: 1;
`;

const Name = styled.div`
  width: 100%;
  height: 5vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5vh;
  font-size: ${contact_text_size};
  font-weight: 600;
`;

const Sns = styled.div`
  width: 100%;
  height: 5vh;
  display: flex;
  gap: 30px;
  justify-content: center;
  align-items: center;

  font-size: ${contact_text_size};
`;

const Location = styled.div`
  width: 100%;
  height: 15vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-top: 5vh;
  p {
    font-size: ${contact_text_size};
    font-weight: 600;
    margin-bottom: 2vh;
  }

  span {
    font-size: 14px;
  }
`;

const ChatIcon = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  font-size: 25px;
  font-weight: 600;
  cursor: pointer;

  background-color: ${({ $isOpen }) => ($isOpen ? 'rgb(220 220 220)' : 'rgb(0,0,0,0.8)')};
  color: ${({ $isOpen }) => ($isOpen ? 'rgb(0,0,0,0.8)' : 'white')};
  &:hover {
    box-shadow: 1px 1px 5px lightgray, -1px -1px 5px lightgray;
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  margin: 0 auto;

  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
`;

const Snsdata = [
  {
    icon: <BsGithub />,
    src: 'https://github.com/kkb4363',
  },
  {
    icon: <BsInstagram />,
    src: 'https://www.instagram.com/gibeom__0/',
  },
  {
    icon: <HiOutlineMailOpen />,
    src: 'https://www.naver.com/',
  },
];

const ContactDialog = (props) => {
  const [chatOpen, setChatOpen] = useState(false);
  const handleChatOpen = () => setChatOpen((prev) => !prev);

  return (
    <>
      <Wrapper
        variants={contactdialogVariable}
        initial="hidden"
        animate="visible"
        transition={contactdialogVariableTransition}
      >
        <Name>Contact Us</Name>
        <Sns>
          {Snsdata.map((item, idx) => (
            <Link to={item.src} key={'contact-snsdata-key=' + idx} target="_blank">
              {item.icon}
            </Link>
          ))}
        </Sns>

        <Location>
          <p>Come Visit Us</p>
          <span>대전 유성구 계산동 718-1 금강하우스</span>
          <span>010-7522-4363</span>
        </Location>

        <ChatIcon $isOpen={chatOpen} onClick={handleChatOpen}>
          {chatOpen ? <BiX /> : <BsFillChatLeftQuoteFill />}
        </ChatIcon>

        {chatOpen && <ChatDialog isOpen={chatOpen} />}
      </Wrapper>

      <Overlay onClick={props.onClick} />
    </>
  );
};

export default ContactDialog;
