import { FC } from "react";
import { PlayIcon } from "../../assets";
import * as S from "./styles";
import ButtonBox from "./ButtonBox";
import CardList from "./../common/OptionCardList/index";

interface Props {}

const MusicDetail: FC<Props> = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.AlbumImageBox>
          <img src="https://i.pinimg.com/originals/3a/f0/e5/3af0e55ea66ea69e35145fb108b4a636.jpg" />
        </S.AlbumImageBox>
        <S.Description>
          <S.TitleBox>
            <div className="line" />
            <h1 className="music-title">D (half moon)</h1>
            <h3 className="artist">Dean</h3>
          </S.TitleBox>
          <S.SubInformationBox>
            <div className="show-cnt">
              <PlayIcon size={12} />
              612
            </div>
            <div className="tag">힙합</div>
            <div className="tag">아침에</div>
            <span className="donation-cnt">100KDT 후원</span>
            <span className="last-time">3일전</span>
          </S.SubInformationBox>
          <S.ArtistTalkBox>
            <h1 className="title">아티스트의 말</h1>
            <p className="artist-talk">
              안녕하십니까, 이번에 ㅈ되게 뽑아본 노래인데 어떠신지요 재밌게
              들어보세요
            </p>
          </S.ArtistTalkBox>
          <ButtonBox />
        </S.Description>
      </S.Container>
      <S.WriteComment
        type="text"
        placeholder="음악에 의견을 남겨주세요! (엔터키를 눌러 등록)"
      />
      <CardList option="musicCardToMain" />
    </S.Wrapper>
  );
};

export default MusicDetail;
