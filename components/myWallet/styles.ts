import styled from "@emotion/styled";
import { ColorMap } from "../../styles/color";

export const Wrapper = styled.div`
  & .line {
    border-color: ${ColorMap.grey600};
    border-width: 2px;
    padding: 0;
    margin: 0;
  }
  & .gHighlight {
    color: ${ColorMap.green100};
  }
`;

export const Title = styled.h1`
  font-size: 30px;
  margin-bottom: 10px;
  & .highlight {
    color: ${ColorMap.mainColor};
  }
`;

export const Top = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;
`;

export const Explain = styled.p`
  font-size: 17px;
  color: ${ColorMap.grey100};
`;

export const TopBtn = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 15px;
  & button {
    height: 35px;
    padding: 0px 30px;
    border-radius: 3px;
    font-size: 16px;
    font-weight: 500;
    padding-bottom: 2px;
    &:first-of-type {
      background-color: ${ColorMap.grey700};
    }
    &:last-of-type {
      background-color: ${ColorMap.blue200};
    }
  }
`;

export const CardList = styled.div`
  display: grid;
  grid: ". . .";
  justify-content: space-between;
  margin-bottom: 30px;
`;

export const CardWrapper = styled.div`
  margin-top: 30px;
  width: 450px;
  height: 180px;
  padding: 0px 20px;
  background: ${ColorMap.grey800};
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  border-radius: 10px;
  align-items: flex-end;
`;

export const Coin = styled.span`
  font-size: 18px;
  width: 100%;
  color: ${ColorMap.grey300};
`;

export const Cost = styled.div`
  display: flex;
  align-items: baseline;
  width: 100%;
  & .costSpan {
    font-size: 18px;
  }
  & .won {
    font-size: 30px;
    padding-left: 5px;
    font-weight: bold;
  }
`;

export const Purchase = styled.button`
  background: ${ColorMap.mainColor};
  border-radius: 3px;
  font-size: 17px;
  padding: 5px 30px;
  font-weight: bold;
`;

export const Bottom = styled.div`
  margin-top: 20px;
  & .coinExp {
    list-style: none;
    padding: 0;
    margin: 0;
    & li:before {
      padding-right: 10px;
      content: "•";
      color: ${ColorMap.grey500};
      font-size: 20px;
    }
  }
`;
