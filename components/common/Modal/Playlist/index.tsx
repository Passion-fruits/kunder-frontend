import { FC, useEffect, useRef, useState } from "react";
import styled from "@emotion/styled";
import { ColorMap } from "./../../../../styles/color";
import playlist from "../../../../lib/api/playlist";
import { USER_ID } from "../../../../lib/api/export";
import { Playlist } from "./../../../../lib/interface/playlist";
import { toast } from "material-react-toastify";
import { getContextValue, setContextValue } from "../../../../lib/context";

interface Props {}

const Playlist: FC<Props> = () => {
  const [playlistArr, setPlaylistArr] = useState<Playlist[]>([]);
  const [isAdd, setIsAdd] = useState(false);
  const contextObj = getContextValue();
  const song_id = contextObj.song_id;
  const dispatch = setContextValue();
  const inputRef = useRef<HTMLInputElement>(null);

  const getPlaylist = () => {
    playlist
      .getUserPlaylist({ user_id: localStorage.getItem(USER_ID) })
      .then((res) => {
        setPlaylistArr(res.data);
      })
      .catch(() => {
        return;
      });
  };

  const createPlaylist = (event) => {
    const value = event.target.value;
    if (event.keyCode === 13) {
      if (!value) {
        toast.info("π’ μ λ³΄λ₯Ό μλ ₯ν΄μ£ΌμΈμ");
        return;
      }
      playlist.createPlaylist(value).then((res) => {
        getPlaylist();
        setIsAdd(false);
        toast.success("β¨ νλ μ΄λ¦¬μ€νΈκ° μμ±λμμ΅λλ€.");
      });
    }
  };

  const addMusic = (playlist_id) => {
    playlist
      .addMusicToPlaylist({ song_id: song_id, playlist_id: playlist_id })
      .then((res) => {
        toast.success("π μμμ μΆκ°νμμ΅λλ€.");
        dispatch({
          type: "SET_MODAL",
          modal: "none",
        });
      })
      .catch((err) => {
        if (err.response.status === 400) {
          toast.info("π μ΄λ―Έ νλ μ΄λ¦¬μ€νΈμ μ‘΄μ¬ν©λλ€.");
        }
      });
  };

  const showCreateInput = () => {
    setIsAdd(true);
    setTimeout(() => {
      inputRef.current.focus();
    }, 10);
  };

  useEffect(() => {
    getPlaylist();
  }, []);
  return (
    <Wrapper>
      {playlistArr.map((playlist, index) => (
        <button key={index} onClick={() => addMusic(playlist.playlist_id)}>
          {playlist.name}
        </button>
      ))}
      {playlistArr.length === 0 && <div>νλ μ΄λ¦¬μ€νΈκ° μμ΅λλ€.</div>}
      {isAdd ? (
        <input
          type="text"
          placeholder="νλ μ΄λ¦¬μ€νΈλͺμ μλ ₯νμΈμ"
          onKeyDown={createPlaylist}
          ref={inputRef}
        />
      ) : (
        <button
          onClick={showCreateInput}
          style={{ color: ColorMap.blue100, borderBottom: "none" }}
        >
          + νλ μ΄λ¦¬μ€νΈ μΆκ°
        </button>
      )}
    </Wrapper>
  );
};

export default Playlist;

const Wrapper = styled.div`
  background-color: ${ColorMap.grey700};
  min-width: 280px;
  border-radius: 5px;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-height: 250px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 3px;
    background-color: ${ColorMap.grey800};
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${ColorMap.blue100};
  }
  &,
  div,
  input {
    width: 250px;
  }
  & button {
    width: 100%;
  }
  & button,
  div {
    padding: 12px 0px;
    color: ${ColorMap.grey100};
    font-size: 17px;
    font-weight: 500;
    text-align: center;
  }
  & button {
    border-bottom: 1px solid ${ColorMap.grey600};
    &:hover {
      background-color: ${ColorMap.grey600};
    }
  }
  & div {
    color: ${ColorMap.grey300};
  }
  & input {
    color: ${ColorMap.blue100};
    border-bottom: 1px solid ${ColorMap.blue100};
    margin-bottom: 15px;
    font-size: 16px;
    padding: 10px 0px;
    &::placeholder {
      color: ${ColorMap.blue100};
    }
  }
`;
