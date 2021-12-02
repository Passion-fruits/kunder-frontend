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

interface Props {}

const Information: FC<Props> = () => {
  const dispatch = setContextValue();

  const onSupportModal = () => {
    dispatch({
      type: "SET_MODAL",
      modal: "support",
    });
  };

  return (
    <S.Wrapper>
      <img
        src="https://media.npr.org/assets/img/2020/02/19/gettyimages-1199920197-a87bd2db3b35097b186b95bc76e6398fb35e27bb-s1100-c50.jpg"
        className="profile-img"
      />
      <S.Container>
        <S.NameWrapper>
          <h1 className="nickname">김팔복</h1>
          <div className="button-wrap">
            <button>팔로우</button>
            <button onClick={onSupportModal}>
              <CoinIcon size={18} /> 후원하기
            </button>
          </div>
        </S.NameWrapper>
        <S.CntList>
          <li>
            팔로워 <b>10명</b>
          </li>
          <li>
            팔로잉 <b>10명</b>
          </li>
          <li>
            노래 <b>1곡</b>
          </li>
        </S.CntList>
        <S.SNSWrapper>
          <button>
            <FacebookIcon size={24} />
          </button>
          <button>
            <InstargramIcon size={25} />
          </button>
          <button>
            <YoutubeIcon size={20} />
          </button>
          <button>
            <SoundCloudIcon size={15} />
          </button>
        </S.SNSWrapper>
        <S.Description>
          안녕하십니까 형님들, 대전에서 랩하는 부산 미남입니다,.
        </S.Description>
      </S.Container>
    </S.Wrapper>
  );
};

export default Information;
