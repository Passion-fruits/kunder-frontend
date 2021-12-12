import { FC, useEffect, useState } from "react";
import { CheckScroll } from "./../../../lib/utils/checkScroll";
import CardList from "../OptionCardList";
import music from "../../../lib/api/music";
import playlist from "../../../lib/api/playlist";
import profile from "../../../lib/api/profile";

interface Props {
  type:
    | "profileMusic"
    | "profilePlaylist"
    | "profileFollower"
    | "profileFollowing";
  user_id?: number;
}

const InfiniteCroll: FC<Props> = ({ type, user_id }) => {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [endPage, setEndPage] = useState(false);
  const [isClear, setIsClear] = useState(false);

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

  const getUserFollower = () => {
    profile
      .getUserFollower({ user_id: user_id, page: page })
      .then((res) => {
        const followers = res.data.followers;
        if (followers.length === 0) setEndPage(false);
        else setData(data.concat(followers));
      })
      .catch(() => setEndPage(false));
  };

  const getUserFollowing = () => {
    profile
      .getUserFollowing({ user_id: user_id, page: page })
      .then((res) => {
        const following = res.data.followings;
        if (following.length === 0) setEndPage(false);
        else setData(data.concat(following));
      })
      .catch(() => setEndPage(false));
  };

  const clear = () =>
    new Promise((resolve) => {
      setData([]);
      setPage(1);
      resolve({
        clear: true,
      });
    });

  const getData = () => {
    switch (type) {
      case "profileMusic":
        return getProfileMusic();
      case "profilePlaylist":
        return getProfilePlaylist();
      case "profileFollower":
        return getUserFollower();
      case "profileFollowing":
        return getUserFollowing();
    }
  };

  useEffect(() => {
    if (endPage) return;
    if (page === 1) return;
    getData();
  }, [page]);

  useEffect(() => {
    if (data.length !== 0) {
      setIsClear(!isClear);
      clear();
    } else {
      getData();
    }
  }, [isClear]);

  useEffect(() => {
    setIsClear(!isClear);
  }, [user_id]);

  return (
    <>
      {type === "profileMusic" && (
        <CardList data={data} option="musicCardToMain" />
      )}
      {type === "profilePlaylist" && (
        <CardList data={data} option="playlistCard" />
      )}
      {type === "profileFollower" && (
        <CardList data={data} option="profileCard" />
      )}
      {type === "profileFollowing" && (
        <CardList data={data} option="profileCard" />
      )}
    </>
  );
};

export default InfiniteCroll;
