import React, { useState, useEffect } from 'react';
import SocialPost from './components/SocialPost';
import JumpScare from './components/JumpScare';
import { postData } from './data';
import './App.css';

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
    if ( !foundGoodComments.includes(comment.id)) {
      setCurrentGoodComment(comment);
      setShowJumpScare(true);
      setFoundGoodComments([...foundGoodComments, comment.id]);
    }
  };

  const handleCloseJumpScare = () => {
    setShowJumpScare(false);
    // After closing the jump scare, maybe show the good comment for reading
    if (currentGoodComment) {
        // The user should read the comment aloud. 
        // We can show an alert or a modal for this.
        // For simplicity, I will use an alert.
        alert(`정화의 의식:\n\n"${currentGoodComment.text}"`);
        setCurrentGoodComment(null);
    }
  };
  
  const postWithShuffledComments = { ...postData, comments: shuffledComments };

  return (
    <div className="App">
      <header className="App-header">
        <h1>NDB startgram</h1>
      </header>
      <main>
        <SocialPost 
          post={{...postWithShuffledComments, user: { ...postWithShuffledComments.user, name: 'Adam' }}} 
          onCommentClick={handleCommentClick} 
        />
      </main>
      {showJumpScare && <JumpScare onClose={handleCloseJumpScare} />}
    </div>
  );
}

export default App; 