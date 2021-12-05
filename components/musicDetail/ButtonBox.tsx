import { FC } from "react";
import {
  AddPlaylistIcon,
  AlertIcon,
  CoinIcon,
  HeartIcon,
  PlayIcon,
} from "../../assets";
import * as S from "./styles";
import { setContextValue } from "./../../lib/context/index";

interface Props {
  like: string;
}

const ButtonBox: FC<Props> = ({ like }) => {
  const dispatch = setContextValue();

  const onSupportModal = () => {
    dispatch({
      type: "SET_MODAL",
      modal: "support",
    });
  };

  return (
    <S.ButtonBox>
      <button className="base-btn">
        <PlayIcon size={13} />
        음악 듣기
      </button>
      <button className="base-btn" onClick={onSupportModal}>
        <CoinIcon size={13} />
        후원하기
      </button>
      <button className="base-btn">
        <HeartIcon size={14} />
        {like}
      </button>
      <div className="icon-box">
        <button>
          <AddPlaylistIcon size={20} />
        </button>
        <button>
          <AlertIcon size={23} />
        </button>
      </div>
    </S.ButtonBox>
  );
};

export default ButtonBox;
