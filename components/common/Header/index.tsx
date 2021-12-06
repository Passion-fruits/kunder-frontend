import { FC, useEffect, useState } from "react";
import MenuTab from "./MenuTab";
import * as S from "./styles";
import Link from "next/link";
import { useRouter } from "next/dist/client/router";
import {
  ACCESS_TOKEN,
  REFRESH_TOKEN,
  USER_ID,
} from "./../../../lib/api/export";
import { toast } from "material-react-toastify";

interface Props {}

const Header: FC<Props> = () => {
  const [isScrollTop, setIsScrollTop] = useState<boolean>(true);
  const [isMenu, setIsMenu] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY < 50) {
        setIsScrollTop(true);
      } else {
        setIsScrollTop(false);
      }
    });
    window.removeEventListener("scroll", () => {});
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

  const logout = () => {
    localStorage.setItem(ACCESS_TOKEN, "");
    localStorage.setItem(REFRESH_TOKEN, "");
    localStorage.setItem(USER_ID, "");
    router.push("/auth");
    toast.success("🙌 로그아웃 되었습니다");
  };

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
              <Link href={`/profile/${localStorage.getItem(USER_ID)}`}>
                <div>프로필</div>
              </Link>
              <Link href="/me/wallet">
                <div>내 지갑</div>
              </Link>
              <Link href="/me/support">
                <div>후원 내역</div>
              </Link>
              <div onClick={logout}>로그아웃</div>
            </S.ProfileMenu>
          )}
        </S.ProfileWrap>
      </S.Container>
    </S.Wrapper>
  );
};

export default Header;
