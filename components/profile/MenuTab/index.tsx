import { FC, useEffect, useState } from "react";
import music from "../../../lib/api/music";
import CardList from "../../common/OptionCardList";
import * as S from "./styles";
import { useRouter } from "next/dist/client/router";

interface Props {
  user_id;
}

type menuType = "노래" | "플레이리스트" | "팔로워" | "팔로잉";

const MenuTab: FC<Props> = ({ user_id }) => {
  const menuArr: menuType[] = ["노래", "팔로워", "팔로잉", "플레이리스트"];
  const [menu, setMenu] = useState<menuType>("노래");
  const [userUploadData, setUserUploadData] = useState([]);

  useEffect(() => {
    music
      .getUserMusic({ user_id: user_id, page: 1 })
      .then((res) => {
        setUserUploadData(res.data.songs);
      })
      .catch(() => {
        return;
      });
  }, [user_id]);

  return (
    <S.Wrapper>
      <S.MenuWrap>
        {menuArr.map((res, index) => (
          <li
            key={index}
            className={res === menu ? "active" : ""}
            onClick={() => setMenu(res)}
          >
            {res}
          </li>
        ))}
      </S.MenuWrap>
      {(() => {
        switch (menu) {
          case "노래":
            return <CardList option="musicCardToMain" data={userUploadData} />;
          case "플레이리스트":
            return <CardList option="playlistCard" />;
        }
      })()}
    </S.Wrapper>
  );
};

export default MenuTab;
