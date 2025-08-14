import React, { useEffect, useRef } from "react";
import "../styles/JumpScare.css";
import jumpScare from "../assets/jump-scare.jpg";
import jumpScareSound from "../assets/jumpscare.mp3";

const JumpScare = ({ onClose, selectedComment }) => {
  const audioRef = useRef(null);

  useEffect(() => {
    // 효과음 재생
    if (audioRef.current) {
      audioRef.current.play();
    }

    // 3초 후 자동으로 사라지고 alert 표시
    const timer = setTimeout(() => {
      onClose();
      const commentText = selectedComment
        ? selectedComment.text
        : "선택된 선플이 없습니다";
      alert(`종이에 다음 선플을 써주세요:\n\n"${commentText}"`);
    }, 3000);

    return () => {
      clearTimeout(timer);
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    };
  }, [onClose, selectedComment]);

  return (
    <div className="jump-scare-overlay">
      <div className="jump-scare-content">
        <img src={jumpScare} alt="jump-scare" />
      </div>
      <audio ref={audioRef} src={jumpScareSound} />
    </div>
  );
};

export default JumpScare;

export default JumpScare;
