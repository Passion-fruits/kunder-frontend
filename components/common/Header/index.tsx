import { FC, useEffect, useState } from "react";
import MenuTab from "./MenuTab";
import * as S from "./styles";
import Link from "next/link";

interface Props {}

const Header: FC<Props> = () => {
  const [isScrollTop, setIsScrollTop] = useState<boolean>(true);
  const [isMenu, setIsMenu] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY < 50) {
        setIsScrollTop(true);
      } else {
        setIsScrollTop(false);
      }
    });
  }, []);

  useEffect(() => {
    window.addEventListener("click", (event) => {
      const target = event.target as HTMLElement;
      if (target.id === "profile-menu") {
        setIsMenu(true);
      } else {
        setIsMenu(false);
      }
    });
  }, []);

  return (
    <S.Wrapper
      style={
        isScrollTop
          ? { backgroundColor: "rgb(0,0,0,0)" }
          : { backgroundColor: "rgb(0,0,0,0.8)" }
      }
    >
      <S.Container>
        <MenuTab />
        <Link href="/">
          <h1 className="logo">KUNDER</h1>
        </Link>
        <S.ProfileWrap>
          <img
            id="profile-menu"
            src="https://images.squarespace-cdn.com/content/v1/5ede5114b8b71f40bdb49cf0/1596824693321-GTM9D9J5ID9OK2LVQV33/Fine+Line"
          />
          {isMenu && (
            <S.ProfileMenu>
              <Link href="/profile/1">
                <div>프로필</div>
              </Link>
              <Link href="/me/wallet">
                <div>내 지갑</div>
              </Link>
              <Link href="/me/support">
                <div>후원 내역</div>
              </Link>
              <Link href="/">
                <div>로그아웃</div>
              </Link>
            </S.ProfileMenu>
          )}
        </S.ProfileWrap>
      </S.Container>
    </S.Wrapper>
  );
};

export default Header;
