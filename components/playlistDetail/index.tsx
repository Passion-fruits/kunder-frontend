import { FC, useEffect, useState } from "react";
import { HeartIcon, PlayIcon } from "../../assets";
import like from "../../lib/api/like";
import { PlaylistDetailType } from "../../lib/interface/playlist";
import CardList from "../common/OptionCardList";
import * as S from "./styles";
import { useRouter } from "next/dist/client/router";
import LoadImage from "../common/LoadImage";
import { USER_ID } from "./../../lib/api/export";
import FileInput from "../common/FileInput";
import { getFileData } from "./../../lib/utils/getFileData";
import playlistApi from "../../lib/api/playlist";
import { toast } from "material-react-toastify";

interface Props {
  playlistDetailInfor: PlaylistDetailType;
}

const PlaylistDetail: FC<Props> = ({
  playlistDetailInfor: { playlist, songs },
}) => {
  const router = useRouter();
  const playlist_id = router.query.id;
  const [isLike, setIsLike] = useState(false);
  const [likeCnt, setLikeCnt] = useState(0);
  const [isMine, setIsMine] = useState(false);

  useEffect(() => {
    like.getIsPlaylistLike(playlist_id).then((res) => {
      setIsLike(res.data.is_like);
    });
  }, []);

  const requestLike = () => {
    if (isLike) {
      setIsLike(false);
      setLikeCnt(likeCnt - 1);
      like.playlistUnLike(playlist_id);
    } else {
      setIsLike(true);
      setLikeCnt(likeCnt + 1);
      like.playlistLike(playlist_id);
    }
  };

  const updatePlaylistCover = (event) => {
    getFileData(event).then((res) => {
      playlistApi
        .updatePlaylistCover({
          image: res.file,
          playlist_id: playlist_id,
        })
        .then((res) => {
          toast.success("😊 정보가 변경되었습니다");
          toast.info("새로고침 후 확인해주세요");
        });
    });
  };

  useEffect(() => {
    setLikeCnt(parseInt(playlist.like));
  }, []);

  useEffect(() => {
    if (playlist.user_id == localStorage.getItem(USER_ID)) {
      setIsMine(true);
    }
  }, []);

  return (
    <S.Wrapper>
      <FileInput
        id="playlist-cover"
        type="img"
        onChange={updatePlaylistCover}
      />
      <S.PlaylistInformation>
        <S.CoverImageWrapper>
          <div
            style={{ border: `60px solid #${playlist.color_hex}` }}
            className="line"
          />
          <LoadImage src={playlist.cover_url} border_radius="basic" />
        </S.CoverImageWrapper>
        <h1 className="playlist-title text-overflow">{playlist.name}</h1>
        <h3 className="playlist-maker">{playlist.author}</h3>
        <p className="playlist-like">
          이 플레이리스트를 {likeCnt}명이 좋아합니다.
        </p>
        <S.ButtonWrap>
          <button>
            <PlayIcon size={15} /> 전체 재생하기
          </button>
          {isMine ? (
            <button
              onClick={() => document.getElementById("playlist-cover").click()}
            >
              커버사진 변경
            </button>
          ) : (
            <button onClick={requestLike}>
              <HeartIcon size={15} full={isLike} color="#000" />{" "}
              {isLike ? "좋아요 취소" : "좋아요"}
            </button>
          )}
        </S.ButtonWrap>
      </S.PlaylistInformation>
      <S.PlaylistMusicWrapper>
        <div className="flex-wrap">
          <CardList option="musicCardToPlaylist" data={songs} />
        </div>
      </S.PlaylistMusicWrapper>
    </S.Wrapper>
  );
};

export default PlaylistDetail;
