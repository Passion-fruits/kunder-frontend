import { FC, useEffect, useState } from "react";
import kdt from "../../lib/api/kdt";
import { SupportCardType } from "../../lib/interface/kdt";
import LoadingSpinner from "../common/LoadingSpinner";
import SelectBar from "./selectBar";
import * as S from "./styles";
import SupportCard from "./supportCard/index";
import { toast } from "material-react-toastify";

export type SupportType = "mySupport" | "isSupported";

interface Props {}

const Support: FC<Props> = () => {
  const [supportType, setSupportType] = useState<SupportType>("mySupport");
  const [isDone, setIsDone] = useState(0);
  const [loading, setLoading] = useState(false);
  const [type, setType] = useState(1);
  /**
   * type
   * 1 : 후원하고 답장 안옴
   * 2 : 후원하고 답장 옴
   * 3 : 후원받고 답장 안함
   * 4 : 후원받고 답장 함
   */
  const [supportData, setSupportData] = useState<SupportCardType[]>([]);
  const [page, setPage] = useState(1);

  const error = () => {
    setLoading(false);
    if (page > 1) {
      toast.info("👀 데이터가 없습니다");
    }
    return;
  };

  const getData = ({ page, data }) => {
    setLoading(true);
    if (supportType === "mySupport") {
      setType(1 + isDone);
      kdt
        .getMySupport({ page: page, size: 10, done: isDone })
        .then((res) => {
          setSupportData(data.concat(res.data.history));
          setLoading(false);
        })
        .catch(error);
    } else {
      setType(3 + isDone);
      kdt
        .getIsSupported({ page: page, size: 10, done: isDone })
        .then((res) => {
          setLoading(false);
          setSupportData(data.concat(res.data.history));
        })
        .catch(error);
    }
  };

  useEffect(() => {
    if (page === 1) return;
    getData({ page: page, data: supportData });
  }, [isDone, page]);

  useEffect(() => {
    setPage(1);
    setSupportData([]);
    getData({ page: 1, data: [] });
  }, [isDone, supportType]);

  const showMore = () => {
    setPage(page + 1);
  };

  return (
    <S.Wrapper>
      <h1 className="page-title">후원 내역</h1>
      <SelectBar
        setSupportType={setSupportType}
        supportType={supportType}
        setIsDone={setIsDone}
      />
      <SupportCard type={type} data={supportData} />
      {supportData.length === 0 && !loading && <S.None>내역이 없습니다</S.None>}
      {loading && (
        <S.LoadingWrap>
          <LoadingSpinner size={50} />
        </S.LoadingWrap>
      )}
      <S.MoredButton onClick={showMore}>더 보기</S.MoredButton>
    </S.Wrapper>
  );
};

export default Support;
