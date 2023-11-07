import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { makeImagePath } from '../../utils/utils';
import UseSlider from '../../hooks/UseSlider';
import { sliderVariants } from './slider_global';

const slider_transition = {
  type: 'tween',
  duration: 0.2,
};

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
      background-color: rgb(0, 0, 0, 0.3);
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
    z-index: 2;
  }
  button:last-child {
    right: 0;
  }
`;

const SliderItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;

  &:hover {
    opacity: 0.7;
    cursor: pointer;
  }
  height: 311px;

  background-image: url(${(props) => props.bgsrc && props.bgsrc});
  background-size: cover;
  background-position: center center;
`;
const SearchSlider = ({ title, datas }) => {
  const offset = 6;
  const lastIndex =
    datas && datas?.length < 7 ? 0 : Math.floor(datas?.length / offset) - 1;
  const { index, next, onPrev, onNext } = UseSlider({ lastIndex });
  const navigate = useNavigate();
  return (
    <Wrapper>
      <h1 className="text-white">{title}</h1>

      <AnimatePresence custom={next} initial={false}>
        <SliderItems
          custom={next}
          variants={sliderVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          key={index}
          transition={slider_transition}
        >
          <button disabled={index === 0} onClick={onPrev}>
            <MdArrowBackIos />
          </button>

          {datas?.slice(offset * index, offset * index + offset).map((data) => {
            const isMovie = data.media_type == 'movie';
            const srcToNavigate = isMovie ? `/${data.id}` : `/drama/${data.id}`;
            return (
              <SliderItem
                onClick={() => navigate(`${srcToNavigate}`)}
                key={data.id}
                bgsrc={data.poster_path ? makeImagePath(data.poster_path, 'w780') : null}
              >
                {!data.poster_path && '이미지 지원 안함'}
              </SliderItem>
            );
          })}

          <button disabled={index === lastIndex} onClick={onNext}>
            <MdArrowForwardIos />
          </button>
        </SliderItems>
      </AnimatePresence>
    </Wrapper>
  );
};

export default SearchSlider;
