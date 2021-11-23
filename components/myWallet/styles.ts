import styled from "@emotion/styled";
import { ColorMap } from "../../styles/color";

export const Wrapper = styled.div`
    & .line {
        border-color: ${ColorMap.grey600};
        border-width: 2px;
    }
    & .gHighlight{
        color: ${ColorMap.green100};
    }
`

export const Title = styled.h1`
    font-size: 30px;
    margin-bottom: 10px;
    & .highlight {
        color: ${ColorMap.mainColor};
    }
`

export const Top = styled.div`
    & .explain{
        font-size: 18px;
    }
`

export const TopBtn = styled.div`
    margin-top: 20px;
`

export const DealHistory = styled.button`
    padding: 10px 30px;
    background: ${ColorMap.grey700};
    border-radius: 3px;
    font-size: 16px;
`

export const DonateHistory = styled.button`
    padding: 10px 30px;
    background: ${ColorMap.blue200};
    border-radius: 3px;
    font-size: 16px;
    margin-left: 15px;
    margin-bottom: 20px;
`

export const Main = styled.div`
    display: grid;
    grid: '. . .';
    margin-bottom: 30px;
`

export const Container = styled.div`
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
`

export const Coin = styled.p`
    font-size: 18px;
    width: 100%;

    color: ${ColorMap.grey300};
`

export const Cost = styled.div`
    display: flex;
    align-items: baseline;
    width: 100%;

    & .costSpan{
        font-size: 18px;
    }
    
    & .won{
        font-size: 30px;
        padding-left: 5px;
        font-weight: bold;
    }
`

export const Purchase = styled.button`
    background: ${ColorMap.mainColor};
    border-radius: 3px;
    font-size: 18px;
    padding: 5px 50px;
    font-weight: bold;
`

export const Bottom = styled.div`
    & .coinExp{
        list-style: none;
        paddin  g: 0;
        margin: 0;

        & li:before{
            padding-right: 10px;
            content: "•";
            color: ${ColorMap.grey500};
            font-size: 20px;
        }

    }
`