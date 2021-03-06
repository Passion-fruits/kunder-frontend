import { FC, useEffect, useState } from "react";
import {
  CoinIcon,
  FacebookIcon,
  InstargramIcon,
  SoundCloudIcon,
  YoutubeIcon,
} from "../../../assets";
import * as S from "./styles";
import { setContextValue } from "./../../../lib/context/index";
import { Profile } from "./../../../lib/interface/profile";
import { useRouter } from "next/dist/client/router";
import follow from "../../../lib/api/follow";
import { USER_ID } from "../../../lib/api/export";

interface Props {
  profile: Profile;
}

const Information: FC<Props> = ({ profile }) => {
  const dispatch = setContextValue();
  const router = useRouter();
  const user_id = router.query.id;
  const [isFollow, setIsFollow] = useState(false);
  const [isMine, setIsMine] = useState(false);

  const onSupportModal = () => {
    dispatch({
      type: "SET_MODAL",
      modal: "support",
    });
  };

  const updateProfile = () => {
    dispatch({
      type: "SET_MODAL",
      modal: "updateProfile",
    });
  };

  const SNSArr = [
    {
      type: "facebook",
      component: <FacebookIcon size={24} />,
    },
    {
      type: "soundcloud",
      component: <SoundCloudIcon size={15} />,
    },
    {
      type: "insta",
      component: <InstargramIcon size={25} />,
    },
    {
      type: "youtube",
      component: <YoutubeIcon size={20} />,
    },
  ];

  useEffect(() => {
    follow.getIsFollow(user_id).then((res) => {
      if (res.data.is_follow) {
        setIsFollow(true);
      } else {
        setIsFollow(false);
      }
    });
  }, [router.query.id]);

  useEffect(() => {
    if (router.query.id === localStorage.getItem(USER_ID)) {
      setIsMine(true);
    } else {
      setIsMine(false);
    }
  }, [router]);

  const requestFollow = () => {
    if (isFollow) {
      setIsFollow(false);
      follow.unFollow(user_id).then((res) => {});
    } else {
      setIsFollow(true);
      follow.follow(user_id).then((res) => {});
    }
  };

  return (
    <S.Wrapper>
      <img src={profile.profile} className="profile-img" />
      <S.Container>
        <S.NameWrapper>
          <h1 className="nickname">{profile.name}</h1>
          <div className="button-wrap">
            {isMine ? (
              <button onClick={updateProfile}>????????????</button>
            ) : (
              <button onClick={requestFollow}>
                {isFollow ? "????????????" : "?????????"}
              </button>
            )}
            <button onClick={onSupportModal}>
              <CoinIcon size={18} /> ????????????
            </button>
          </div>
        </S.NameWrapper>
        <S.CntList>
          <li>
            ????????? <b>{profile.follower}???</b>
          </li>
          <li>
            ????????? <b>{profile.following}???</b>
          </li>
          <li>
            ?????? <b>{profile.song_count}???</b>
          </li>
        </S.CntList>
        <S.SNSWrapper>
          {SNSArr.map((sns, index) => (
            <button
              key={index}
              className={!profile[sns.type] ? "none" : undefined}
              onClick={() => window.open(profile[sns.type])}
            >
              {sns.component}
            </button>
          ))}
        </S.SNSWrapper>
        <S.Description>{profile.bio}</S.Description>
      </S.Container>
    </S.Wrapper>
  );
};

export default Information;
