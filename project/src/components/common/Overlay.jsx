import styled from 'styled-components';

const Wrapper = styled.div`
  position: absolute;

  inset: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);

  z-index: ${({ $zIndex }) => $zIndex && $zIndex};
`;

const Overlay = (props) => {
  return <Wrapper $zIndex={props.zIndex} onClick={props.onClick} />;
};

export default Overlay;
