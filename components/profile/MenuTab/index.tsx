import { FC, useState } from "react";
import CardList from "../../common/OptionCardList";
import * as S from "./styles";

interface Props {
  user_id;
}

type menuType = "노래" | "플레이리스트" | "팔로워" | "팔로잉";

const MenuTab: FC<Props> = ({ user_id }) => {
  const [menu, setMenu] = useState<menuType>("노래");
  const menuArr: menuType[] = ["노래", "팔로워", "팔로잉", "플레이리스트"];
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
            return <CardList option="musicCardToMain" />;
          case "플레이리스트":
            return <CardList option="playlistCard" />;
        }
      })()}
    </S.Wrapper>
  );
};

export default MenuTab;
