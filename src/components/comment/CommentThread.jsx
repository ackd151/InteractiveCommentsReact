import Comment from "./Comment";
import NewComment from "./NewComment";
import "./CommentThread.css";

function CommentThread({ comments }) {
  return (
    <main className='comments'>
      {comments.map((comment, idx) => (
        <Comment key={comment.id} comment={comment} parents={[]} idx={idx} />
      ))}
      <NewComment parents={[]} onReply={() => {}} />
    </main>
  );
}

export default CommentThread;
