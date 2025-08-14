import React, { useState, useEffect } from "react";
import SocialPost from "./components/SocialPost";
import JumpScare from "./components/JumpScare";
import { postData } from "./data";
import "./App.css";

function App() {
  const [showJumpScare, setShowJumpScare] = useState(false);
  const [foundGoodComments, setFoundGoodComments] = useState([]);
  const [shuffledComments, setShuffledComments] = useState([]);
  const [currentGoodComment, setCurrentGoodComment] = useState(null);

  // Shuffle comments on initial render
  useEffect(() => {
    setShuffledComments(postData.comments.sort(() => Math.random() - 0.5));
  }, []);

  const handleCommentClick = (comment) => {
    if (!foundGoodComments.includes(comment.id)) {
      setCurrentGoodComment(comment);
      // 1초 후에 점프스케어 표시
      setTimeout(() => {
        setShowJumpScare(true);
      }, 1000);
      setFoundGoodComments([...foundGoodComments, comment.id]);
      setShuffledComments(
        shuffledComments.filter((value) => value.id !== comment.id)
      );
    }
  };

  const handleCloseJumpScare = () => {
    setShowJumpScare(false);
    // 점프스케어가 자동으로 닫힐 때는 JumpScare 컴포넌트에서 alert를 처리합니다
    // 수동으로 닫힐 때는 추가 동작이 필요하지 않습니다
    setCurrentGoodComment(null);
  };


  const postWithShuffledComments = { ...postData, comments: shuffledComments };

  return (
    <div className="App">
      <header className="App-header">
        <h1>NDB startgram</h1>
      </header>
      <main>
        <SocialPost
          post={{
            ...postWithShuffledComments,
            user: { ...postWithShuffledComments.user, name: "Adam" },
          }}
          onCommentClick={handleCommentClick}
        <SocialPost
          post={{
            ...postWithShuffledComments,
            user: { ...postWithShuffledComments.user, name: "Adam" },
          }}
          onCommentClick={handleCommentClick}
        />
      </main>
      {showJumpScare && (
        <JumpScare
          onClose={handleCloseJumpScare}
          selectedComment={currentGoodComment}
        />
      )}
    </div>
  );
}

export default App;

export default App;
