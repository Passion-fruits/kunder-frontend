import { FC, useEffect, useRef } from "react";
import * as S from "./styles";
import { useRouter } from "next/dist/client/router";
import comment from "../../lib/api/comment";
import { toast } from "material-react-toastify";

interface Props {
  comment_cnt: string;
}

const Comment: FC<Props> = ({ comment_cnt }) => {
  const router = useRouter();
  const song_id = router.query.id;
  const commentRef = useRef<HTMLInputElement>(null);

  const getComment = () => {
    comment
      .getComment(song_id)
      .then((res) => {
        console.log(res.data);
      })
      .catch(() => {
        // none comment
        return;
      });
  };

  const writeComment = (event) => {
    if (event.keyCode !== 13) return;
    const content = commentRef.current.value;
    if (!content) {
      toast.info("😢 댓글 작성 후 등록해주세요!");
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
          toast.info("😢 이미 댓글을 작성하셨습니다");
          return;
        }
      });
  };

  useEffect(() => {
    getComment();
  }, []);

  return (
    <>
      <S.WriteComment
        type="text"
        placeholder="음악에 의견을 남겨주세요! (엔터키를 눌러 등록)"
        ref={commentRef}
        onKeyDown={writeComment}
      />
      <S.CommentWrap>
        <span className="comment-cnt">댓글 {comment_cnt}개</span>
      </S.CommentWrap>
    </>
  );
};

export default Comment;
