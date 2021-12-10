import { FC } from "react";
import * as S from "./styles";
import { CommentIcon, HeartIcon } from "../../../assets";
import LoadImage from "./../../common/LoadImage/index";
import { Music } from "../../../lib/interface/music";
import { getDate } from "./../../../lib/utils/getDate";

interface Props {
  index: number;
  currentIndex: number;
  setCurrentIndex(any): void;
  music: Music;
}

const Card: FC<Props> = ({ index, currentIndex, setCurrentIndex, music }) => {
  const isMine = index === currentIndex;
  return (
    <S.Card
      style={isMine ? {} : { opacity: "0.5", cursor: "pointer" }}
      onClick={() => setCurrentIndex(index)}
    >
      <S.CardTop style={isMine ? { width: "420px" } : { width: "300px" }}>
        <LoadImage
          border_radius="basic"
          src={music.cover_url}
          className="lit-cover-img"
        />
        <S.LPWrapper>
          <LoadImage border_radius="circle" src={music.cover_url} />
        </S.LPWrapper>
      </S.CardTop>
      <h1 className="card-title">{music.title}</h1>
      <h3 className="card-artist">{music.artist}</h3>
      <S.ButtonWrap>
        <button>
          <CommentIcon size={20} />
          {music.comment}
        </button>
        <button>
          <HeartIcon size={20} color="#fff" />
          {music.like}
        </button>
      </S.ButtonWrap>
      <S.TagWrap style={isMine ? { opacity: 1 } : { opacity: 0 }}>
        <div># {getDate(music.created_at)}</div>
        <div># {music.genre}음악</div>
        <div># 아침에</div>
      </S.TagWrap>
    </S.Card>
  );
};

export default Card;
