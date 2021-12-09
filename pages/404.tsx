import styled from "@emotion/styled";
import { ColorMap } from "./../styles/color";
import Link from "next/link";

export default function NotFound() {
  return (
    <Wrapper>
      <span>404 Not Found</span>
      <p>해당 페이지는 존재하지 않습니다...</p>
      <Link href="/">
        <button>돌아가기</button>
      </Link>
    </Wrapper>
  );
}

export const Wrapper = styled.div`
  width: 100%;
  text-align: center;
  padding-top: 100px;
  & span {
    font-size: 25px;
    font-weight: bold;
    color: ${ColorMap.grey000};
  }
  & p {
    font-size: 17px;
    color: ${ColorMap.grey200};
    margin-top: 20px;
  }
  & button {
    color: ${ColorMap.grey000};
    font-size: 18px;
    font-weight: 500;
    background-color: ${ColorMap.mainColor};
    border-radius: 5px;
    padding: 8px 20px;
    margin-top: 20px;
  }
`;
