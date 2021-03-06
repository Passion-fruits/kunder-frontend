import { FC, useEffect, useRef, useState } from "react";
import * as S from "./styles";
import { useRouter } from "next/dist/client/router";
import comment from "../../lib/api/comment";
import { toast } from "material-react-toastify";
import { CommentType } from "./../../lib/interface/comment";
import { getDate } from "./../../lib/utils/getDate";

interface Props {
  comment_cnt: string;
}

const Comment: FC<Props> = ({ comment_cnt }) => {
  const router = useRouter();
  const song_id = router.query.id;
  const commentRef = useRef<HTMLInputElement>(null);
  const [commentArr, setCommentArr] = useState<CommentType[]>([]);

  const getComment = () => {
    comment
      .getComment(song_id)
      .then((res) => {
        setCommentArr(res.data);
      })
      .catch(() => {
        // none comment
        setCommentArr([]);
      });
  };

  const writeComment = (event) => {
    if (event.keyCode !== 13) return;
    const content = commentRef.current.value;
    if (!content) {
      toast.info("π’ λκΈ μμ± ν λ±λ‘ν΄μ£ΌμΈμ!");
      return;
    }
    comment
      .writeComment({
        song_id: song_id,
        content: content,
      })
      .then((res) => {
        commentRef.current.value = "";
        getComment();
      })
      .catch((err) => {
        if (err.response.status === 400) {
          toast.info("π’ μ΄λ―Έ λκΈμ μμ±νμ¨μ΅λλ€");
          return;
        }
      });
  };

  useEffect(() => {
    getComment();
  }, [song_id]);

  return (
    <>
      <S.WriteComment
        type="text"
        placeholder="μμμ μκ²¬μ λ¨κ²¨μ£ΌμΈμ! (μν°ν€λ₯Ό λλ¬ λ±λ‘)"
        ref={commentRef}
        onKeyDown={writeComment}
      />
      <S.CommentWrap>
        <span className="comment-cnt">λκΈ {comment_cnt}κ°</span>
        {commentArr.map((obj, index) => (
          <S.Comment key={index}>
            <img src={obj.profile} />
            <div>
              <span>
                {obj.name} <time>{getDate(obj.created_at)}</time>
                <p>{obj.comment_content}</p>
              </span>
            </div>
          </S.Comment>
        ))}
      </S.CommentWrap>
    </>
  );
};

export default Comment;
