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
import { Profile } from "./../../../lib/interface/profile";
import profileApi from "../../../lib/api/profile";

interface Props {}

const Header: FC<Props> = () => {
  const [isScrollTop, setIsScrollTop] = useState<boolean>(true);
  const [isMenu, setIsMenu] = useState<boolean>(false);
  const [profile, setProfile] = useState<Profile>();
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

  useEffect(() => {
    const user_id = localStorage.getItem(USER_ID);
    user_id &&
      profileApi.getProfileDetail(user_id).then((res) => {
        setProfile(res.data);
      });
  }, []);

  const logout = () => {
    localStorage.setItem(ACCESS_TOKEN, "");
    localStorage.setItem(REFRESH_TOKEN, "");
    localStorage.setItem(USER_ID, "");
    router.push("/auth");
    toast.success("π λ‘κ·Έμμ λμμ΅λλ€");
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
          {profile && <img id="profile-menu" src={profile.profile} />}
          {isMenu && (
            <S.ProfileMenu>
              <Link href={`/profile/${localStorage.getItem(USER_ID)}`}>
                <div>νλ‘ν</div>
              </Link>
              <Link href="/music/upload">
                <div>μμ μλ‘λ</div>
              </Link>
              <Link href="/me/wallet">
                <div>λ΄ μ§κ°</div>
              </Link>
              <Link href="/me/support">
                <div>νμ λ΄μ­</div>
              </Link>
              <div onClick={logout}>λ‘κ·Έμμ</div>
            </S.ProfileMenu>
          )}
        </S.ProfileWrap>
      </S.Container>
    </S.Wrapper>
  );
};

export default Header;
