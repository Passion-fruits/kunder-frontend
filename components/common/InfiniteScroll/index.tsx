import { FC, useEffect, useState } from "react";
import * as S from "./styles";
import { CheckScroll } from "./../../../lib/utils/checkScroll";
import CardList from "../OptionCardList";
import music from "../../../lib/api/music";
import playlist from "../../../lib/api/playlist";

interface Props {
  type: "profileMusic" | "profilePlaylist";
  user_id?: number;
}

const InfiniteCroll: FC<Props> = ({ type, user_id }) => {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [endPage, setEndPage] = useState(false);

  useEffect(() => {
    let page = 1;
    window.addEventListener("scroll", () => {
      if (CheckScroll()) {
        setPage(page + 1);
        page++;
      }
    });
  }, []);

  const getProfileMusic = () => {
    music
      .getUserMusic({ user_id: user_id, page: page })
      .then((res) => {
        setData(data.concat(res.data.songs));
      })
      .catch(() => setEndPage(true));
  };

  const getProfilePlaylist = () => {
    playlist
      .getUserPlaylist({ user_id: user_id })
      .then((res) => {
        setData(data.concat(res.data));
        setEndPage(true);
      })
      .catch((err) => setEndPage(false));
  };

  useEffect(() => {
    if (endPage) return;
    switch (type) {
      case "profileMusic":
        return getProfileMusic();
      case "profilePlaylist":
        return getProfilePlaylist();
    }
  }, [page]);

  return (
    <>
      {type === "profileMusic" && (
        <CardList data={data} option="musicCardToMain" />
      )}
      {type === "profilePlaylist" && (
        <CardList data={data} option="playlistCard" />
      )}
    </>
  );
};

export default InfiniteCroll;
