import "./EventList.css";
import EventCell from "../EventCell/EventCell";
import type { Event } from "../../assets/MockData/MockEvents";
import { Market } from "../../assets/MockData/MockMarkets";
import { MarketVolume } from "../../assets/MockData/MockMarketVolumes";

export interface EventListProps {
  events: Event[];
  findMarketsByEventId: (eventId: string) => Market[];
  findMarketVolumesByMarketId: (marketId: string) => MarketVolume | undefined;
}

const EventList = ({
  events,
  findMarketsByEventId,
  findMarketVolumesByMarketId,
}: EventListProps) => {
  const getLowerLevelEvents = (event: Event): Event[] => {
    if (event.children) {
      return event.children.flatMap(getLowerLevelEvents);
    } else {
      return [event];
    }
  };

  const lowerLevelEvents = events.flatMap(getLowerLevelEvents);

  return (
    <div className="cells-list">
      {lowerLevelEvents.map((event) => (
        <EventCell
          key={event.id}
          event={event}
          findMarketsByEventId={findMarketsByEventId}
          findMarketVolumesByMarketId={findMarketVolumesByMarketId}
        />
      ))}
    </div>
  );
};

export default EventList;
