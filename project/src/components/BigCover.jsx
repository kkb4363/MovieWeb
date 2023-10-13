import React from 'react';
import styled from 'styled-components';

const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
`;

const ImgInfo = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;

  position: absolute;
  left: 12%;
  bottom: 10%;

  h1 {
    font-size: 50px;
    font-weight: 600;
    white-space: nowrap;
  }

  span {
    font-size: 16px;
  }

  button {
    min-width: 90px;
    height: 25px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 10px;
    &:hover {
      background-color: gray;
    }
  }
`;

const BigCover = ({ src, title, details }) => {
  const filteredTitle = title.slice(0, 20);
  const validateTitleLength = title.length < 20;

  return (
    <ImgWrapper className="h-full w-full">
      <img src={src} />

      <ImgInfo className="text-white">
        <h1>{!validateTitleLength ? filteredTitle + '...' : title}</h1>
        <span>{details}...</span>
        <button>자세히 보기</button>
      </ImgInfo>
    </ImgWrapper>
  );
};

export default BigCover;
