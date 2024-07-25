import { useNavigate } from "react-router-dom";
import "./Menu.css";

interface MenuProps {
  onSelectType: (type: string) => void;
  currentSport?: string;
}

const Menu = ({ onSelectType, currentSport }: MenuProps) => {
  const navigate = useNavigate();

  const handleSelect = (type: string) => {
    onSelectType(type);
    navigate(`/?sport=${type}`);
  };

  return (
    <div className="menu">
      <div id="eventType" className="menu-list">
        <div
          className={`menu-item ${currentSport === "football" ? "active" : ""}`}
          onClick={() => handleSelect("football")}
        >
          Football
        </div>
        <div
          className={`menu-item ${currentSport === "boxing" ? "active" : ""}`}
          onClick={() => handleSelect("boxing")}
        >
          Boxing
        </div>
        <div
          className={`menu-item ${currentSport === "baseball" ? "active" : ""}`}
          onClick={() => handleSelect("baseball")}
        >
          Baseball
        </div>
        <div
          className={`menu-item ${currentSport === "basketball" ? "active" : ""}`}
          onClick={() => handleSelect("basketball")}
        >
          Basketball
        </div>
      </div>
    </div>
  );
};

export default Menu;
