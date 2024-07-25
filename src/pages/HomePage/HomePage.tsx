import "./HomePage.css";
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Event, mockEvents } from '../../MockData/MockEvents';
import { Market, MockMarkets } from '../../MockData/MockMarkets';
import { MarketVolume, MockMarketVolumes } from '../../MockData/MockMarketVolumes';
import EventList from '../../components/EventList/EventsList';
import Menu from '../../components/Menu/Menu';
import SmarketsHeader from "../../components/BettingAppHeader/BettingAppHeader";

export const HomePage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [filteredEvents, setFilteredEvents] = useState<Event[]>([]);
  const [currentSport, setCurrentSport] = useState<string | undefined>(undefined);

  const handleSelectType = (type: string) => {
    navigate(`/?sport=${type}`);
    filterEvents(type);
  };

  const filterEvents = (sport: string) => {
    const filtered = sport
      ? mockEvents.filter(event => event.type_domain === sport)
      : mockEvents;
    setFilteredEvents(filtered);
    setCurrentSport(sport);
  };

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const sport = queryParams.get("sport") || "football"; 
    filterEvents(sport);
  }, [location.search]);


  const findMarketsByEventId = (eventId: string): Market[] => {
    return MockMarkets.filter(market => market.event_id === eventId);
  };

  const findMarketVolumesByMarketId = (marketId: string): MarketVolume | undefined => {
    return MockMarketVolumes.find(volume => volume.market_id === marketId);
  };

  return (
    <div className="content">
      <SmarketsHeader></SmarketsHeader>
      <main className="main-section">
        <Menu onSelectType={handleSelectType} currentSport={currentSport} />
        <EventList
          events={filteredEvents}
          findMarketsByEventId={findMarketsByEventId}
          findMarketVolumesByMarketId={findMarketVolumesByMarketId}
        />
      </main>
    </div>
  );
};
