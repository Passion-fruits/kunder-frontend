import { FC, useEffect, useState } from "react";
import { PlayIcon } from "../../assets";
import * as S from "./styles";
import ButtonBox from "./ButtonBox";
import CardList from "./../common/OptionCardList/index";
import { Music } from "./../../lib/interface/music";
import { getDate } from "./../../lib/utils/getDate";
import Comment from "./Comment";
import { useRouter } from "next/dist/client/router";
import recommend from "../../lib/api/recommend";
import LoadImage from "../common/LoadImage";
import { setContextValue } from "../../lib/context";

interface Props {
  music: Music;
}

const MusicDetail: FC<Props> = ({ music }) => {
  const router = useRouter();
  const dispatch = setContextValue();
  const song_id = router.query.id;
  const [similarMusic, setSimilarMusic] = useState([]);

  useEffect(() => {
    recommend.getSimilarMusic({ song_id: song_id, size: 6 }).then((res) => {
      setSimilarMusic(res.data);
    });
  }, [song_id]);

  const playMusic = () => {
    dispatch({
      type: "SET_MUSIC",
      music: music,
    });
  };

  return (
    <S.Wrapper>
      <S.Container>
        <S.AlbumImageBox>
          <LoadImage src={music.cover_url} border_radius="basic" />
        </S.AlbumImageBox>
        <S.Description>
          <S.TitleBox>
            <div className="line" />
            <h1 className="music-title">{music.title}</h1>
            <h3 className="artist">{music.artist}</h3>
          </S.TitleBox>
          <S.SubInformationBox>
            <div className="show-cnt">
              <PlayIcon size={12} />
              612
            </div>
            <div className="tag">#{music.genre}</div>
            <div className="tag">#{music.mood}</div>
            <span className="donation-cnt">100KDT 후원</span>
            <span className="last-time">{getDate(music.created_at)}</span>
          </S.SubInformationBox>
          <S.ArtistTalkBox>
            <h1 className="title">아티스트의 말</h1>
            <p className="artist-talk">{music.description}</p>
          </S.ArtistTalkBox>
          <ButtonBox
            like={music.like}
            song_id={music.song_id}
            playMusic={playMusic}
          />
        </S.Description>
      </S.Container>
      <Comment comment_cnt={music.comment} />
      <CardList option="musicCardToMain" data={similarMusic} />
    </S.Wrapper>
  );
};

export default MusicDetail;
