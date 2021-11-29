import { FC, useState } from "react";
import CardList from "../../common/OptionCardList";
import * as S from "./styles";

interface Props {}

type menuType = "노래" | "플레이리스트" | "팔로워" | "팔로잉";

const MenuTab: FC<Props> = () => {
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
      {
        {
          노래: <CardList option="musicCardToMain" />,
          플레이리스트: <CardList option="playlistCard" />,
        }[menu]
      }
    </S.Wrapper>
  );
};

export default MenuTab;
