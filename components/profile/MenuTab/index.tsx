import { FC, useState } from "react";
import * as S from "./styles";
import InfiniteCroll from "../../common/InfiniteScroll";

interface Props {
  user_id;
}

type menuType = "노래" | "플레이리스트" | "팔로워" | "팔로잉";

const MenuTab: FC<Props> = ({ user_id }) => {
  const menuArr: menuType[] = ["노래", "팔로워", "팔로잉", "플레이리스트"];
  const [menu, setMenu] = useState<menuType>("노래");

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
      {menu === "노래" && (
        <InfiniteCroll type="profileMusic" user_id={user_id} />
      )}
      {menu === "플레이리스트" && (
        <InfiniteCroll type="profilePlaylist" user_id={user_id} />
      )}
      {menu === "팔로워" && (
        <InfiniteCroll type="profileFollower" user_id={user_id} />
      )}
      {menu === "팔로잉" && (
        <InfiniteCroll type="profileFollowing" user_id={user_id} />
      )}
    </S.Wrapper>
  );
};

export default MenuTab;
