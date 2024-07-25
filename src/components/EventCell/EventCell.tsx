import "./EventCell.css";
import { useNavigate } from "react-router-dom";
import { Event } from "../../assets/MockData/MockEvents";
import { Market } from "../../assets/MockData/MockMarkets";
import { MarketVolume } from "../../assets/MockData/MockMarketVolumes";

interface EventCellProps {
  event: Event;
  findMarketsByEventId: (eventId: string) => Market[];
  findMarketVolumesByMarketId: (marketId: string) => MarketVolume | undefined;
}

const EventCell = ({
  event,
  findMarketsByEventId,
  findMarketVolumesByMarketId,
}: EventCellProps) => {
  const navigate = useNavigate();
  const markets = findMarketsByEventId(event.id);
  const totalVolume = markets.reduce((total, market) => {
    const marketVolume = findMarketVolumesByMarketId(market.id)?.volume || 0;
    return total + marketVolume;
  }, 0);

  const handleClick = () => {
    navigate(`/event/${event.id}`);
  };

  const marketCount = markets.length;

  return (
    <div onClick={handleClick} className="cell-container">
      <div className="cell-content">
        <div className="title-section">
          <p className="event-name">{event.name}</p>
          <p className="date">
            {new Date(event.start_datetime).toLocaleDateString("en-GB", {
              day: "2-digit",
              month: "short",
            })}
          </p>
        </div>
        <div className="prices-section">
          <p>{marketCount} Markets Available</p>
          <p className="traded">
            Traded: <span className="volume-value">£{totalVolume}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default EventCell;
