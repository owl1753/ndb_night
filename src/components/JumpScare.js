import "../styles/JumpScare.css";
import jumpScare from "../assets/jump-scare.jpg";

const JumpScare = ({ onClose }) => {
  return (
    <div className="jump-scare-overlay" onClick={onClose}>
      <div className="jump-scare-content">
        <img src={jumpScare} alt="jump-scare" />
      </div>
    </div>
  );
};

export default JumpScare;
