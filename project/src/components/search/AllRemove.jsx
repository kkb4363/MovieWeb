import styled from 'styled-components';
import { BsXCircleFill } from 'react-icons/bs';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  height: 30%;
  font-size: 18px;

  cursor: pointer;
`;

const AllRemove = (props) => {
  return (
    <Wrapper>
      <span>{props.text}</span>
      <div>
        <BsXCircleFill />
      </div>
    </Wrapper>
  );
};

export default AllRemove;
