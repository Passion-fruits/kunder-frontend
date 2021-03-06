import { FC, useEffect, useState } from "react";
import {
  AddPlaylistIcon,
  AlertIcon,
  CoinIcon,
  HeartIcon,
  PlayIcon,
} from "../../assets";
import * as S from "./styles";
import { setContextValue } from "./../../lib/context/index";
import likeApi from "../../lib/api/like";
import { useRouter } from "next/dist/client/router";

interface Props {
  like: string;
  song_id;
  playMusic(): void;
}

const ButtonBox: FC<Props> = ({ like, song_id, playMusic }) => {
  const dispatch = setContextValue();
  const router = useRouter();
  const [isLike, setIsLike] = useState(false);
  const [likeCnt, setLikeCnt] = useState(0);

  const onSupportModal = () => {
    dispatch({
      type: "SET_MODAL",
      modal: "support",
    });
  };

  const requestLike = () => {
    if (isLike) {
      setIsLike(false);
      setLikeCnt(likeCnt - 1);
      likeApi.musicUnLike(song_id).catch(() => {
        return;
      });
    } else {
      setIsLike(true);
      setLikeCnt(likeCnt + 1);
      likeApi.musicLike(song_id).catch(() => {
        return;
      });
    }
  };

  useEffect(() => {
    likeApi.getIsMusicLike(song_id).then((res) => {
      setIsLike(res.data.is_like);
    });
  }, []);

  useEffect(() => {
    setLikeCnt(parseInt(like));
  }, []);

  const addPlaylist = () => {
    dispatch({
      type: "SET_MODAL",
      modal: "playlist",
    });
    dispatch({
      type: "SET_SONG_ID",
      song_id: router.query.id,
    });
  };

  return (
    <S.ButtonBox>
      <button className="base-btn" onClick={playMusic}>
        <PlayIcon size={13} />
        음악 듣기
      </button>
      <button className="base-btn" onClick={onSupportModal}>
        <CoinIcon size={13} />
        후원하기
      </button>
      <button className="base-btn" onClick={requestLike}>
        <HeartIcon size={14} full={isLike} />
        {likeCnt}
      </button>
      <div className="icon-box">
        <button onClick={addPlaylist}>
          <AddPlaylistIcon size={20} />
        </button>
        <button>
          <AlertIcon size={23} />
        </button>
      </div>
    </S.ButtonBox>
  );
};

export default ButtonBox;
