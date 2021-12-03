import { FC } from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { ColorMap } from "../../../styles/color";

const LoadingSpinner: FC = () => {
  return <Loader type="Oval" color={ColorMap.grey000} width={40} />;
};

export default LoadingSpinner;
