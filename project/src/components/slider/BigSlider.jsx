import React from 'react';
import styled from 'styled-components';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import { makeImagePath } from '../../utils/utils';
import { AnimatePresence, motion } from 'framer-motion';
import UseSlider from '../../hooks/UseSlider';
import { sliderVariants } from './slider_global';
import { useNavigate } from 'react-router-dom';

// Slider.jsx에 중복된 코드가 있지만 이렇게 둔 이유는 각 각 transition이 다를 수도 있기 때문
const slider_transition = {
  type: 'tween',
  duration: 0.5,
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
  overflow: hidden;
  min-width: 80vw;
  min-height: 80vh;
`;

const ImgWrapper = styled(motion.div)`
  position: absolute;
`;

const Prev = styled.button`
  &:hover {
    background-color: rgb(89 89 89);
    opacity: 0.2;
  }

  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: gray;
`;

const Next = styled.button`
  &:hover {
    background-color: rgb(89 89 89);
    opacity: 0.2;
  }

  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: gray;
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
    min-width: 100px;
    height: 30px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 10px;
    &:hover {
      background-color: rgb(0, 0, 0, 0.3);
    }
  }
`;

const BigSlider = ({ datas }) => {
  const offset = 1;
  const lastIndex = datas?.length - 1;
  const { index, next, onPrev, onNext } = UseSlider({ lastIndex });

  // 다른곳에서도 필요할 시 customHook으로 만들자!
  const validateTitleLength = (title) => {
    if (title.length > 20) return title.slice(0, 20) + '...';
    else return title;
  };

  const navigate = useNavigate();

  const gotoDetails = (id) => {
    navigate(`${id}`);
  };

  return (
    <Wrapper className="h-full w-full">
      <AnimatePresence initial={false} custom={next}>
        <ImgWrapper
          custom={next}
          variants={sliderVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          key={index}
          transition={slider_transition}
        >
          {datas?.slice(offset * index, offset * index + offset)?.map((item, idx) => (
            <div key={idx}>
              <img src={makeImagePath(item.backdrop_path)} />

              <ImgInfo className="text-white">
                <h1>{validateTitleLength(item.title || item.name)}</h1>
                <span>{item.overview.slice(0, 100)}...</span>
                <button onClick={() => gotoDetails(item.id)}>자세히 보기</button>
              </ImgInfo>
            </div>
          ))}

          <Prev onClick={onPrev}>
            <IoIosArrowBack />
          </Prev>
          <Next onClick={onNext}>
            <IoIosArrowForward />
          </Next>
        </ImgWrapper>
      </AnimatePresence>
    </Wrapper>
  );
};

export default BigSlider;
