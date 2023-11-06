import styled from 'styled-components';
import AllRemove from './AllRemove';

const Wrapper = styled.div`
  width: 50%;
  height: 85%;

  display: flex;
  flex-direction: column;
  position: relative;
  border-right: ${({ $isRightBorder }) => $isRightBorder && '1px solid lightgray'};
  border-height: 80%;

  box-sizing: border-box;

  padding-left: ${({ $paddingSize }) => $paddingSize && $paddingSize};
  white-space: nowrap;
`;

const Header = styled.div`
  width: 100%;
  height: 10%;

  display: flex;
  gap: 20px;

  align-items: center;
  box-sizing: border-box;
  padding-bottom: 40px;
  h1 {
    font-size: 28px;
    font-weight: 500;
    position: relative;
  }
`;

const WordsContainer = (props) => {
  return (
    <Wrapper $isRightBorder={props.isRightBorder} $paddingSize={props.paddingSize}>
      <Header>
        <h1>{props.text}</h1>
        {props.isRemoveBtn && <AllRemove text={'모두 지우기'} />}
      </Header>

      {props.children}
    </Wrapper>
  );
};

export default WordsContainer;
