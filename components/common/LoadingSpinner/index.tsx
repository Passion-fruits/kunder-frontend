import { FC } from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { ColorMap } from "../../../styles/color";

interface Props {
  size: number;
}

const LoadingSpinner: FC<Props> = ({ size }) => {
  return <Loader type="Oval" color={ColorMap.grey000} width={size} />;
};

export default LoadingSpinner;
