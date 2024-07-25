import { useNavigate } from "react-router-dom";
import "./BettingAppHeader.css";

const SmarketsHeader = () => {
  
  const navigate = useNavigate();
  const toHome = () => {
    const path = "/";
    navigate(path);
  };

  return (
    <div className="smarkets-header">
      <p onClick={toHome} className="smarkets-logo">BettingApp</p>
    </div>
  );
};

export default SmarketsHeader;
