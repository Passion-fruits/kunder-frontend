import { FC, useEffect, useState } from "react";
import styled from "@emotion/styled";
import { ColorMap } from "./../../../../styles/color";
import playlist from "../../../../lib/api/playlist";
import { USER_ID } from "../../../../lib/api/export";
import { Playlist } from "./../../../../lib/interface/playlist";
import { toast } from "material-react-toastify";

interface Props {}

const Playlist: FC<Props> = () => {
  const [playlistArr, setPlaylistArr] = useState<Playlist[]>([]);
  const [isAdd, setIsAdd] = useState(false);

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
        toast.info("😢 정보를 입력해주세요");
        return;
      }
      playlist.createPlaylist(value).then((res) => {
        getPlaylist();
        setIsAdd(false);
        toast.success("✨ 플레이리스트가 생성되었습니다.");
      });
    }
  };

  useEffect(() => {
    getPlaylist();
  }, []);
  return (
    <Wrapper>
      {playlistArr.map((playlist, index) => (
        <button key={index}>{playlist.name}</button>
      ))}
      {playlistArr.length === 0 && <div>플레이리스트가 없습니다.</div>}
      {isAdd ? (
        <input
          type="text"
          placeholder="플레이리스트명을 입력하세요"
          onKeyDown={createPlaylist}
        />
      ) : (
        <button
          onClick={() => setIsAdd(true)}
          style={{ color: ColorMap.blue100, borderBottom: "none" }}
        >
          + 플레이리스트 추가
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
