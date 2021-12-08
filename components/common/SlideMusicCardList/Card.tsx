import { FC } from "react";
import { PlayIcon } from "../../../assets";
import styled from "@emotion/styled";
import { ColorMap } from "../../../styles/color";

interface Props {
  currentShow: boolean;
  setCurrentIndex(params: number): void;
  index: number;
}

const Card: FC<Props> = ({ currentShow, setCurrentIndex, index }) => {
  return (
    <CardWrap
      currentShow={currentShow}
      onClick={() => setCurrentIndex(index)}
      style={currentShow ? {} : { cursor: "pointer" }}
    >
      <CoverWrap currentShow={currentShow}>
        <button>
          <PlayIcon size={23} />
        </button>
        <img src="https://i.pinimg.com/originals/3a/f0/e5/3af0e55ea66ea69e35145fb108b4a636.jpg" />
      </CoverWrap>
      <h1 className="music-title text-overflow">Blinding lights</h1>
      <h3 className="artist text-overflow">The weekend</h3>
    </CardWrap>
  );
};

export default Card;

const large_width = "250px";
const small_width = "200px";

const CardWrap = styled.div<{ currentShow: boolean }>`
  display: flex;
  flex-direction: column;
  opacity: ${(res) => (res.currentShow ? 1 : 0.5)};
  width: ${(res) => (res.currentShow ? large_width : small_width)};
  & button {
    display: ${(res) => (res.currentShow ? "block" : "none")};
  }
  & .music-title {
    font-size: ${(res) => (res.currentShow ? "20px" : "18px")};
    font-weight: 400;
    margin-top: 10px;
    color: ${ColorMap.grey000};
    text-align: center;
  }
  & .artist {
    font-size: ${(res) => (res.currentShow ? "16px" : "14px")};
    font-weight: 400;
    color: ${ColorMap.grey300};
    margin-top: 2px;
    text-align: center;
  }
`;

const CoverWrap = styled.div<{ currentShow: boolean }>`
  transition: 0.5s;
  width: ${(res) => (res.currentShow ? large_width : small_width)};
  height: ${(res) => (res.currentShow ? large_width : small_width)};
  border-radius: 5px;
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  & img {
    width: 100%;
    height: 100%;
  }
  & button {
    width: 65px;
    height: 65px;
    border-radius: 50%;
    border: 2px solid ${ColorMap.grey000};
    background-color: rgb(0, 0, 0, 0.5);
    position: absolute;
    & svg {
      margin-left: 8px;
      margin-top: 2px;
    }
    &:hover {
      width: 70px;
      height: 70px;
    }
  }
`;
