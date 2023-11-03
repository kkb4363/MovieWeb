import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 20%;
  border-top-left-radius: var(--chat-border-style);
  border-top-right-radius: var(--chat-border-style);

  display: flex;
  align-items: center;
`;

export const HeaderIcon = styled.div`
  background-color: rgb(0, 0, 0, 0.8);
  width: ${({ $size }) => ($size ? $size : '60px')};
  height: ${({ $size }) => ($size ? $size : '60px')};
  border-radius: ${({ $size }) => ($size ? `calc(${$size} / 2)` : '60px')};
  font-size: ${({ $fontsize }) => ($fontsize ? $fontsize : '14px')};
  font-weight: 600;
  display: flex;
  white-space: nowrap;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const OnlineCircle = styled.div`
  width: ${({ $circleSize }) => ($circleSize ? $circleSize : '15px')};
  height: ${({ $circleSize }) => ($circleSize ? $circleSize : '15px')};
  border-radius: 50%;
  border: 1px solid white;
  position: absolute;
  background-color: rgb(23 179 40);
  bottom: 0px;
  right: 0px;
`;

const HeaderText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  gap: ${({ $gap }) => ($gap ? $gap : '10px')};
  margin-left: 10px;
  span:first-child {
    font-size: ${({ $titleSize }) => ($titleSize ? $titleSize : '20px')};
    color: rgb(0, 0, 0, 0.8);
    font-weight: 600;
  }
  span:last-child {
    font-size: ${({ $textSize }) => ($textSize ? $textSize : '13px')};
    font-weight: 500;
    color: rgb(0, 0, 0, 0.5);
  }
`;

const ChatHeader = (props) => {
  return (
    <Wrapper>
      <HeaderIcon $size={props.iconSize} $fontsize={props.iconFontSize}>
        {props.iconText}
        <OnlineCircle $circleSize={props.onlineCircleSize} />
      </HeaderIcon>

      <HeaderText
        $textSize={props.textSize}
        $titleSize={props.titleSize}
        $gap={props.textGap}
      >
        <span>{props.title}</span>
        <span>{props.text}</span>
      </HeaderText>
    </Wrapper>
  );
};

export default ChatHeader;
