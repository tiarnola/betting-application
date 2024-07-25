import { useState } from "react";
import { useParams } from "react-router-dom";
import { Event, mockEvents } from "../../MockData/MockEvents";
import { Market, MockMarkets } from "../../MockData/MockMarkets";
import {
  MarketVolume,
  MockMarketVolumes,
} from "../../MockData/MockMarketVolumes";
import EventDetail from "../../components/EventDetail/EventDetail";
import Menu from "../../components/Menu/Menu";
import SmarketsHeader from "../../components/BettingAppHeader/BettingAppHeader";
import {
  MarketContract,
  mockMarketContracts,
} from "../../MockData/MockMarketContracts";

export const EventPage = () => {
  const { eventId } = useParams<{ eventId: string }>();

  const [, setSelectedSport] = useState<string | null>(null);

  const findEventById = (id: string, events: Event[]): Event | undefined => {
    for (const event of events) {
      if (event.id === id) {
        return event;
      }
      if (event.children) {
        const foundEvent = findEventById(id, event.children);
        if (foundEvent) {
          return foundEvent;
        }
      }
    }
    return undefined;
  };

  const findMarketsByEventId = (eventId: string): Market[] => {
    return MockMarkets.filter((market) => market.event_id === eventId);
  };

  const findMarketVolumesByMarketId = (
    marketId: string
  ): MarketVolume | undefined => {
    return MockMarketVolumes.find((volume) => volume.market_id === marketId);
  };

  const findMarketContractsByMarketId = (
    marketId: string
  ): MarketContract[] => {
    return mockMarketContracts.filter(
      (contract) => contract.market_id === marketId
    );
  };

  if (!eventId) {
    console.error("No eventId found in URL parameters");
    return <p>Event not found</p>;
  }

  const event = findEventById(eventId, mockEvents);

  if (!event) {
    return <p>Event not found</p>;
  }

  const markets = findMarketsByEventId(eventId);

  return (
    <div className="content">
      <SmarketsHeader></SmarketsHeader>
      <main className="main-section">
        <Menu onSelectType={setSelectedSport} />
        <EventDetail
          event={event}
          markets={markets}
          findMarketVolumesByMarketId={findMarketVolumesByMarketId}
          findMarketContractsByMarketId={findMarketContractsByMarketId}
        />
      </main>
    </div>
  );
};
