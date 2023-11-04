import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import ReactPlayer from 'react-player/youtube';
import { useQuery } from 'react-query';
import { getDetails, getVideos } from '../../api/apis';
import { BsHeart, BsHeartFill } from 'react-icons/bs';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';
import { BiSolidUserCircle } from 'react-icons/bi';
import { useRef, useState } from 'react';

const Wrapper = styled.div`
  padding: var(--default-padding-style);
  background: inherit;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 10vh;
`;

const ReactPlayerWrapper = styled.div`
  width: 80%;
  height: 70vh;
`;

const MovieDetails = styled.div`
  display: flex;
  justify-content: space-between;

  width: 80%;
  height: 10vh;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  width: 30%;
  height: 100%;

  gap: 5px;
`;

const Title = styled.span`
  color: white;
  font-size: 24px;
  font-weight: 600;
  white-space: nowrap;
`;

const SubtitleWrapper = styled.div`
  width:100%;
  height:100%:
  display:flex;

    white-space:nowrap;

  span{
    font-size:14px;
    color:lightgray;
    margin-right:20px;
  }
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;

  width: 20%;
  height: 100%;
  overflow: scroll;
`;

const SammaryWrapper = styled.div`
  width: 80%;
  height: 20vh;

  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding-top: 5vh;
  margin: 5vh 0;
  border-top: 1px solid gray;

  span {
    font-size: 14px;
    color: lightgray;
    margin: 5px 0;
  }

  p {
    color: white;
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 20px;
  }
`;

const CommentWrapper = styled.div`
  width: 80%;

  border-top: 1px solid gray;
  box-sizing: border-box;
  padding-top: 5vh;
  padding-bottom: 20vh;

  gap: 10vh;

  p {
    color: white;
    font-weight: 600;
    font-size: 24px;
  }

  span {
    font-size: 20px;
    color: lightgray;
  }
`;

const Comment = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  box-sizing: border-box;
  padding: 5px;

  gap: 10px;
  div:first-child {
    font-size: ${({ $size }) => ($size ? $size : '60px')};
    color: white;
  }

  form {
    width: 100%;
    input {
      width: 100%;
      height: 10vh;
      color: white;
      background: inherit;
      &:focus {
        outline: none;
        border-bottom: 1px solid gray;
      }
    }
  }
`;

const CommentDiv = styled.div`
  font-size: 14px;

  h1 {
    color: gray;
  }

  display: flex;
  flex-direction: column;
  gap: 5px;

  span {
    font-size: 14px;
  }
`;

const Novideo = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 30px;
  font-weight: 600;
  color: white;
`;

const Details = () => {
  const params = useParams();
  const isMovie = params.movieId !== undefined;

  const paramsId = isMovie ? params.movieId : params.dramaId;
  const series = isMovie ? 'movie' : 'tv';

  const { data } = useQuery(['getDetails', series, paramsId], () =>
    getDetails(series, paramsId)
  );

  const { data: videos, isLoading: videoLoading } = useQuery(
    ['getviedos', series, paramsId],
    () => getVideos(series, paramsId)
  );

  const videoKey = !videoLoading && videos?.[0]?.key;
  const isNotvideoKey = videoKey == undefined;

  const [chat, setChat] = useState([]);
  const commentRef = useRef('');

  const handleChat = async (e) => {
    e.preventDefault();
    await setChat((prev) => [...prev, commentRef.current.value]);
    commentRef.current.value = '';
  };

  const [likeform, setLikeform] = useState({
    like: false,
    favorite: false,
  });

  const setLike = () =>
    setLikeform((prev) => ({
      ...prev,
      like: !prev.like,
    }));

  const setFavorite = () =>
    setLikeform((prev) => ({
      ...prev,
      favorite: !prev.favorite,
    }));

  const rightComponentsData = [
    {
      onClick: setLike,
      icon: likeform.like ? <BsHeartFill /> : <BsHeart />,
      text: '좋아요',
    },
    {
      onClick: setFavorite,
      icon: likeform.favorite ? <AiFillStar /> : <AiOutlineStar />,
      text: '즐겨찾기',
    },
  ];

  const dataForm = {
    title: isMovie ? data?.title : data?.name,
    runningTime: isMovie ? data?.runtime : data?.episode_run_time?.[0],
    releaseDate: isMovie ? data?.release_date : data?.last_air_date,
    tagLine: data?.tagline,
    overview: data?.overview,
  };
  return (
    <Wrapper>
      <ReactPlayerWrapper>
        {isNotvideoKey ? (
          <Novideo>비디오가 지원되지 않습니다.</Novideo>
        ) : (
          !videoLoading && (
            <ReactPlayer
              width={'100%'}
              height={'90%'}
              url={`https://www.youtube.com/watch?v=${videoKey}`}
            />
          )
        )}
      </ReactPlayerWrapper>

      <MovieDetails>
        <TitleWrapper>
          <Title>{dataForm.title}</Title>

          <SubtitleWrapper>
            <span>재생시간 {dataForm.runningTime}분</span>
            <span>개봉일 {dataForm.releaseDate}</span>
          </SubtitleWrapper>
        </TitleWrapper>

        <Right>
          {rightComponentsData.map((item) => (
            <RightComponents
              key={item.text}
              onClick={item.onClick}
              icon={item.icon}
              text={item.text}
            />
          ))}
        </Right>
      </MovieDetails>

      <SammaryWrapper>
        <p>줄거리</p>
        <span>#{dataForm.tagLine}</span>
        <span>{dataForm.overview}</span>
      </SammaryWrapper>

      <CommentWrapper>
        <p>댓글 {chat?.length}개</p>
        <Comment>
          <div>
            <BiSolidUserCircle />
          </div>
          <form onSubmit={handleChat}>
            <input ref={commentRef} placeholder="댓글을 입력해주세요" />
          </form>
        </Comment>

        {chat?.map((mes, idx) => (
          <UserComment title={`홍길동 ${idx}`} text={mes} />
        ))}
      </CommentWrapper>
    </Wrapper>
  );
};

export default Details;

const RightComponentsWrapper = styled.div`
  display: flex;
  jusitfy-content: space-between;
  align-items: center;

  gap: 5px;
  font-size: 16px;
  font-weight: 600;
  color: lightgray;

  white-space: nowrap;
  cursor: pointer;

  &:hover {
    color: white;
  }

  span:first-child {
    font-size: 18px;
  }
`;

const RightComponents = ({ icon, text, onClick }) => {
  return (
    <RightComponentsWrapper onClick={onClick}>
      <span>{icon}</span>
      <span>{text}</span>
    </RightComponentsWrapper>
  );
};

const UserComment = ({ title, text }) => {
  return (
    <Comment $size={'50px'}>
      <div>
        <BiSolidUserCircle />
      </div>
      <CommentDiv>
        <h1>{title}</h1>
        <span>{text}</span>
      </CommentDiv>
    </Comment>
  );
};
