import { FC } from "react";
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

interface Props {
  profile: Profile;
}

const Information: FC<Props> = ({ profile }) => {
  const dispatch = setContextValue();

  const onSupportModal = () => {
    dispatch({
      type: "SET_MODAL",
      modal: "support",
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

  return (
    <S.Wrapper>
      <img src={profile.profile} className="profile-img" />
      <S.Container>
        <S.NameWrapper>
          <h1 className="nickname">{profile.name}</h1>
          <div className="button-wrap">
            <button>팔로우</button>
            <button onClick={onSupportModal}>
              <CoinIcon size={18} /> 후원하기
            </button>
          </div>
        </S.NameWrapper>
        <S.CntList>
          <li>
            팔로워 <b>{profile.follower}명</b>
          </li>
          <li>
            팔로잉 <b>{profile.following}명</b>
          </li>
          <li>
            노래 <b>{profile.song_count}곡</b>
          </li>
        </S.CntList>
        <S.SNSWrapper>
          {SNSArr.map((sns, index) => (
            <button
              key={index}
              className={!profile[sns.type] && "none"}
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
