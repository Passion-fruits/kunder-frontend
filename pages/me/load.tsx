import styled from "@emotion/styled";
import { FC, useEffect } from "react";
import LoadingSpinner from "../../components/common/LoadingSpinner";
import { useRouter } from "next/dist/client/router";
import kdt from "../../lib/api/kdt";
import { toast } from "material-react-toastify";

const Load: FC = () => {
  const router = useRouter();
  const { orderId, paymentKey, amount } = router.query;
  useEffect(() => {
    if (orderId) {
      kdt
        .kdtSuccessCallback({
          order_id: orderId,
          payment_key: paymentKey,
          amount: parseInt(amount.toString()),
        })
        .then((res) => {
          toast.success("😊 충전되었습니다.");
          router.push("/me/wallet");
        })
        .catch(() => {
          toast.info("이미 처리된 요청입니다");
          router.push("/me/wallet");
        });
    }
  }, [router]);
  return (
    <Wrapper>
      <LoadingSpinner size={80} />
    </Wrapper>
  );
};

export default Load;

const Wrapper = styled.div`
  width: 100%;
  text-align: center;
  padding-top: 100px;
`;
