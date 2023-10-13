import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';
import styled from 'styled-components';
import { makeImagePath } from '../utils/utils';

const Wrapper = styled.div`
  box-sizing: border-box;
  padding: 50px 0;
  width: 100%;
  height: 400px;
  position: relative;
  overflow: hidden;
  h1 {
    font-size: 30px;
    font-weight: 600;
  }
`;

const SliderItems = styled(motion.div)`
  margin-top: 10px;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  width: 100%;
  gap: 10px;
  position: absolute;
  button {
    &:hover {
      background-color: rgba(0, 0, 0, 0.5);
    }
    width: 50px;
    height: 50px;
    border-radius: 25px;

    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 0;
    top: 0;
    margin: auto 0;
  }
  button:first-child {
    left: 0;
  }
  button:last-child {
    right: 0;
  }
`;

const SliderItem = styled.div`
  display: flex;
  flex-direction: column;

  height: 330px;

  background-image: url(${(props) => props.bgsrc && props.bgsrc});
  background-size: contain;
  background-position: center center;
`;

export const sliderVariants = {
  hidden: (custom) => ({
    x: custom ? window.outerWidth : -window.outerWidth,
  }),
  visible: {
    x: 0,
  },
  exit: (custom) => ({
    x: custom ? -window.outerWidth : window.outerWidth,
  }),
};

const Slider = ({ title, datas }) => {
  const offset = 6;

  const [prev, setPrev] = useState(false);
  const [index, setIndex] = useState(0);
  const lastIndex = datas && datas?.slice(2).length / offset - 1;

  const onPrev = () => {
    setIndex((prev) => (prev == 0 ? 0 : prev - 1));
    setPrev(false);
  };

  const onNext = () => {
    setIndex((prev) => (prev == lastIndex ? lastIndex : prev + 1));
    setPrev(true);
  };

  return (
    <Wrapper>
      <h1 className="text-white">{title}</h1>

      <AnimatePresence custom={prev} initial={false}>
        <SliderItems
          custom={prev}
          variants={sliderVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          key={index}
          transition={{ type: 'tween', duration: 0.5 }}
        >
          <button disabled={index === 0} onClick={onPrev}>
            <MdArrowBackIos />
          </button>

          {datas
            ?.slice(2)
            ?.slice(offset * index, offset * index + offset)
            .map((data) => (
              <SliderItem key={data.id} bgsrc={makeImagePath(data.poster_path, 'w200')} />
            ))}

          <button disabled={index === lastIndex} onClick={onNext}>
            <MdArrowForwardIos />
          </button>
        </SliderItems>
      </AnimatePresence>
    </Wrapper>
  );
};

export default Slider;
